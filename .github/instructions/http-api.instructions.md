---
applyTo: "src/controllers/**/*.ts,src/routes/**/*.ts,src/middlewares/**/*.ts,public/openapi.yaml"
---

- Follow the route → controller → DTO/service flow already present. Preserve method, path, authentication middleware, response envelope, and status conventions unless the task changes the contract.
- Validate and normalize untrusted path/body/file input before passing it into business logic. Treat authenticated identity and resource ownership as separate checks.
- Express 5 forwards rejected promises from async handlers to error handling middleware. The current controllers catch and map errors locally; do not silently mix error strategies or expose framework stack traces.
- Update `public/openapi.yaml` when endpoint inputs, outputs, security, or status behavior changes.
- Cookie-authenticated state-changing endpoints need a CSRF assessment. Keep CORS and cookie assumptions aligned with the existing frontend contract; do not guess origins or alter auth transport.
- For uploads, inspect Multer configuration and Cloudinary lifecycle. Do not assume memory use, MIME validation, size limits, or cleanup behavior that is not implemented.
