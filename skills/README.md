# Skills System (v1)

A minimal, local, machine-readable skills registry for Dolores.

## What this is
- **YAML skill files** under `skills/` are the source of truth.
- A **registry** (`skills/registry.yaml`) lists available skills and routing metadata.
- A **schema** (`skills/schema/skill.schema.json`) defines the required fields.
- A **validator** checks that each skill file matches the schema.

## Directory layout
- `skills/` — YAML skill definitions
- `skills/schema/` — JSON Schema
- `skills/tests/` — minimal test harness

## Add a new skill
1) Create `skills/<name>.yaml` following the canonical format.
2) Add an entry to `skills/registry.yaml` with `name`, `file`, providers, and tags.
3) Run validation/tests.

## Run validation
From `~/clawdbot/work/skills`:
- `python3 validate_skills.py`

## Run tests
From `~/clawdbot/work/skills`:
- `python3 tests/test_skills.py`

## Routing usage
- Use `registry.yaml` to select skills by `tags`.
- Use each skill’s `provider_affinity` to select a provider:
  - Prefer `primary`
  - If unavailable, try `fallback` once
  - **No retries, no scope expansion**

## Stop conditions enforcement
- A skill’s `stop_conditions` are hard stops.
- If any stop condition triggers, the system must stop and report the missing inputs or unsafe condition.
