---
name: prisma-postgresql
description: Change Prisma schema, PostgreSQL data constraints, migrations, repository queries, transactions, or investigate database performance in ClikPets.
---

# Prisma and PostgreSQL workflow

## Use when

Use for `prisma/schema.prisma`, `prisma.config.ts`, migrations, Prisma repositories/client lifecycle, or database query analysis.

## Workflow

1. Read the schema, config, committed migrations, repository contract, implementation, and relevant domain mapping.
2. Check package and lockfile versions. This project uses Prisma ORM 7, `prisma.config.ts`, the generated client under `generated/prisma`, and `@prisma/adapter-pg` at runtime.
3. State the data invariant and compatibility needs before changing schema. Inspect nullability, uniqueness, foreign keys, indexes, JSON handling, and existing production data assumptions.
4. For migrations, inspect generated SQL and assess deploy ordering, locking, backfill needs, rollback limits, and compatibility with running application versions.
5. Use transactions for multi-step writes only when atomicity is required; identify concurrency windows in read-then-write rules such as scheduling and duplicate checks.
6. For performance work, first identify query shape and available workload/query-plan evidence. Consider pagination, batching, and indexes as measured options, not automatic fixes.
7. Update generated/client-facing code only through the repository's supported Prisma workflow, and keep domain mapping and API contracts aligned.

## Project conventions

- Prisma 7 datasource URL is configured in `prisma.config.ts`; the schema's datasource declares PostgreSQL.
- Runtime client creation uses a PostgreSQL driver adapter in `src/libs/prisma.ts`.
- `Pet.images` is Prisma `Json` and is mapped to `string[]`; preserve validation at the boundary and account for this conversion.
- The current pet list is unpaginated and adoption listing performs separate owner lookups; workload evidence is not available.

## Validation and deliverable

Use `npm run generate` and `npm run build` as appropriate. Review the migration SQL and report invariant, migration risks, query evidence, and checks. No database-backed test setup is configured.

## References

- [Prisma ORM 7 PostgreSQL](https://www.prisma.io/docs/orm/v7/core-concepts/supported-databases/postgresql)
- [Prisma ORM 7 driver adapters](https://www.prisma.io/docs/orm/v7/core-concepts/supported-databases/database-drivers)
- [Prisma config reference](https://www.prisma.io/docs/orm/v7/reference/prisma-config-reference)
- [PostgreSQL 15 indexes](https://www.postgresql.org/docs/15/indexes.html)
