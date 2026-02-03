#!/usr/bin/env python3
import subprocess
import sys
from pathlib import Path

def main():
    root = Path(__file__).resolve().parents[1]
    validator = root / "validate_skills.py"

    if not validator.exists():
        print("FAIL")
        return 1

    p = subprocess.run([sys.executable, str(validator)], cwd=str(root), capture_output=True, text=True)

    out = (p.stdout or "") + (p.stderr or "")

    # Basic assertions from output structure
    lines = [ln.strip() for ln in out.splitlines() if ln.strip()]
    if not lines:
        print("FAIL")
        return 1

    # PASS/FAIL only per skill lines are expected
    for ln in lines:
        if not (ln.startswith("PASS") or ln.startswith("FAIL")):
            print("FAIL")
            return 1

    # Ensure overall exit code matches
    if p.returncode != 0:
        print("FAIL")
        return 1

    print("PASS")
    return 0

if __name__ == "__main__":
    sys.exit(main())
