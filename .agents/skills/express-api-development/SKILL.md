---
name: express-api-development
description: Add or change ClikPets REST endpoints, Express 5 middleware, request validation, controller behavior, error responses, or OpenAPI contracts.
---

# Express API development workflow

## Use when

Use when a task changes routes, middleware, controllers, request/response DTOs, HTTP status behavior, or `public/openapi.yaml`.

## Workflow

1. Trace the existing route → middleware → controller → service path and inspect the nearest analogous endpoint.
2. Confirm whether the route is public or authenticated, how `req.authUser` is established, and where resource ownership is enforced.
3. Define the request and response contract from the actual DTOs and OpenAPI document. Validate untrusted values at the boundary using existing project conventions.
4. Keep controllers focused on HTTP translation; put use-case rules in services/domain and persistence in repositories.
5. Preserve status codes, response envelopes, cookie behavior, and frontend expectations unless a contract change is explicitly requested.
6. Handle asynchronous failures according to Express 5 behavior and the surrounding controller conventions; do not assume a centralized error handler exists.
7. Update OpenAPI and relevant documentation, then inspect success, invalid-input, not-found, unauthorized, forbidden, and dependency-failure behavior as applicable.

## Project conventions

- Route groups are under `/users` and `/pets`; route definitions use `Router` and `HttpMethod`.
- Controllers currently translate known `HttpError` cases and produce generic 500 responses for unexpected errors.
- Authentication uses the `accessToken` HttpOnly cookie. Preserve its contract unless migration is in scope.

## Validation and deliverable

Use `npm run build` when appropriate. No test framework is configured; do not invent a test command. Report changed contract, authorization path, docs updates, and checks performed.

## References

- [Express 5 error handling](https://expressjs.com/en/5x/guide/error-handling/)
- [Express 5 API](https://expressjs.com/en/5x/api.html)
- [Express 5 migration guide](https://expressjs.com/en/guide/migrating-5/)
