---
name: testing-and-reliability
description: Plan behavior-focused tests and reliability checks for ClikPets business rules, API boundaries, persistence, and external-service failures.
---

# Testing and reliability

Use when adding coverage, investigating a regression, or reviewing failure behavior.

## Workflow

1. Inspect package scripts, dependencies, CI, tests, fixtures, and database setup. The current audited tree has no test framework, test files, or test script; verify again before proposing commands.
2. Express the expected behavior independently of implementation. Identify state transitions, invalid inputs, authorization boundaries, and external dependencies.
3. Choose a test level that fits the boundary: isolated domain/service behavior, repository integration with controlled PostgreSQL, or API behavior with explicit setup. Do not imply a live provider/database is available.
4. Cover relevant failures and cleanup, including persistence errors after media upload where applicable. Keep fixtures deterministic and isolate state.
5. Run only available, relevant checks. Note that `npm run lint` auto-fixes files; distinguish planning from execution and report exactly what ran.

## Project locations

`package.json`, `.github/workflows/`, `src/domain/`, `src/services/`, `src/controllers/`, `src/repositories/`, `prisma/`.

## Expected output

Give prioritized scenarios with setup, action, expected result, isolation needs, available validation commands, and infrastructure gaps. Involve `quality-reliability` agent for review; for API/security behavior coordinate `api-express` and `security-reviewer`.

## References

- Express 5 error propagation: https://expressjs.com/en/5x/guide/error-handling/
- GitHub custom agent skills: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills
