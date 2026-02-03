## Task Spec (Template — one page)

**Title:**  
**Owner (requester):**  
**Execution agent:**  
**Date / version:**  

### 1) Goal
- What outcome must be true when this is “done” (1–2 sentences).

### 2) Context
- Why this matters now.
- Relevant constraints, dependencies, stakeholders.

### 3) In scope
- Bullet list of what the agent should do.

### 4) Out of scope
- Explicit non-goals.

### 5) Assumptions
- Assumptions the agent may rely on.
- Unknowns that require confirmation.

### 6) Files / directories (hypothetical)
- Expected new/modified paths (examples):
  - `src/...`
  - `docs/...`
  - `tests/...`

### 7) Acceptance criteria (clear + checkable)
- AC1: …
- AC2: …
- AC3: …

### 8) Guardrails (agent must NOT do)
- No secrets/credentials handling.
- No network calls / external services unless explicitly allowed.
- No destructive operations unless explicitly approved.
- No scope expansion beyond “In scope.”
- No auth/permissions/security posture changes unless explicitly instructed.

### 9) Stop conditions (stop or escalate if…)
- Requirements are ambiguous or conflicting.
- Missing access/inputs block progress.
- A security/privacy concern appears.
- The solution requires a major architectural change not specified.

### 10) Breakage & Tests (REQUIRED)
- What could break (max 3 bullets):
  - …
  - …
  - …
- Checks/tests that would catch it (max 3 bullets):
  - …
  - …
  - …

### 11) Bugfix rule — Repro-first (ONLY if this task is a bugfix)
- Repro (required, before fix is attempted):
  - Steps to reproduce / observable failure:
  - Expected vs actual:

### 12) Review checklist (requester verifies before accepting)
- Meets Goal and Acceptance Criteria.
- No unintended scope changes.
- Edge cases handled.
- Breakage & Tests section is satisfied.
- Docs/comments sufficient.
- Rollback/revert straightforward.
