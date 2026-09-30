# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.1.1](https://github.com/DanielRR76/ClikPets-Backend/compare/v2.1.0...v2.1.1) (2026-09-30)


### Bug Fixes

* correct API name from ClikPet to ClikPets in README and OpenAPI documentation ([3accd74](https://github.com/DanielRR76/ClikPets-Backend/commit/3accd74f4b084e04be4ae873d8e38fa708059210))

## [2.1.0](https://github.com/DanielRR76/ClikPets-Backend/compare/v2.0.0...v2.1.0) (2026-09-30)


### Features

* add Swagger UI integration for API documentation ([108c61e](https://github.com/DanielRR76/ClikPets-Backend/commit/108c61e139538992a4eda28c70422f4c954fc951))
* change url property to private in File class for encapsulation ([cce14c4](https://github.com/DanielRR76/ClikPets-Backend/commit/cce14c4c0c62356ca9a32bb32e54932b58bf84a4))
* enhance checkUser and logout methods with error handling and response structure ([a505ced](https://github.com/DanielRR76/ClikPets-Backend/commit/a505cedbea23900a24e938bab7c5f48c7c39dfbd))
* enhance PetResponseDTO and PetService to include owner information in pet responses ([8b22645](https://github.com/DanielRR76/ClikPets-Backend/commit/8b2264545d907f0a587ea6c7808c2a68fd626da1))
* enhance updatePet method to check for file uploads before processing images ([c3cde8e](https://github.com/DanielRR76/ClikPets-Backend/commit/c3cde8ebc0ca2b300798397064cfe02ee12d945d))
* enhance user edit functionality with email conflict check and token generation ([29d70f6](https://github.com/DanielRR76/ClikPets-Backend/commit/29d70f6025efdf6d5ad70fb6d0de6f41df599806))
* enhance user registration and login responses with structured payload ([6ea551f](https://github.com/DanielRR76/ClikPets-Backend/commit/6ea551ff323fe16535ce55bb19cb6ae54ded831e))
* implement cookie-based token handling for user authentication ([8b9d2be](https://github.com/DanielRR76/ClikPets-Backend/commit/8b9d2be316cfa154c10abb6b2f4eb8a15c52cae4))
* standardize response structure in pet-related endpoints ([e4614a1](https://github.com/DanielRR76/ClikPets-Backend/commit/e4614a152c10791dc7aa7a54ad7b3ca306779a4e))
* update age validation in PetAge class to allow ages up to 50 ([a6d26e3](https://github.com/DanielRR76/ClikPets-Backend/commit/a6d26e3e31069df922a5e091605aa1e6fba2591b))
* update PrismaClient import path and add path mapping for generated client ([f2cd737](https://github.com/DanielRR76/ClikPets-Backend/commit/f2cd7378f61dbae4136fada79fc08411be238267))


### Bug Fixes

* update response structure in getUserById method to use 'payload' key ([89d9aaf](https://github.com/DanielRR76/ClikPets-Backend/commit/89d9aaf8130fd3bda5330d18f9de2392d18629dc))

## 2.0.0 (2026-09-30)


### Features

* add BcryptService for password encryption and decryption with error handling ([b317e6c](https://github.com/DanielRR76/ClikPets-Backend/commit/b317e6c3b5cd27eadd04516350e44c61dd258d30))
* add Database interface and DatabaseError class for error handling ([b464730](https://github.com/DanielRR76/ClikPets-Backend/commit/b46473090c579ba4f9c7f337fd41073862a24d04))
* add DBClient type for PrismaClient integration ([12c3e52](https://github.com/DanielRR76/ClikPets-Backend/commit/12c3e529ac13f089baa150416dd289cecbaeb359))
* add Email and EmailError classes for email validation and error handling ([b01abb5](https://github.com/DanielRR76/ClikPets-Backend/commit/b01abb58f9913e9042174b9feb4439976e3dd949))
* add Encryption interface for encryption and decryption methods ([a1fae1b](https://github.com/DanielRR76/ClikPets-Backend/commit/a1fae1b7ee14fdf7ee019e9dce48c19b0b158f76))
* add ESLint configuration for TypeScript support ([69c2b48](https://github.com/DanielRR76/ClikPets-Backend/commit/69c2b485b4d6834925086f7fc1ba51a88ab8e111))
* add File and FileError classes for file handling and error management ([09de65b](https://github.com/DanielRR76/ClikPets-Backend/commit/09de65b4536a3f56b223c2f2efc1579fb0798796))
* add HttpMethod and HttpStatusCode enums for API request handling ([15771df](https://github.com/DanielRR76/ClikPets-Backend/commit/15771df808023ac85f1df35910ade24f07487c3b))
* add HttpResponse class for standardized API response handling ([fe724cd](https://github.com/DanielRR76/ClikPets-Backend/commit/fe724cd26cfd1d81bae2d9291408571eec903589))
* add HttpServer interface for defining server behavior and routing ([6ee39fb](https://github.com/DanielRR76/ClikPets-Backend/commit/6ee39fb98d4155e87af3b65611be8b513b64ad10))
* add ImageFile type for handling file uploads with Multer ([868181f](https://github.com/DanielRR76/ClikPets-Backend/commit/868181f9cdbc29627cc3dd78a5333f389a49b0c9))
* add JsonWebToken interface for JWT handling and JwtError class for error management ([9e68b27](https://github.com/DanielRR76/ClikPets-Backend/commit/9e68b276aa7b13e461917a4d57376cc6f995b08f))
* add MalformedRequestError class for handling bad request errors ([306cfe6](https://github.com/DanielRR76/ClikPets-Backend/commit/306cfe6f2741258a27d419d3771bb5961c7cbfd1))
* add MediaService interface for file upload and deletion, and MediaError class for error handling ([ca04957](https://github.com/DanielRR76/ClikPets-Backend/commit/ca04957c3faabe835889aa3118f12131784b2bda))
* add PetAge class for age validation and PetAgeError for error handling ([b921f86](https://github.com/DanielRR76/ClikPets-Backend/commit/b921f86fd9f08846e221ab1033152aa9a36b4612))
* add PetColor class for color validation and PetColorError for error handling ([45894e1](https://github.com/DanielRR76/ClikPets-Backend/commit/45894e15cb98186ac67820d41f8576e8068e7652))
* add PetRepository interface for pet data management ([0361bdc](https://github.com/DanielRR76/ClikPets-Backend/commit/0361bdca0fa165bf1f48f88c9b29f31aa208d626))
* add PetWeight class for weight validation and PetWeightError for error handling ([9f823db](https://github.com/DanielRR76/ClikPets-Backend/commit/9f823db11d0228b47ad355ad504829b57e49bdff))
* add Phone and PhoneError classes for phone number validation and error handling ([aa7512d](https://github.com/DanielRR76/ClikPets-Backend/commit/aa7512debd97de5df0e5b41d07baae8b42ea773f))
* add Prisma class for singleton PrismaClient instance management ([c0b1a94](https://github.com/DanielRR76/ClikPets-Backend/commit/c0b1a94298fc7cb28c3a6713542953275bed7068))
* add Prisma configuration and initial migration for User and Pet models ([67a68ad](https://github.com/DanielRR76/ClikPets-Backend/commit/67a68ad8fdda084e5c1e46a90406027a89768a71))
* add Route type for defining API routes with method, path, middleware, and handler ([e31befe](https://github.com/DanielRR76/ClikPets-Backend/commit/e31befe019983dddc797b059fd871c66c9f4bf96))
* add tsup configuration for build setup ([f5bac26](https://github.com/DanielRR76/ClikPets-Backend/commit/f5bac26548474a2a11a01329ddb40e3fbabcbfe2))
* add TypeScript configuration file for project setup ([c3aa681](https://github.com/DanielRR76/ClikPets-Backend/commit/c3aa681f1752f824b9c3d7b52d26e72c75b02c90))
* add UserRepository interface for user data management ([2444062](https://github.com/DanielRR76/ClikPets-Backend/commit/24440624942e0263861bad1bc9c5ca3b120ad0d3))
* add validColors constant for pet color options ([5066a97](https://github.com/DanielRR76/ClikPets-Backend/commit/5066a97814f68ca951a5c4ae92e76ce2248cd924))
* create AuthUser type for user authentication with email ([1ccb388](https://github.com/DanielRR76/ClikPets-Backend/commit/1ccb3887352d8cdde51d2b743ef31e448d392163))
* create FileDTO class for handling file uploads with validation ([dd7fac5](https://github.com/DanielRR76/ClikPets-Backend/commit/dd7fac519dc39742acb34d24cd6dd158ba953d4d))
* create UserCreateRequestDTO class for user registration with validation ([53c626c](https://github.com/DanielRR76/ClikPets-Backend/commit/53c626cd005f867212509614d7f18ae3550d6db8))
* create UserUpdateRequestDTO class for updating user information with validation ([cdf4aa5](https://github.com/DanielRR76/ClikPets-Backend/commit/cdf4aa5c7917efd379c70fe9786af26e9141a292))
* extend Express Request interface to include optional authUser property ([f312d8c](https://github.com/DanielRR76/ClikPets-Backend/commit/f312d8cdb21c8b1a15858fd75187c73d429b39ec))
* implement abstract Router class for managing API routes ([57bed14](https://github.com/DanielRR76/ClikPets-Backend/commit/57bed143aa131dac2abf5ece193fd0259c4622b3))
* implement CloudinaryService for media upload and deletion ([e797863](https://github.com/DanielRR76/ClikPets-Backend/commit/e7978633056b3c8598ea981fa71d8a55b605fc2d))
* implement ExpressServer class for handling HTTP requests and routing ([9786c83](https://github.com/DanielRR76/ClikPets-Backend/commit/9786c83dff34f5056a22ef640fdc98e0716fb3d5))
* implement ExpressTokenMiddleware for JWT verification and authorization ([ac24fbf](https://github.com/DanielRR76/ClikPets-Backend/commit/ac24fbfb2e4d802780f9cd36a98b75c6445b2cc5))
* implement HttpError class for standardized error handling ([de5dbc0](https://github.com/DanielRR76/ClikPets-Backend/commit/de5dbc0f77043f91c0b3c3b111b09d4529b33373))
* implement JwtService for signing and verifying JSON Web Tokens ([df99b55](https://github.com/DanielRR76/ClikPets-Backend/commit/df99b5554f80f014e4ba4ae8ba2c2de43176ffb2))
* implement MulterMiddleware class for handling file uploads ([218e54f](https://github.com/DanielRR76/ClikPets-Backend/commit/218e54fb2f8feffe8ce07d4be9417aa81b5bac31))
* implement Password class with validation and encryption handling ([0979302](https://github.com/DanielRR76/ClikPets-Backend/commit/097930200e7d7e81c7d6cfb22262482bd62797b4))
* implement Pet class for pet management with constructors and methods for adoption and updates ([22acf5c](https://github.com/DanielRR76/ClikPets-Backend/commit/22acf5ca9fd0eea1508f7aa002729342f73b00fb))
* implement PetController, PetService, and DTOs for pet management ([139d2cf](https://github.com/DanielRR76/ClikPets-Backend/commit/139d2cf2e96a7e47625fce67543e4807a7d7a0da))
* implement PetExpressRouter for pet-related routes and operations ([8af15f2](https://github.com/DanielRR76/ClikPets-Backend/commit/8af15f279f9f34889ab23687efe9df4fb38ad27f))
* implement PrismaPetRepository for pet data management ([8ff2c91](https://github.com/DanielRR76/ClikPets-Backend/commit/8ff2c91dfebf13d8b85e5ec26a58aaf6db12174a))
* implement PrismaUserRepository for user data management ([b582d8f](https://github.com/DanielRR76/ClikPets-Backend/commit/b582d8f4a4d2266a0301077cf5469a720fc62223))
* implement User class for user management with constructors and update method ([158d1af](https://github.com/DanielRR76/ClikPets-Backend/commit/158d1af297450cc0c49738fa43f93e96f062ad2f))
* implement UserController, UserService, and related DTOs for user management ([af9e2a5](https://github.com/DanielRR76/ClikPets-Backend/commit/af9e2a57dddd895bfad95d667ffa190c00704d7f))
* implement UserExpressRouter for user-related routes ([3619441](https://github.com/DanielRR76/ClikPets-Backend/commit/3619441f101233ecc8bef661d06c5ce480c8dee0))
* initialize server with Express, routers, services, and middleware for user and pet management ([776138d](https://github.com/DanielRR76/ClikPets-Backend/commit/776138da890375482eb4d52c68dff18dcac80efc))


### Bug Fixes

* nome do projeto alterado e aspas no arquivo env ([527e838](https://github.com/DanielRR76/ClikPets-Backend/commit/527e83830b3a1ac554d67c762d67ed3da0f7a289))
* remove Vercel configuration file ([389e230](https://github.com/DanielRR76/ClikPets-Backend/commit/389e230d47a4f1ff2e927b87b6737870976956d8))
* update database environment variables in docker-compose.yml ([aae5e56](https://github.com/DanielRR76/ClikPets-Backend/commit/aae5e56cde4055630a7e7e70032c937acb023449))
* update Vercel configuration to use dist/server.js for builds and routing ([e459ebd](https://github.com/DanielRR76/ClikPets-Backend/commit/e459ebde0dc26f3f432f7d22382f54044085a7dc))


### Code Refactoring

* remove js files ([1f5b443](https://github.com/DanielRR76/ClikPets-Backend/commit/1f5b443e0faf0bd086db05962ace664bc76f6758))
* update package.json for TypeScript support and dependency upgrades ([7e0ff33](https://github.com/DanielRR76/ClikPets-Backend/commit/7e0ff338e86596b8b86c39ccca64cde314a07ad6))
