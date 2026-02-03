#!/usr/bin/env python3
"""safe_fetch.py

Fetch a URL safely (no auth/cookies/JS), cap bytes, cap redirects, extract readable text.
Outputs JSON to stdout.

Constraints:
- timeout <= 15s
- max bytes <= 2,000,000
- follow redirects up to 5
- user-agent set
- no cookies/auth
"""

import json
import re
import sys
import urllib.parse
import urllib.request
from html.parser import HTMLParser

MAX_BYTES = 2_000_000
TIMEOUT_S = 15
MAX_REDIRECTS = 5
UA = "DoloresSafeFetch/1.0 (+no-cookies; no-js)"


class _TextExtractor(HTMLParser):
    _SKIP_TAGS = {
        "script",
        "style",
        "form",
        "iframe",
        "nav",
        "footer",
        "noscript",
    }

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self._skip_depth = 0
        self._in_title = False
        self.title = ""
        self._chunks = []
        self.links = []

    def handle_starttag(self, tag, attrs):
        tag = tag.lower()
        if tag in self._SKIP_TAGS:
            self._skip_depth += 1
        if tag == "title":
            self._in_title = True
        if tag == "a":
            href = None
            for k, v in attrs:
                if (k or "").lower() == "href":
                    href = v
                    break
            if href:
                self.links.append(href)

    def handle_endtag(self, tag):
        tag = tag.lower()
        if tag in self._SKIP_TAGS and self._skip_depth > 0:
            self._skip_depth -= 1
        if tag == "title":
            self._in_title = False

    def handle_data(self, data):
        if self._skip_depth > 0:
            return
        if self._in_title:
            self.title += data
            return
        # Keep visible-ish text. Collapse later.
        s = (data or "").strip()
        if s:
            self._chunks.append(s)

    def text(self) -> str:
        joined = "\n".join(self._chunks)
        # Normalize whitespace, keep newlines for structure.
        joined = re.sub(r"[ \t\f\r]+", " ", joined)
        joined = re.sub(r"\n{3,}", "\n\n", joined)
        return joined.strip()


class _NoRedirect(urllib.request.HTTPRedirectHandler):
    pass


def _open_url(url: str):
    # No cookiejar, no auth handlers.
    opener = urllib.request.build_opener(urllib.request.ProxyHandler())
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "text/html,application/xhtml+xml,text/plain;q=0.8,*/*;q=0.5"})
    return opener.open(req, timeout=TIMEOUT_S)


def fetch(url: str) -> dict:
    if not isinstance(url, str) or not url.strip():
        raise ValueError("url_required")

    current = url.strip()
    redirects = 0
    last_status = None
    content_type = None

    while True:
        resp = _open_url(current)
        last_status = getattr(resp, "status", None) or resp.getcode()
        # Handle redirects manually (some servers return 301/302 with Location)
        if last_status in (301, 302, 303, 307, 308):
            if redirects >= MAX_REDIRECTS:
                raise RuntimeError("too_many_redirects")
            loc = resp.headers.get("Location")
            if not loc:
                raise RuntimeError("redirect_without_location")
            current = urllib.parse.urljoin(current, loc)
            redirects += 1
            continue

        content_type = (resp.headers.get("Content-Type") or "").split(";")[0].strip().lower()

        # Read with hard cap
        total = 0
        chunks = []
        while True:
            chunk = resp.read(65536)
            if not chunk:
                break
            chunks.append(chunk)
            total += len(chunk)
            if total > MAX_BYTES:
                raise RuntimeError("max_bytes_exceeded")

        raw = b"".join(chunks)

        # Decode as best effort
        charset = "utf-8"
        ct = resp.headers.get("Content-Type") or ""
        m = re.search(r"charset=([a-zA-Z0-9_\-]+)", ct)
        if m:
            charset = m.group(1)
        try:
            body = raw.decode(charset, errors="replace")
        except Exception:
            body = raw.decode("utf-8", errors="replace")

        title = ""
        text = ""
        links = []

        if content_type in ("text/html", "application/xhtml+xml"):
            parser = _TextExtractor()
            parser.feed(body)
            title = re.sub(r"\s+", " ", (parser.title or "").strip())
            text = parser.text()
            # Canonicalize outbound links to absolute URLs where possible.
            out = []
            for href in parser.links:
                try:
                    absu = urllib.parse.urljoin(current, href)
                    out.append(absu)
                except Exception:
                    continue
            # Deduplicate preserving order
            seen = set()
            links = [x for x in out if not (x in seen or seen.add(x))]
        else:
            # For non-HTML, don't attempt heavy parsing.
            title = ""
            text = ""
            links = []

        return {
            "canonical_url": current,
            "http_status": int(last_status) if last_status is not None else None,
            "content_type": content_type,
            "title": title,
            "text": text,
            "outbound_links": links,
            "bytes_fetched": len(raw),
        }


def main() -> int:
    if len(sys.argv) != 2:
        print(json.dumps({"error": "usage", "usage": "safe_fetch.py <url>"}))
        return 2

    url = sys.argv[1]
    try:
        out = fetch(url)
        print(json.dumps(out, ensure_ascii=False))
        return 0
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
