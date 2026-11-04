# ClikPets Copilot Customizations

This repository uses GitHub Copilot's native repository customizations. Global guidance is intentionally concise; focused workflows live in skills, while reusable specialist roles live in agent profiles. The codebase baseline and evidence are in [codebase-analysis.md](codebase-analysis.md).

## Instructions

- `.github/copilot-instructions.md` applies broad architecture, safety, workflow, and Definition of Done guidance.
- `.github/instructions/typescript.instructions.md` applies to `src/**/*.ts`.
- `.github/instructions/http-api.instructions.md` applies to routes, controllers, middleware, and OpenAPI.
- `.github/instructions/business-services.instructions.md` applies to services and domain classes.
- `.github/instructions/prisma-postgres.instructions.md` applies to Prisma schema/configuration, repositories, and Prisma client setup.
- `.github/instructions/security-config.instructions.md` applies to authentication, media, server/environment configuration.
- `.github/instructions/tests.instructions.md` applies to conventional test file names and test directories.

## Agents

| Agent | Use it for | Boundary |
| --- | --- | --- |
| `backend-architect` | Cross-module design, business flow, and system tradeoffs | Owns overall boundaries; does not replace specialists |
| `api-express` | REST routes, controllers, middleware, validation, OpenAPI | Owns HTTP contract and lifecycle |
| `prisma-postgres` | Prisma 7, PostgreSQL schema/migrations, integrity, queries | Owns persistence and database analysis |
| `security-reviewer` | JWT cookies, CSRF, authorization, secrets, uploads | Reviews risk; does not redesign auth without scope |
| `quality-reliability` | TypeScript quality, test scenarios, failure/regression review | Reports available tooling honestly; no assumed test runner |

Profiles are in `.github/agents/*.agent.md`. They are read/search focused for review and analysis; use implementation tools only when the task calls for changes.

## Skills

| Skill | Activate for |
| --- | --- |
| `feature-delivery` | Business feature crossing layers |
| `express-api-change` | Endpoint or HTTP contract change |
| `prisma-postgres-change` | Schema, migration, repository, transaction, or query change |
| `auth-and-upload-review` | Authentication, security, or image lifecycle review/change |
| `testing-and-reliability` | Test planning, regression investigation, or failure handling |
| `refactor-and-performance-review` | Behavior-preserving refactors or evidence-based optimization |

Each lives at `.github/skills/<skill-name>/SKILL.md` and gives its own repeatable workflow. Skills supplement rather than duplicate global rules.

## Collaboration

The coordinating Copilot agent owns the final decision and consolidates specialist findings. A feature may combine `backend-architect` and `api-express`; include `prisma-postgres` when data shape or persistence changes; include `security-reviewer` for identity, ownership, cookies, or uploads; and include `quality-reliability` for test and failure coverage. Database query concerns go to `prisma-postgres`; broader system tradeoffs go to `backend-architect`, so there is no separate overlapping performance agent.

## Maintenance

- Recheck project facts against source/configuration when the stack or architecture changes; update the analysis report and the smallest affected guidance files.
- Keep `applyTo` patterns aligned with actual directories and avoid overlapping rules that can contradict each other.
- Check GitHub's current Copilot customization formats when maintaining frontmatter or supported agent tools. Keep skill names lowercase and hyphenated.
- Add a new skill or agent only for a recurring distinct workflow or responsibility. Do not add Claude-specific files or a second generic root instruction set as part of this ecosystem.
- Review all docs and guidance for version compatibility, source links, and claims about tooling before merging.

## Validation report

**Format and structure:** The 5 agent profiles, 6 path-specific instruction files, and 6 skill files use YAML frontmatter. Agent profiles include a name, description, and restricted read/search tools. Instructions use `applyTo`; skills use unique lowercase hyphenated names and descriptions. The global Copilot instruction file is intentionally plain Markdown. Internal path references were checked against the audited repository structure; stack/version claims are grounded in `package.json` and project configuration.

**Scenario review:** These are tabletop checks against the customization guidance, not application changes or runtime tests.

| Scenario | Skill | Agents | Guidance check |
| --- | --- | --- | --- |
| Add an API endpoint | `express-api-change`, `feature-delivery` | `api-express`, `backend-architect`, `quality-reliability` | Trace route/controller/DTO/service; preserve auth and response contract; update OpenAPI; do not assume shared error middleware. |
| Add a Prisma model and migration | `prisma-postgres-change`, `feature-delivery` | `prisma-postgres`, `backend-architect`, `quality-reliability` | Check Prisma 7 config, relations/constraints, migration and mappings; assess transaction and compatibility needs. |
| Change authentication | `auth-and-upload-review`, `express-api-change` | `security-reviewer`, `api-express`, `quality-reliability` | Preserve cookie/frontend contract absent planned migration; assess CSRF, authorization, secret handling, and regression behavior. |
| Change Cloudinary uploads | `auth-and-upload-review`, `feature-delivery` | `security-reviewer`, `api-express`, `quality-reliability` | Trace Multer through DTO/service/provider and cleanup; verify installed SDK behavior and do not assume file limits. |
| Refactor a service | `refactor-and-performance-review`, `testing-and-reliability` | `backend-architect`, `quality-reliability` | Establish behavior first; preserve invariants and side-effect failure behavior; avoid unneeded abstractions. |
| Plan integration tests | `testing-and-reliability` | `quality-reliability`, plus relevant API/database/security specialist | Inspect existing tooling; report that no test runner or test script was found instead of fabricating one. |
| Investigate database performance | `refactor-and-performance-review`, `prisma-postgres-change` | `prisma-postgres`, `backend-architect` | Separate observed query patterns from hypotheses; request plans/workload evidence; do not assert pagination or an index is already present. |

**Limitations:** GitHub Copilot runtime behavior was not exercised in an IDE or cloud session. This repository has no test framework; no application tests, build, or lint command were run because this work changes only guidance and documentation. `npm run lint` is auto-fixing and was not run. YAML/frontmatter syntax and required metadata were checked locally; `git diff --check` reported no whitespace errors in tracked diff (new files were additionally inspected during review).

## External format references

- GitHub customization comparison: https://docs.github.com/en/copilot/concepts/customizations/comparing-customizations
- GitHub custom agents: https://docs.github.com/en/copilot/concepts/customizations/custom-agents
- GitHub custom instructions: https://docs.github.com/en/copilot/concepts/prompting-and-context/custom-instructions
- GitHub agent skills: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills
