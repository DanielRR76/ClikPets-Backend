---
name: feature-delivery
description: Trace and implement a ClikPets business feature across HTTP, DTO, service, domain, persistence, OpenAPI, and validation boundaries.
---

# Feature delivery

Use for a new business capability or a change that crosses multiple application layers.

## Workflow

1. Read the relevant route, controller, DTO, service, domain object, repository contract/implementation, Prisma schema, and OpenAPI paths. Identify the actual request-to-storage flow.
2. State the user-visible behavior, existing invariants, authorization boundary, and compatibility requirements. For pet adoption, trace scheduling and completion together.
3. Propose the smallest change through existing layers. Add abstractions only for a concrete coupling or reuse problem. Identify database constraints, side effects, and failure/rollback behavior.
4. Update the OpenAPI contract and focused tests when applicable. First determine whether a test framework/environment exists; currently none was found in the audited repository.
5. Validate with available relevant checks. `npm run lint` uses `--fix`; mention its mutating behavior before choosing it. Do not claim unrun checks.

## Project locations

`src/routes/`, `src/controllers/`, `src/dtos/`, `src/services/`, `src/domain/`, `src/contracts/`, `src/repositories/`, `prisma/`, `public/openapi.yaml`.

## Expected output

Summarize behavior and files changed, invariants preserved, API/data compatibility, validation performed, and unresolved assumptions. Involve `backend-architect` for cross-module tradeoffs, `api-express` for contract details, `prisma-postgres` for persistence, `security-reviewer` for trust boundaries, and `quality-reliability` for test scenarios.

## References

- Copilot skills: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills
- Express 5 errors: https://expressjs.com/en/5x/guide/error-handling/
