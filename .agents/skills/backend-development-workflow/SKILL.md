---
name: backend-development-workflow
description: Deliver a ClikPets backend feature, bug fix, review, or release-readiness change by tracing behavior, coordinating focused analysis, and validating the result.
---

# Backend development workflow

## Use when

Use for multi-file features, bug investigations, broad changes, code review, or pre-release validation. For a focused technical area, also load its specialist skill.

## Workflow

1. Check working-tree status and relevant instructions. Read `docs/engineering/codebase-analysis.md` when architecture, security, or unresolved deployment context matters.
2. Reproduce or trace current behavior from the real entry point. Separate confirmed facts from assumptions and scope the smallest change that meets the request.
3. Map affected route/controller/DTO/service/domain/repository/provider layers and the user, pet, adoption, or API contract invariants.
4. For substantial independent reviews, delegate bounded analysis to relevant Codex custom agents. Ask for evidence and risks, not edits. Keep one coordinator responsible for decisions and file changes; avoid parallel writers on shared files.
5. Implement the change following nearby conventions. Update OpenAPI, migrations, or docs when the externally visible or persisted contract changes.
6. Inspect relevant success, failure, security, and regression cases. Run appropriate checks confirmed by `package.json`; no test runner is currently configured, and lint is auto-fixing.
7. Review the final diff for unrelated changes, leaked secrets, contract drift, and claims unsupported by checks.

## Agent routing

- Cross-layer rules or module tradeoffs: `backend-architect`.
- Routes, middleware, DTOs, controllers, or HTTP contracts: `api-workflow-specialist`.
- Prisma, migrations, data integrity, or query evidence: `data-performance-specialist`.
- Type safety, tests, regressions, and failure behavior: `reliability-specialist`.
- The coordinator decides which reports apply and owns final implementation and conclusions.

## Validation and deliverable

Report behavior changed, contracts/invariants preserved or deliberately changed, agents consulted if any, commands/checks run, and limitations. Never present a tabletop scenario as a runtime test.
