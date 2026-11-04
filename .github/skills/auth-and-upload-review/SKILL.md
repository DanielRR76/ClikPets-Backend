---
name: auth-and-upload-review
description: Review ClikPets JWT-cookie authentication, ownership authorization, CSRF, secret handling, Multer, and Cloudinary upload workflows.
---

# Authentication and upload review

Use for auth, cookie, authorization, secret, file upload, or media lifecycle changes and reviews.

## Workflow

1. Trace route middleware through controller and service for login, registration, logout, protected actions, and resource ownership. Inspect JWT signing/verification and cookie set/clear options.
2. Confirm the current integration contract: `accessToken` is an HttpOnly, Secure, SameSite=None cookie; CORS uses `CORS_ORIGIN`; the token is currently short-lived and no server-side revocation is visible. Do not change this contract without deliberate frontend coordination.
3. Assess CSRF for cookie-authenticated state changes; distinguish authentication, authorization, CORS, and CSRF defenses. Check secret fallback/configuration and sensitive logging/responses.
4. For files, inspect Multer storage/count/size/type behavior, DTO conversion, Cloudinary upload streams, URL/public-ID mapping, deletion, and compensation after partial failure. Verify details against the installed SDK docs.
5. Return evidence-based findings with severity, impact, mitigation, and unresolved frontend/deployment facts. Avoid proposing a new auth architecture absent explicit scope.
6. Validate changed paths with focused tests/review scenarios; current repository has no test runner or test scripts in the audited tree.

## Project locations

`src/services/JwtService.ts`, `src/services/BcryptService.ts`, `src/middlewares/ExpressTokenMiddleware.ts`, `src/middlewares/MulterMiddleware.ts`, `src/services/CloudinaryService.ts`, auth routes/controllers, `.env.example`, `src/server.ts`, `src/server/ExpressServer.ts`.

## Expected output

List confirmed protections, findings, contract dependencies, fixes or follow-up questions, and validation performed. Ask `api-express` for HTTP contract changes and `prisma-postgres` for persistence/revocation data design.

## References

- OWASP REST Security: https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html
- OWASP Session Management: https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet
- OWASP JWT: https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html
- Node.js Security: https://nodejs.org/learn/getting-started/security-best-practices
- Cloudinary Node SDK: https://cloudinary.com/documentation/node_integration
