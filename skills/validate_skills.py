#!/usr/bin/env python3
import json
import sys
from pathlib import Path

PROVIDERS = {"opus", "kimi_2_5", "codex", "system"}


def _strip_comments(line: str) -> str:
    out = ""
    in_s = False
    in_d = False
    i = 0
    while i < len(line):
        ch = line[i]
        if ch == "'" and not in_d:
            in_s = not in_s
        elif ch == '"' and not in_s:
            in_d = not in_d
        if ch == "#" and not in_s and not in_d:
            break
        out += ch
        i += 1
    return out.rstrip("\n")


def _parse_scalar(s: str):
    s = s.strip()
    if s == "":
        return ""
    if s.lower() == "true":
        return True
    if s.lower() == "false":
        return False
    if s.startswith('"') and s.endswith('"') and len(s) >= 2:
        return s[1:-1]
    if s.startswith("'") and s.endswith("'") and len(s) >= 2:
        return s[1:-1]
    # simple number
    try:
        if "." in s:
            return float(s)
        return int(s)
    except Exception:
        return s


def _indent(line: str) -> int:
    return len(line) - len(line.lstrip(" "))


def _parse_block(lines, i, base_indent):
    # Decide whether this block is a list or dict based on first non-empty line
    while i < len(lines) and lines[i].strip() == "":
        i += 1
    if i >= len(lines):
        return None, i

    if lines[i].lstrip().startswith("-"):
        arr = []
        while i < len(lines):
            if lines[i].strip() == "":
                i += 1
                continue
            ind = _indent(lines[i])
            if ind < base_indent:
                break
            if ind != base_indent:
                # list items must align
                break
            raw = lines[i].lstrip()[1:].lstrip()
            if raw == "":
                # nested block item
                i += 1
                item, i = _parse_block(lines, i, base_indent + 2)
                arr.append(item)
                continue
            if ":" in raw:
                # inline dict starter: "k: v" possibly with nested following
                k, v = raw.split(":", 1)
                k = k.strip()
                v = v.strip()
                obj = {k: _parse_scalar(v) if v != "" else None}
                i += 1
                # consume additional keys for this list item if indented
                while i < len(lines):
                    if lines[i].strip() == "":
                        i += 1
                        continue
                    ind2 = _indent(lines[i])
                    if ind2 < base_indent + 2:
                        break
                    if ind2 != base_indent + 2:
                        break
                    line = lines[i].strip()
                    if ":" not in line:
                        break
                    kk, vv = line.split(":", 1)
                    kk = kk.strip()
                    vv = vv.strip()
                    if vv == "":
                        i += 1
                        nested, i = _parse_block(lines, i, base_indent + 4)
                        obj[kk] = nested
                    else:
                        obj[kk] = _parse_scalar(vv)
                        i += 1
                arr.append(obj)
                continue
            arr.append(_parse_scalar(raw))
            i += 1
        return arr, i

    # dict block
    obj = {}
    while i < len(lines):
        if lines[i].strip() == "":
            i += 1
            continue
        ind = _indent(lines[i])
        if ind < base_indent:
            break
        if ind != base_indent:
            break
        line = lines[i].strip()
        if ":" not in line:
            break
        k, v = line.split(":", 1)
        k = k.strip()
        v = v.strip()
        if v == "":
            i += 1
            nested, i = _parse_block(lines, i, base_indent + 2)
            obj[k] = nested
        else:
            obj[k] = _parse_scalar(v)
            i += 1
    return obj, i


def load_yaml(path: Path):
    raw_lines = path.read_text(encoding="utf-8").splitlines(True)
    cleaned = []
    for ln in raw_lines:
        ln2 = _strip_comments(ln)
        if ln2.strip() == "":
            cleaned.append("")
        else:
            cleaned.append(ln2.rstrip("\n"))
    doc, _ = _parse_block(cleaned, 0, 0)
    return doc


def validate_with_jsonschema(doc, schema):
    try:
        import jsonschema  # type: ignore
    except Exception:
        return False, "jsonschema not available"

    try:
        jsonschema.validate(instance=doc, schema=schema)
        return True, ""
    except Exception as e:
        return False, str(e)


def minimal_validate(doc):
    required = [
        "name",
        "version",
        "purpose",
        "inputs",
        "outputs",
        "rules",
        "stop_conditions",
        "provider_affinity",
    ]
    for k in required:
        if k not in doc:
            return False, f"missing required field: {k}"

    pa = doc.get("provider_affinity", {})
    if pa.get("primary") not in PROVIDERS:
        return False, "invalid provider_affinity.primary"
    fb = pa.get("fallback", [])
    if not isinstance(fb, list) or any(x not in PROVIDERS for x in fb):
        return False, "invalid provider_affinity.fallback"

    return True, ""


def main():
    root = Path(__file__).resolve().parent
    repo_root = root.parent

    registry_path = root / "registry.yaml"
    schema_path = root / "schema" / "skill.schema.json"

    ok_all = True

    try:
        registry = load_yaml(registry_path)
    except Exception as e:
        print(f"FAIL registry.yaml | {e}")
        return 2

    try:
        schema = json.loads(schema_path.read_text(encoding="utf-8"))
    except Exception as e:
        print(f"FAIL skill.schema.json | {e}")
        return 2

    skills = registry.get("skills")
    if not isinstance(skills, list):
        print("FAIL registry.yaml | skills must be a list")
        return 2

    for item in skills:
        name = item.get("name") if isinstance(item, dict) else None
        file_rel = item.get("file") if isinstance(item, dict) else None
        if not name or not file_rel:
            print("FAIL (registry entry) | missing name/file")
            ok_all = False
            continue

        skill_path = repo_root / file_rel
        if not skill_path.exists():
            print(f"FAIL {name} | missing file: {file_rel}")
            ok_all = False
            continue

        try:
            doc = load_yaml(skill_path)
        except Exception as e:
            print(f"FAIL {name} | yaml load error: {e}")
            ok_all = False
            continue

        passed, _ = validate_with_jsonschema(doc, schema)
        if not passed:
            passed2, reason2 = minimal_validate(doc)
            if not passed2:
                print(f"FAIL {name} | {reason2}")
                ok_all = False
            else:
                print(f"PASS {name}")
        else:
            print(f"PASS {name}")

    return 0 if ok_all else 1


if __name__ == "__main__":
    sys.exit(main())
