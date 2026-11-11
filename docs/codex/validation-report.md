# Codex Ecosystem Validation Report

## Repository basis

- The audit in [`docs/engineering/codebase-analysis.md`](../engineering/codebase-analysis.md) is the shared source for architecture, business rules, security observations, performance hypotheses, and missing test tooling.
- Stack and scripts were checked in `package.json`, the lockfile, `tsconfig.json`, `tsup.config.ts`, `prisma.config.ts`, and `prisma/schema.prisma`.
- Existing Copilot customizations are located under `.github/copilot-instructions.md`, `.github/instructions/`, `.github/agents/`, and `.github/skills/`; their accompanying documentation is `docs/engineering/copilot-customizations.md`.

## Formats and discovery

- Root instruction file: `AGENTS.md`.
- Repository skills: `.agents/skills/<name>/SKILL.md`, each with `name` and `description` frontmatter.
- Custom agent profiles: `.codex/agents/*.toml`, each with required `name`, `description`, and `developer_instructions` fields.
- Project `.codex/config.toml`: intentionally omitted; the current Codex docs say subagent tools are enabled by default, and no local override is justified.
- No nested `AGENTS.md` is present because no directory-specific rule set was identified.
- Custom agents are instructed to analyze without editing, but Codex permissions are inherited from the parent session; instructions do not enforce a per-agent read-only sandbox.

## Scenario review

The following are tabletop checks against the skills, agents, and repository facts. They are not application runtime tests.

| Scenario | Workflow and agents | Required checks represented |
| --- | --- | --- |
| Add an API endpoint | Express API + development workflow; API specialist, reliability reviewer | Route through service trace, auth/ownership, DTO/response contract, OpenAPI, failure cases |
| Add a Prisma model and migration | Prisma/PostgreSQL + development workflow; architect and data specialist | Prisma 7 config/adapter, relations and constraints, migration SQL and compatibility, domain mapping |
| Change authentication | Security + Express API; API specialist and reliability reviewer | Existing cookie/frontend contract, CSRF context, token/session behavior, resource authorization, regressions |
| Change Cloudinary uploads | Security + development workflow; API specialist and reliability reviewer | Multer limits/type checks, provider flow, cleanup failures, secret-safe logs |
| Refactor a service | Architecture + TypeScript quality + testing/reliability; architect and reliability reviewer | Preserve business behavior and side effects, avoid unsupported abstractions, identify available verification |
| Plan integration tests | Testing/reliability; reliability specialist | Inspect actual tooling first; report no configured test runner rather than inventing one |
| Investigate database performance | Prisma/PostgreSQL; data specialist and architect | Separate observed query shape from hypotheses; request workload/query-plan evidence before proposing optimization |

## Checks and limitations

- Codex CLI version observed during setup: `codex-cli 0.164.0-alpha.11.1`. The native formats were checked against current OpenAI Codex documentation; runtime discovery should be rechecked when the CLI is upgraded.
- No application tests were run because no test framework or test command is configured. The lint script invokes `--fix` and is not an appropriate read-only ecosystem check.
- Validation is structural and scenario-based; Codex runtime invocation, delegation, and skill activation depend on the contributor's installed Codex environment and parent permissions.
- Deployment/frontend origins, production database workload, Cloudinary requirements, and test database lifecycle remain unresolved as recorded in the architecture audit.
