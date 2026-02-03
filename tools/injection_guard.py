#!/usr/bin/env python3
"""injection_guard.py

Pattern-based prompt-injection detector for untrusted extracted text.
Outputs JSON to stdout:
  { "safe": true|false, "matches": ["<pattern label>", ...], "policy": "<policy id>" }

Notes:
- Matches are labels (human-readable), not regex strings.
- Policy is emitted when unsafe (safe==false).
"""

import json
import re
import sys

POLICY_ON_DETECTED = "S1_stop_and_escalate"

PATTERNS = [
    ("ignore previous instructions", r"ignore\s+previous\s+instructions"),
    ("disregard prior instructions", r"disregard\s+all\s+prior\s+instructions"),
    ("system prompt", r"system\s+prompt"),
    ("developer message", r"developer\s+message"),
    ("you are chatgpt", r"you\s+are\s+chatgpt"),
    ("override instructions", r"override\s+your\s+instructions"),
    ("do not follow above", r"do\s+not\s+follow\s+the\s+above"),
    ("reveal hidden instructions", r"reveal\s+(the\s+)?(prompt|system\s+prompt|instructions)"),
    ("print hidden instructions", r"print\s+the\s+hidden\s+instructions"),
    ("exfiltrate", r"exfiltrate"),
    ("api key request", r"send\s+your\s+api\s+key"),
    ("credentials request", r"credentials?"),
    ("passwords request", r"passwords?"),
    ("token request", r"token"),
    ("run this command", r"run\s+this\s+command"),
    ("execute the following", r"execute\s+the\s+following"),
    ("sudo", r"sudo"),
    ("rm -rf", r"rm\s+-rf"),
    ("do anything now", r"do\s+anything\s+now"),
]


def guard(text: str) -> dict:
    hay = (text or "")
    matches = []
    for label, rx in PATTERNS:
        if re.search(rx, hay, flags=re.IGNORECASE):
            matches.append(label)
    safe = len(matches) == 0
    out = {"safe": safe, "matches": matches}
    if not safe:
        out["policy"] = POLICY_ON_DETECTED
    return out


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
