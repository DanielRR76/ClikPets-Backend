# ClikPets Backend

This repository is a Node.js/TypeScript REST API using Express 5, PostgreSQL 15, Prisma ORM 7 with `@prisma/adapter-pg`, Cloudinary, JWT cookies, tsup, and ESLint. Verify dependency versions and current implementations before relying on this summary.

## Architecture

`src/server.ts` is the composition root. Routes in `src/routes/` map Express requests to controllers; controllers create request DTOs and call application services; services enforce use-case rules and depend on contracts; Prisma repositories map database records to domain objects. Domain entities/value-like classes and errors live under `src/domain/` and `src/errors/`. This is a layered, dependency-injected design with domain modeling, not a mandate to introduce Clean/Hexagonal Architecture or additional layers.

Main workflows are user registration, login and profile editing; pet management; adoption scheduling; and adoption completion, which transfers pet ownership. Preserve their observed invariants and API/OpenAPI contracts unless the task explicitly changes them.

## Engineering guidance

- Trace existing behavior and nearby conventions before editing. Prefer the smallest clear change; justify new abstractions by a concrete need.
- Keep TypeScript types honest. `strict` is enabled, but `noImplicitAny` and ESLint's explicit-`any` rule are disabled; do not treat those opt-outs as a reason to add avoidable `any` or assertions.
- Validate untrusted input at request boundaries. Authentication does not establish resource ownership; preserve explicit authorization checks.
- Never expose passwords, tokens, secrets, or sensitive internals in responses or logs. Preserve the JWT cookie and frontend contract unless a migration is deliberately in scope. Review CSRF implications for cookie-authenticated state changes.
- Keep Prisma-specific work compatible with Prisma ORM 7, `prisma.config.ts`, and the PostgreSQL driver adapter. Consider constraints, migration safety, transaction boundaries, and measured query needs.
- No test framework or test script is currently present. If adding or changing tests, first inspect existing tooling and the task's constraints; do not invent a test command or database setup.
- Keep `public/openapi.yaml` aligned with API contract changes.

## Useful commands

- `npm run build` — tsup production build.
- `npm run generate` — generate Prisma Client.
- `npm run migrate:deploy` — apply deployed migrations.
- `npm run lint` — ESLint **with `--fix`**, which may modify source files; run only when fixing is intended.

## Definition of Done

The change follows existing boundaries, preserves or deliberately updates business/API contracts, handles relevant failures and security boundaries, updates OpenAPI or documentation when needed, and reports validation performed and limitations. Do not claim checks that were not run.
