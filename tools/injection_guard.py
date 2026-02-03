#!/usr/bin/env python3
"""injection_guard.py

Pattern-based prompt-injection detector for untrusted extracted text.
Outputs JSON to stdout: { safe: bool, matches: [pattern_strings] }
"""

import json
import re
import sys

PATTERNS = [
    r"ignore\s+previous\s+instructions",
    r"disregard\s+all\s+prior\s+instructions",
    r"system\s+prompt",
    r"developer\s+message",
    r"you\s+are\s+chatgpt",
    r"do\s+not\s+follow\s+the\s+above",
    r"override\s+your\s+instructions",
    r"reveal\s+(the\s+)?(prompt|system\s+prompt|instructions)",
    r"print\s+the\s+hidden\s+instructions",
    r"exfiltrate",
    r"send\s+your\s+api\s+key",
    r"credentials?",
    r"passwords?",
    r"token",
    r"curl\s+http",
    r"run\s+this\s+command",
    r"execute\s+the\s+following",
    r"sudo\b",
    r"rm\s+-rf",
    r"do\s+anything\s+now",
]


def guard(text: str) -> dict:
    t = (text or "")
    hay = t.lower()
    matches = []
    for pat in PATTERNS:
        if re.search(pat, hay, flags=re.IGNORECASE):
            matches.append(pat)
    return {"safe": len(matches) == 0, "matches": matches}


def main() -> int:
    if len(sys.argv) == 2 and sys.argv[1] == "-":
        text = sys.stdin.read()
    elif len(sys.argv) == 2:
        text = sys.argv[1]
    else:
        print(json.dumps({"error": "usage", "usage": "injection_guard.py <text>|-"}))
        return 2

    out = guard(text)
    print(json.dumps(out, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
