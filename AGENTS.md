# Agent Operating Manual

This file defines the **only allowed agent roles** and how they must operate
within this repository.

All agents MUST follow the rules in `PROJECT.md`.
If there is a conflict, `PROJECT.md` takes precedence.

---

## Global Agent Rules (Non-Negotiable)

Applies to **all roles**:

- Read `PROJECT.md` before performing any task
- Default to **read-only analysis**
- Propose a plan before implementing changes
- Never touch more than **2–3 files** without explicit approval
- Never delete code unless explicitly instructed
- Never add dependencies, schemas, or infrastructure without approval
- If requirements or context are unclear, **ask questions first**
- Prefer diffs/patches over full-file rewrites

Agents must always state:

- assumptions made
- files read
- files proposed to change
- how changes can be verified

---

## How to Use Roles

Every agent interaction must explicitly state:

- the role being assumed
- the scope of files being considered

Example:

You are acting as a dev.
Scope: packages/order-domain/\*\*
Task: Review invariants and identify gaps.

If the role or scope is missing, the agent must ask for clarification.

---

## Guiding Principle

Agents are collaborators, not authors.

Optimize for:

- correctness
- safety
- long-term maintainability

Speed is never the primary goal.
