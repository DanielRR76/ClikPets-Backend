# ClikPets Backend

Node.js and TypeScript REST API for users, pets, and adoptions. The current stack is Express 5, PostgreSQL 15, Prisma ORM 7 with `@prisma/adapter-pg`, Cloudinary, JWT cookies, tsup, and ESLint. Check `package.json`, the lockfile, and nearby code before relying on versions or conventions.

## Architecture and domain

`src/server.ts` composes the application. Routes and middleware feed controllers and DTOs; services implement use cases and depend on repository and integration contracts; Prisma repositories map PostgreSQL records to domain objects. This is a layered design with dependency injection and domain modeling. Do not add architecture layers or patterns without a concrete benefit.

Preserve the observed user, pet ownership, and adoption scheduling/completion rules. Keep `public/openapi.yaml` aligned with HTTP contract changes. The evidence-based architecture audit, including unresolved questions, is in [docs/engineering/codebase-analysis.md](docs/engineering/codebase-analysis.md).

## Engineering rules

- Follow nearby naming, formatting, dependency, and error-handling conventions; keep changes focused.
- Treat request data as untrusted. Authentication does not replace resource ownership checks.
- Avoid avoidable `any`, unsafe assertions, and duplicate types. TypeScript `strict` is enabled, but `noImplicitAny` is explicitly disabled.
- Keep database changes compatible with Prisma 7, `prisma.config.ts`, and the PostgreSQL driver adapter. Consider integrity, safe migrations, and transaction boundaries.
- Never expose passwords, tokens, secrets, or sensitive internals in responses or logs. Preserve the `accessToken` HttpOnly cookie and frontend contract unless a migration is in scope; assess CSRF for cookie-authenticated state changes.
- Trace uploaded files from Multer through validation and Cloudinary; verify size, type, cleanup, and failure behavior instead of assuming controls exist.
- No test framework or test script is currently configured. Inspect available tooling before proposing test commands or database setup.
- Treat pagination, indexes, batching, caching, and other performance changes as hypotheses until workload or query evidence supports them.

## Commands

- `npm run build` — build with tsup.
- `npm run generate` — generate Prisma Client.
- `npm run migrate:deploy` — deploy committed migrations.
- `npm run lint` — runs ESLint with `--fix` and may edit source files; use only when that is intended.

## Definition of Done

Preserve or deliberately update business and API contracts; handle relevant failure and authorization boundaries; update OpenAPI or documentation when needed; run appropriate non-destructive checks; and report what was verified and what remains unknown.

## Skills

Use the focused workflows in `.agents/skills/` when they fit the task: [architecture](.agents/skills/backend-architecture/SKILL.md), [Express API](.agents/skills/express-api-development/SKILL.md), [Prisma/PostgreSQL](.agents/skills/prisma-postgresql/SKILL.md), [security](.agents/skills/backend-security/SKILL.md), [TypeScript quality](.agents/skills/typescript-code-quality/SKILL.md), [testing and reliability](.agents/skills/backend-testing-reliability/SKILL.md), and [development workflow](.agents/skills/backend-development-workflow/SKILL.md). Load only the workflow relevant to the request.
