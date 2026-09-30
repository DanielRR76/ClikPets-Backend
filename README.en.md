# ClikPets — Backend API

[Versão em português](README.md)

REST API for user and pet registration, browsing available animals, and managing the adoption flow. The API is built with TypeScript and Express, stores data in PostgreSQL through Prisma, and stores images in Cloudinary.

## Features

- User registration, login, lookup, and profile updates.
- Pet creation, lookup, editing, and removal.
- Lists of pets registered by a user and adoptions associated with an account.
- Adoption scheduling and completion.
- Profile and pet image uploads.
- Interactive API documentation with Swagger UI and OpenAPI.

## Technology stack

- Node.js and TypeScript
- Express 5
- PostgreSQL 15 and Prisma 7
- Cloudinary for images
- JWT authentication in an `HttpOnly` cookie
- tsup for builds and ESLint for linting

## Architecture and structure

The project separates HTTP transport, business rules, and persistence. Express routes forward requests to controllers; controllers convert incoming data into DTOs and call services; services apply business rules and use contracts to access repositories, authentication, and media. Prisma repositories persist data in PostgreSQL.

```text
src/
├── controllers/   # HTTP input and responses
├── contracts/     # Service, repository, and server interfaces
├── domain/        # Domain entities and validation
├── dtos/          # Input and output data
├── errors/        # Domain and application-specific errors
├── middlewares/   # Authentication and file uploads
├── repositories/  # Prisma persistence
├── routes/        # User and pet routes
├── server/        # Express HTTP implementation
├── services/      # Business rules and integrations
└── types/         # Shared types

prisma/             # Database schema and migrations
public/openapi.yaml # OpenAPI specification served by the API
```

## Prerequisites

- Node.js and npm
- Docker with Docker Compose, or an accessible PostgreSQL instance
- A Cloudinary account and credentials for image operations

## Local setup

1. Install dependencies:

    ```bash
    npm install
    ```

2. Create an environment file from the example:

    ```bash
    cp .env.example .env
    ```

3. Set the variables in `.env`:

    | Variable                | Purpose                                                                                      |
    | ----------------------- | -------------------------------------------------------------------------------------------- |
    | `DATABASE_URL`          | PostgreSQL connection URL, for example `postgresql://user:password@localhost:5432/get_a_pet` |
    | `DATABASE_SCHEMA`       | Database name created by Docker Compose                                                      |
    | `DATABASE_USER`         | PostgreSQL user created by Docker Compose                                                    |
    | `DATABASE_PASSWORD`     | PostgreSQL password created by Docker Compose                                                |
    | `CLOUDINARY_CLOUD_NAME` | Cloudinary account name                                                                      |
    | `CLOUDINARY_API_KEY`    | Cloudinary API key                                                                           |
    | `CLOUDINARY_API_SECRET` | Cloudinary API secret                                                                        |
    | `JWT_SECRET`            | Secret used to sign JWTs                                                                     |
    | `CORS_ORIGIN`           | Origin allowed to make cross-origin requests with credentials                                |

    To use the Compose database, set `DATABASE_URL` to use the same username, password, and database provided in `DATABASE_USER`, `DATABASE_PASSWORD`, and `DATABASE_SCHEMA`. Compose exposes PostgreSQL on port `5432`.

4. If you are using the local Docker Compose database, start it:

    ```bash
    npm run compose:up
    ```

    This starts the database service defined in `docker-compose.yml`. Skip this step if you are using an external PostgreSQL instance.

5. Generate the Prisma Client and apply existing migrations:

    ```bash
    npm run generate
    npm run migrate:deploy
    ```

6. Start the API in development mode:

    ```bash
    npm run dev
    ```

The API listens on port `3000`. While it is running, open `http://localhost:3000/docs` for the interactive documentation. The OpenAPI specification is available at `http://localhost:3000/openapi.yaml`.

To start a compiled build, run `npm run build` followed by `npm start`.

## Available scripts

| Command                  | Description                                                                     |
| ------------------------ | ------------------------------------------------------------------------------- |
| `npm run dev`            | Builds in watch mode and restarts the server after changes.                     |
| `npm run build`          | Creates a production bundle in `dist/`.                                         |
| `npm start`              | Starts `dist/server.js`; requires a prior build.                                |
| `npm run prod`           | Builds and starts the compiled server.                                          |
| `npm run vercel-build`   | Generates the Prisma Client, applies migrations, and builds the app for Vercel. |
| `npm run generate`       | Generates the Prisma Client.                                                    |
| `npm run migrate:deploy` | Applies pending migrations.                                                     |
| `npm run migrate:dev`    | Creates/applies migrations for development.                                     |
| `npm run migrate:reset`  | Resets the database and reapplies migrations; existing data is deleted.         |
| `npm run compose:up`     | Starts Docker Compose services with the `--build` option.                       |
| `npm run compose:down`   | Stops Docker Compose services.                                                  |
| `npm run lint`           | Runs ESLint with automatic fixes on TypeScript files in `src/`.                 |
| `npm run release:patch`  | Creates a patch release and updates the changelog.                              |
| `npm run release:minor`  | Creates a minor release and updates the changelog.                              |
| `npm run release:major`  | Creates a major release and updates the changelog.                              |

## API

Routes are grouped under `/users` and `/pets`:

| Group | Endpoints                                                                                                                                                                                                         | Access                                                                                                                |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Users | `POST /users/register`, `POST /users/login`, `POST /users/logout`, `GET /users/checkuser`, `GET /users/:id`, `PATCH /users/edit`                                                                                  | Registration, login, and lookup by ID are public; logout, session lookup, and profile editing require authentication. |
| Pets  | `GET /pets`, `GET /pets/colors`, `GET /pets/:id`, `POST /pets/create`, `GET /pets/mypets`, `GET /pets/myadoptions`, `PATCH /pets/:id`, `DELETE /pets/:id`, `PATCH /pets/schedule/:id`, `PATCH /pets/complete/:id` | Listing, colors, and lookup by ID are public; all other operations require authentication.                            |

Registration and login set the `accessToken` cookie. Authenticated routes expect this cookie, which contains a JWT with a one-hour lifetime and is configured as `HttpOnly`, `Secure`, and `SameSite=none`. Since the cookie is used for authentication, web clients on another origin must send requests with credentials; set `CORS_ORIGIN` to the client's origin.

Pet creation accepts 1 to 5 files in the `images` field; pet updates accept up to 5 images. User profile editing accepts one image in the `image` field. Images are uploaded to Cloudinary.

See the [OpenAPI file](public/openapi.yaml) or the `/docs` interface while the API is running for all schemas, parameters, responses, and HTTP status codes.

## Data model

- **User**: name, unique email, password stored as a bcrypt hash, phone number, and optional image.
- **Pet**: name, age, weight, color, images, availability, and relations to its owner and, when scheduled, its adopter.

A user can register multiple pets and have multiple pets associated with adoptions. Completing an adoption transfers ownership of the pet to the adopter.

## Notes

- The server uses port `3000`, configured during startup in `src/server.ts`.
- `JWT_SECRET` has a development default in the code. Configure your own secure secret in any shared or production environment.
- Cloudinary credentials are required for flows that upload images.
