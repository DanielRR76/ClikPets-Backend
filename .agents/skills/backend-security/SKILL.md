---
name: backend-security
description: Review or change ClikPets authentication, JWT cookies, authorization, CSRF/CORS, input boundaries, secrets, password handling, or Cloudinary uploads.
---

# Backend security workflow

## Use when

Use for identity/session changes, protected resource access, user/pet ownership, file uploads, secret handling, or security reviews. Include it when a feature changes a security boundary.

## Workflow

1. Trace the request from route and middleware through controller, service, repository, and provider. Identify attacker-controlled inputs and trust boundaries.
2. Separate authentication from authorization. Verify ownership and role/business permission for each resource operation.
3. Preserve the frontend contract: JWT is read from `accessToken`; login/register set an HttpOnly, Secure, SameSite=None cookie; CORS allows credentials for configured `CORS_ORIGIN`. Do not change these without an explicit migration plan.
4. Assess CSRF exposure for cookie-authenticated state changes against actual origins and deployment topology; treat SameSite as defense in depth, not a complete CSRF control.
5. Trace uploads from Multer memory storage through filename validation, Cloudinary upload, persistence, and compensating deletion. Confirm actual byte limits and content verification; do not assume filename extension proves file type.
6. Check password hashing, token claims/expiry, secret configuration, logout lifecycle, error responses, and logs. Never expose credentials or sensitive provider/database internals.
7. State confirmed vulnerabilities separately from questions that need deployment, frontend, or product context. Recommend the smallest fix within scope.

## Project conventions

- JWT lifetime is one hour; a development fallback for `JWT_SECRET` exists.
- Multer uses memory storage; `ImageUpload` checks filename extension; provider cleanup is attempted on some service failures.
- No server-side token revocation store was found. Do not infer revocation semantics beyond the code and frontend contract.

## Validation and deliverable

Review positive and negative authorization cases, malformed input, upload rejection/provider failures, and secret-safe errors. Report threat boundary, evidence, impact, remediation, and any deployment context still needed.

## References

- [Node.js security best practices](https://nodejs.org/learn/getting-started/security-best-practices)
- [OWASP REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)
- [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet)
- [Cloudinary Node.js integration](https://cloudinary.com/documentation/node_integration)
