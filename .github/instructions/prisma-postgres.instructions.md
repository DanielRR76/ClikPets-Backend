---
applyTo: "prisma/**,prisma.config.ts,src/repositories/**/*.ts,src/libs/prisma.ts"
---

- This project uses Prisma ORM 7. Check `package.json`, `prisma.config.ts`, `prisma/schema.prisma`, migrations, and `src/libs/prisma.ts` before changing database setup. Runtime access uses `@prisma/adapter-pg`; do not copy Prisma 6/8 configuration assumptions.
- Schema changes require a reviewed migration and corresponding repository/domain mapping changes. Preserve existing relation semantics and constraints unless the task intentionally changes them.
- Treat `Pet.images` as Prisma `Json` in storage and a URL array in current repository mapping; validate JSON shape at the boundary rather than relying on an unchecked cast.
- Assess uniqueness, foreign keys, nullability, indexes, and delete/update behavior as data-integrity decisions. The existing pet duplicate check is application-level; do not assume it is concurrency-safe.
- Use transactions when several database writes must preserve one invariant. For performance claims, inspect query shape and seek evidence; do not add speculative indexes or caching.
- Follow Prisma 7 configuration documentation: https://www.prisma.io/docs/orm/v7/reference/prisma-config-reference and https://www.prisma.io/docs/orm/v7/core-concepts/supported-databases/postgresql
