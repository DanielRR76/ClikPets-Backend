---
name: backend-architecture
description: Analyze or change ClikPets module boundaries, domain behavior, service design, or cross-layer structure when a task has architectural tradeoffs.
---

# Backend architecture workflow

## Use when

Use for cross-layer features, domain rule changes, module-boundary decisions, or substantial refactors. Do not use for a localized endpoint or typo with an established pattern.

## Workflow

1. Read `docs/engineering/codebase-analysis.md` and trace the relevant path in source before proposing a design.
2. State the confirmed behavior, business invariants, callers, dependencies, and unresolved context separately.
3. Start from the existing layered design: composition in `src/server.ts`, HTTP handling in routes/controllers, use cases in services, domain behavior in `src/domain/`, and persistence/integrations behind contracts.
4. Compare the smallest viable change with alternatives. Introduce a layer, abstraction, pattern, or DDD concept only when it solves a demonstrated coupling, testability, or change-isolation problem.
5. Preserve ownership and adoption rules, error semantics, and external API behavior unless the task explicitly changes them.
6. Identify failure paths, migration or rollout implications, and tests/checks needed before implementation.

## Project conventions

- The codebase has domain modeling and dependency injection, but is not a strict Clean/Hexagonal Architecture or full DDD implementation.
- Services depend on contracts; Prisma repositories translate persistence records to domain objects.
- Keep business invariants explicit and avoid duplicating them across layers.
- Do not claim performance improvements without workload or query evidence.

## Validation and deliverable

Validate affected types/build and behavior using tooling actually present. No test runner is currently configured. Return the chosen boundary, a short rationale, affected flows, risks, and verification evidence.

## References

- [Martin Fowler: Domain-Driven Design](https://martinfowler.com/bliki/DomainDrivenDesign.html)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- [Refactoring.Guru: Refactoring](https://refactoring.guru/refactoring)
