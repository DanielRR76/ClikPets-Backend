---
name: refactor-and-performance-review
description: Review ClikPets refactors and performance concerns against existing behavior and evidence, avoiding speculative abstractions and optimization.
---

# Refactoring and performance review

Use when simplifying existing code, investigating latency/resource use, or evaluating proposed optimization.

## Workflow

1. Read the target code and call sites. Record current behavior, contracts, dependencies, data volume assumptions, and error/side-effect paths before suggesting changes.
2. Separate maintainability issues from performance hypotheses. Identify evidence available (query shape, EXPLAIN output, profiling, request volume, memory limits) and what is missing.
3. Prefer a behavior-preserving, bounded change. Add a pattern, cache, queue, worker, index, or infrastructure only when a demonstrated requirement justifies its operational cost.
4. For database concerns, inspect query filters, result cardinality, relation loading, pagination needs, and indexes; ask for production workload or plans when necessary. For Node concerns, identify synchronous CPU or memory-heavy work before optimization.
5. Define regression checks and measurements that would show the change helped. Do not claim a bottleneck or improvement without measurements.

## Project locations

`src/services/`, `src/repositories/`, `src/domain/`, `src/server/`, `prisma/schema.prisma`, `prisma/migrations/`, `package.json`.

## Expected output

State observed behavior, evidence and confidence, smallest viable improvement, tradeoffs, regression checks, measurement plan, and unresolved assumptions. Coordinate schema/query work with `prisma-postgres` and broad boundary changes with `backend-architect`.

## References

- PostgreSQL 15 EXPLAIN: https://www.postgresql.org/docs/15/sql-explain.html
- PostgreSQL 15 indexes: https://www.postgresql.org/docs/15/indexes.html
- Node.js security/performance context: https://nodejs.org/learn/getting-started/security-best-practices
