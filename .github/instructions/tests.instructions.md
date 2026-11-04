---
applyTo: "**/*.test.ts,**/*.spec.ts,**/tests/**,**/test/**"
---

- First inspect the repository for an established test runner, scripts, fixtures, and database isolation strategy. None are currently present in the audited tree; do not invent commands or claim coverage.
- Test observable behavior and business invariants, especially authentication/ownership, adoption state transitions, validation, persistence failure, and image cleanup where relevant.
- Prefer deterministic tests with isolated dependencies and explicit setup/teardown. Do not require a live external Cloudinary service or shared database unless the test is explicitly an integration test with a documented environment.
- Include regression cases for the reported failure and relevant boundary conditions; avoid coupling tests to private implementation details.
