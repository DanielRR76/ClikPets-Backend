---
applyTo: "src/services/**/*.ts,src/domain/**/*.ts"
---

- Services coordinate use cases through the existing contracts; domain objects and value-like classes represent the current business rules. Preserve that separation without adding layers by default.
- Before changing pet adoption logic, trace scheduling and completion together. Scheduling records an adopter; completion requires a scheduled adopter, transfers ownership, clears adopter, and makes the pet unavailable.
- Keep user-facing errors intentional and avoid catching errors only to discard useful context. Coordinate persistence error mapping with the repository's existing `HttpError` hierarchy.
- Consider partial failure when a use case coordinates PostgreSQL and Cloudinary. Preserve or explicitly improve compensating cleanup behavior; do not claim atomicity across these systems.
- Use transactions or concurrency controls only when the invariant and database behavior justify them; identify race conditions instead of assuming a read-then-write is atomic.
