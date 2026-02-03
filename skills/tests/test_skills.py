#!/usr/bin/env python3
import importlib.util
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

    # 1) Basic assertions from output structure
    lines = [ln.strip() for ln in out.splitlines() if ln.strip()]
    if not lines:
        print("FAIL")
        return 1
    for ln in lines:
        if not (ln.startswith("PASS") or ln.startswith("FAIL")):
            print("FAIL")
            return 1

    # 2) Validator must succeed
    if p.returncode != 0:
        print("FAIL")
        return 1

    # 3) Import validator parser to read registry + skill docs (no PyYAML required)
    spec = importlib.util.spec_from_file_location("validate_skills", str(validator))
    mod = importlib.util.module_from_spec(spec)
    assert spec and spec.loader
    spec.loader.exec_module(mod)

    reg = mod.load_yaml(root / "registry.yaml")
    skills = reg.get("skills") if isinstance(reg, dict) else None
    if not isinstance(skills, list):
        print("FAIL")
        return 1

    names = []
    for s in skills:
        if not isinstance(s, dict):
            print("FAIL")
            return 1
        name = s.get("name")
        file_rel = s.get("file")
        if not name or not file_rel:
            print("FAIL")
            return 1
        names.append(name)
        if not (root.parent / file_rel).exists():
            print("FAIL")
            return 1

    if len(names) != len(set(names)):
        print("FAIL")
        return 1

    # 4) New skills must exist in registry
    if "link_reader_generic" not in names or "x_link_reader" not in names:
        print("FAIL")
        return 1

    # 5) New skills must include tags
    for nm in ("link_reader_generic", "x_link_reader"):
        doc = mod.load_yaml(root.parent / f"skills/{nm}.yaml")
        tags = doc.get("tags") if isinstance(doc, dict) else None
        if not isinstance(tags, list) or not tags:
            print("FAIL")
            return 1
        if any((not isinstance(t, str)) or (not t) for t in tags):
            print("FAIL")
            return 1

    print("PASS")
    return 0


if __name__ == "__main__":
    sys.exit(main())
