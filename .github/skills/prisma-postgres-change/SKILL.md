---
name: prisma-postgres-change
description: Plan and implement Prisma ORM 7 and PostgreSQL schema, migration, repository, transaction, or query changes in ClikPets.
---

# Prisma and PostgreSQL change

Use for data model, migration, persistence, query, or database performance work.

## Workflow

1. Verify installed Prisma version and inspect `prisma.config.ts`, `prisma/schema.prisma`, migration history, generated-client imports, `src/libs/prisma.ts`, repository contract, and mapping code.
2. Trace the affected fields and relations into domain constructors, DTOs, service behavior, API output, and existing rows. Treat `Pet.images` as JSON storage currently mapped to a URL array.
3. Define required integrity: nullability, uniqueness, foreign-key behavior, indexes, and adoption/data invariants. Consider concurrent writes and transaction boundaries explicitly.
4. Design a forward-compatible migration and repository changes. Do not assume application checks enforce uniqueness under concurrency; do not assume Cloudinary work can be rolled back by a PostgreSQL transaction.
5. Consider query plans and pagination from actual workload evidence. Separate measured bottlenecks from opportunities to investigate.
6. Validate schema/client/migration and relevant tests using available scripts and environment. Report when database access or an integration environment is unavailable.

## Project locations

`prisma.config.ts`, `prisma/schema.prisma`, `prisma/migrations/`, `src/libs/prisma.ts`, `src/contracts/`, `src/repositories/`, `src/domain/`.

## Expected output

Describe data invariant, schema and migration effect, code mapping, concurrency/transaction choices, compatibility and rollback considerations, and validation evidence. Ask `backend-architect` about cross-module impact and `quality-reliability` about regression coverage.

## References

- Prisma ORM 7 config: https://www.prisma.io/docs/orm/v7/reference/prisma-config-reference
- Prisma ORM 7 PostgreSQL: https://www.prisma.io/docs/orm/v7/core-concepts/supported-databases/postgresql
- PostgreSQL 15 indexes: https://www.postgresql.org/docs/15/indexes.html
- PostgreSQL 15 EXPLAIN: https://www.postgresql.org/docs/15/sql-explain.html
