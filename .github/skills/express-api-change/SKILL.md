---
name: express-api-change
description: Add or modify a ClikPets REST endpoint while preserving Express 5, route, validation, authentication, response, and OpenAPI conventions.
---

# Express API change

Use when changing routes, request/response behavior, middleware, or API documentation.

## Workflow

1. Inspect the router, controller, DTO/request types, middleware, invoked service, and matching `public/openapi.yaml` operation.
2. Record method/path, public versus authenticated access, ownership rules, accepted content type, status codes, response envelope, and compatibility expectations.
3. Validate and parse untrusted values at the boundary; avoid passing raw request objects into business logic. Check multipart field names and Multer behavior for file routes.
4. Preserve local error mapping conventions unless the task deliberately changes error handling. Express 5 forwards rejected async handler promises, but do not assume this app has shared error middleware.
5. Update OpenAPI and propose behavior-focused tests for success, invalid input, unauthenticated/unauthorized access, missing records, and relevant failures.

## Project locations

`src/routes/`, `src/controllers/`, `src/dtos/`, `src/types/`, `src/middlewares/`, `src/services/`, `public/openapi.yaml`.

## Expected output

Provide the endpoint contract, auth/ownership behavior, validation and error mapping, compatibility risks, docs/tests to update, and checks actually performed. Ask for frontend/deployment facts only when repository evidence cannot establish them. Route security-sensitive work to `security-reviewer`.

## References

- Express 5 error handling: https://expressjs.com/en/5x/guide/error-handling/
- Express 5 migration guide: https://expressjs.com/en/guide/migrating-5/
- GitHub path-specific instructions: https://docs.github.com/en/copilot/concepts/prompting-and-context/custom-instructions
