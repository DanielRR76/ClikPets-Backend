---
name: typescript-code-quality
description: Improve TypeScript modeling, type safety, maintainability, or ESLint quality in ClikPets without broad architectural changes.
---

# TypeScript and code quality workflow

## Use when

Use for type errors, API/domain type design, generics, refactors, error typing, ESLint configuration, or maintainability work.

## Workflow

1. Inspect `tsconfig.json`, `eslint.config.mjs`, package versions, and nearby types before proposing rules or syntax.
2. Preserve the boundary between DTOs, domain objects, contracts, and Prisma-generated types. Reuse existing types when they express the same concept.
3. Prefer inferred types where clear; use explicit types for public contracts and non-obvious boundaries. Use `unknown` and narrow it rather than introducing avoidable `any` or unchecked assertions.
4. Model meaningful alternatives with unions/type guards only when they clarify actual states. Avoid generic frameworks and utility types that obscure simple behavior.
5. Keep refactors behavior-preserving. Identify the invariant first and isolate changes so failures can be attributed.
6. Inspect ESLint rules before claiming enforcement. The current config allows explicit `any`, and `npm run lint` runs with `--fix`.

## Project conventions

- TypeScript 5.9, `strict: true`, `noImplicitAny: false`, ESM/bundler module resolution, tsup output targeting ES2023.
- Existing project uses DTOs, contracts, domain classes, and generated Prisma types; avoid parallel hand-maintained definitions.

## Validation and deliverable

Prefer `npm run build` for type/build validation. Run lint only when formatting/fixes are intended because the script modifies files. Report the type boundary improved, behavior preserved, and checks performed.

## References

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [TypeScript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [typescript-eslint getting started](https://typescript-eslint.io/getting-started/)
- [tsup](https://tsup.egoist.dev/)
