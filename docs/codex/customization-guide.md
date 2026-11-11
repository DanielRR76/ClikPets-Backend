# Codex Customization Guide

This repository's Codex guidance is independent of GitHub Copilot. Codex uses the root [`AGENTS.md`](../../AGENTS.md), repository skills in `.agents/skills/`, and custom agent profiles in `.codex/agents/`. Copilot files under `.github/` are separate and are not inputs or destinations for this setup.

## Instructions and precedence

Codex combines applicable instructions from its user-level configuration and the repository path from root to the working directory. More-specific nested instruction files can add or supersede broader guidance. This project intentionally has one root `AGENTS.md` and no nested files because the current modules share the same engineering rules. Add a nested file only when a real directory-specific rule cannot be expressed clearly in the root guidance or a skill.

The root file contains durable, always-relevant project facts and constraints. Keep task procedures in skills so routine changes do not load a backend handbook every time. Update the [architecture audit](../engineering/codebase-analysis.md) when repository facts materially change.

## Skills

Skills live in `.agents/skills/<skill-name>/SKILL.md` with YAML frontmatter containing a unique `name` and a concise, task-triggering `description`. Codex first sees skill metadata and loads the workflow when relevant. Keep the main file actionable; add references or scripts only when they materially improve the workflow.

| Skill | Use for |
| --- | --- |
| `backend-architecture` | Domain rules, cross-layer design, and substantial refactoring |
| `express-api-development` | Express routes, middleware, controllers, DTOs, and OpenAPI |
| `prisma-postgresql` | Prisma schema/migrations, integrity, transactions, and measured query work |
| `backend-security` | JWT cookies, authorization, CSRF/CORS, secrets, and Cloudinary uploads |
| `typescript-code-quality` | Type modeling, type safety, refactoring, and ESLint behavior |
| `backend-testing-reliability` | Test discovery/planning, failure paths, and regression checks |
| `backend-development-workflow` | Multi-file features, debugging, reviews, and pre-release checks |

Load only the skills relevant to a task. The development workflow can be combined with a specialist workflow; it does not replace technical review.

## Custom agents and delegation

Custom profiles are TOML files under `.codex/agents/`. Each defines `name`, `description`, and `developer_instructions`, as required by the current Codex format. Invoke or delegate to a profile for substantial, independent work; simple tasks should stay with the coordinating agent.

| Agent | Delegate when |
| --- | --- |
| `backend-architect` | A feature or refactor crosses modules or changes domain boundaries |
| `api-workflow-specialist` | HTTP routes, request handling, responses, or OpenAPI are affected |
| `data-performance-specialist` | Schema, migrations, persistence, transactions, or database query behavior are affected |
| `reliability-specialist` | Type safety, failure behavior, testing, or regressions need an independent review |

Typical combinations: authentication → API + reliability, with the security skill; schema or query redesign → architect + data specialist; new cross-layer feature → architect + API + data as needed, followed by reliability review. The coordinator assigns bounded questions, gathers evidence-backed reports, resolves disagreements, and owns the final decisions and edits. Do not assign concurrent agents to edit the same files.

Custom agent instructions request read-only analysis, but they do not create a separate sandbox. Agents inherit the parent session's permissions and tools. Choose the parent permission mode deliberately; use read-only mode for review-only sessions and keep implementation with the coordinator when edits are needed.

## Configuration

There is no project `.codex/config.toml`. Current Codex documentation describes subagent tools as enabled by default; no repository-specific model, approval, sandbox, or concurrency override is needed. Avoid checking in configuration that overrides contributors' user-level security or model preferences without a demonstrated need.

## Maintenance

When maintaining this ecosystem:

1. Recheck repository facts against source, package lock, scripts, and migrations.
2. Verify current Codex instruction, skill, and agent formats before changing metadata or paths.
3. Keep always-on instructions short; put repeatable workflows in the smallest relevant skill.
4. Add an agent only for a recurring, distinct review responsibility. Keep the main agent accountable for coordination and decisions.
5. Update the validation report when supported formats, project tooling, discovery checks, or scenario coverage changes.

## References

- [Codex custom instructions](https://developers.openai.com/codex/guides/agents-md)
- [Codex skills](https://developers.openai.com/codex/skills)
- [Codex subagents](https://developers.openai.com/codex/subagents)
