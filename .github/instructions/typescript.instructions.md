---
applyTo: "src/**/*.ts"
---

- Follow nearby naming, import, and formatting conventions; inspect the target module before introducing a shared abstraction.
- Preserve domain and DTO distinctions already used in this codebase. Keep request validation at the boundary and business invariants in the domain/service flow that currently owns them.
- Prefer inferred or precise types over `any`; narrow `unknown` before use. Avoid non-null assertions and casts unless the invariant is established and documented by the surrounding code.
- TypeScript `strict` is enabled, but `noImplicitAny` is explicitly disabled. Do not infer from that setting that implicit `any` is desirable.
- Reuse existing application error types and response behavior. Do not leak raw database, provider, password, or token details.
