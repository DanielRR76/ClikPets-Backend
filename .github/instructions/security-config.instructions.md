---
applyTo: "src/services/JwtService.ts,src/services/BcryptService.ts,src/services/CloudinaryService.ts,src/controllers/UserController.ts,src/middlewares/ExpressTokenMiddleware.ts,src/middlewares/MulterMiddleware.ts,src/server.ts,src/server/ExpressServer.ts,.env.example,prisma.config.ts"
---

- Preserve the existing JWT-in-HttpOnly-cookie contract unless a planned migration includes frontend coordination. The current cookie uses `Secure` and `SameSite=None`; assess CSRF for state-changing routes and do not treat `SameSite` or CORS alone as authorization.
- Do not introduce or retain production reliance on the `development_secret` fallback. Never log credentials, raw tokens, password values, or provider secrets.
- Check authentication and resource ownership independently. Validate token claims and untrusted inputs before relying on them.
- Review Multer memory storage, file count, size, and content validation together with Cloudinary upload and cleanup paths. Verify SDK-specific behavior against the installed version and official docs: https://cloudinary.com/documentation/node_integration
- For security recommendations, prefer current primary guidance: https://nodejs.org/learn/getting-started/security-best-practices, https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html, and https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet
- Do not assume frontend origins, deployment TLS termination, rate limiting, or secret-management infrastructure; inspect configuration or identify the unknown.
