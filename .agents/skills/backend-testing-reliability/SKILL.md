---
name: backend-testing-reliability
description: Plan or implement behavior-focused tests, regression checks, and failure-path handling for ClikPets while accounting for the repository's actual test tooling.
---

# Testing and reliability workflow

## Use when

Use for test planning, test implementation, failure handling, regression investigations, database isolation, or reliability review.

## Workflow

1. Search the repository for test files, test scripts, test dependencies, fixtures, and CI checks. Report what exists; do not assume Jest, Vitest, Supertest, or a test database.
2. Identify the behavior and business invariant at risk. Prefer tests at the narrowest useful boundary, adding integration coverage for HTTP, persistence, auth, or provider interactions when those boundaries matter.
3. Cover success, invalid input, authorization/ownership denial, not-found, and dependency failure as relevant. Test adoption scheduling/completion and cleanup behavior when affected.
4. Keep tests isolated and deterministic. Make external services and database state explicit; do not use production credentials or destructive shared-database operations.
5. If no framework exists, report the gap and propose a minimal compatible setup only when the task authorizes adding tooling.
6. Run only commands present in package scripts or confirmed tooling. Do not use `npm run lint` as a read-only check because it invokes `--fix`.

## Project conventions

- No test framework, test files, or test script is currently configured.
- `npm run build` is a non-test validation option. Database migration scripts can modify data and require deliberate environment selection.

## Validation and deliverable

Summarize scenarios covered, isolation strategy, commands actually run, and untested risks. Do not claim tests passed when only a plan or static review was completed.

## References

- [Refactoring.Guru: Refactoring](https://refactoring.guru/refactoring)
- [Express 5 error handling](https://expressjs.com/en/5x/guide/error-handling/)
- [Prisma ORM 7 PostgreSQL](https://www.prisma.io/docs/orm/v7/core-concepts/supported-databases/postgresql)
