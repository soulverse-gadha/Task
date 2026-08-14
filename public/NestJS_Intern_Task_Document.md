# NestJS Training Task: Basic CRUD Operations

Welcome to the team! To help you get up to speed with our backend stack, we have prepared a starter project. This project is similar to what we built when we first joined and will acquaint you with NestJS, Prisma, PostgreSQL, and our coding standards.

## 🎯 Task Objective
Build a RESTful API using **NestJS** that connects to a **PostgreSQL** database using **Prisma**. You will implement basic CRUD (Create, Read, Update, Delete) operations for several entities and follow a specific project structure and response formatting standard.

## 🛠️ Tech Stack
-   **Framework:** NestJS
-   **Database:** PostgreSQL
-   **ORM:** Prisma
-   **API Documentation:** Swagger

## 📂 Project Structure Requirements
You must organize your code into modular directories inside the `src` folder:
```text
src/
├── common/
│   ├── response.ts          # Centralized response formatting map
│   └── response.inceptors.ts # Global response interceptor
├── dto/                     # Global DTOs (Data Transfer Objects)
├── modules/                 # Feature modules
│   ├── user/
│   ├── crypto/
│   ├── jokes/
│   ├── news/
│   ├── quotes/
│   └── weather/
├── app.module.ts
└── main.ts
```

## 🗄️ Database Schema (Prisma)
You will need to create and run migrations for the following models. Here are the core fields you should include:

1.  **User Module**
    -   `id` (Int, PK, Auto-increment), `username` (String, Unique), `email` (String)
2.  **Crypto Module**
    -   `id` (Int, PK), `name` (String, Unique), `symbol` (String, Unique), `price` (Float), `blockchain` (String)
3.  **Jokes Module**
    -   `id` (Int, PK), `email` (String, Unique), `setup` (String), `punchline` (String)
4.  **News Module**
    -   `id` (Int, PK), `title` (String, Unique), `description` (String), `category` (String), `createdAt` (DateTime)
5.  **Quotes Module**
    -   `id` (Int, PK), `quote` (String, Unique), `author` (String)
6.  **Weather Module**
    -   `id` (Int, PK), `city` (String, Unique), `temperature` (String), `humidity` (String), `condition` (String), `createdAt` (DateTime)

## 🏗️ Expected Implementation per Module
For each module (e.g., User, Crypto, etc.), you are expected to create:
1.  **Module File** (`<module>.module.ts`)
2.  **Controller File** (`<module>.controller.ts`): Define API endpoints.
3.  **Service File** (`<module>.service.ts`): Implement business logic & Prisma DB calls.
4.  **DTOs folder** (`dto/<module>.dto.ts`): Define validation rules using `class-validator` and `class-transformer`.

### Controller Guidelines
-   Inject the Service class.
-   Use proper decorators (`@Post()`, `@Get()`, `@Body()`, `@Param()`, `@Res()`).
-   Include **Swagger** decorators for documentation (e.g., `@ApiOperation({ summary: 'Add a new User' })`).

## ✅ Standardized API Responses
All endpoints should return a standard response format. You must implement a central `apiResponse` helper in `src/common/response.ts` similar to the following:

```typescript
export class apiResponse {
    static success(message: string, data?: any) {
        return { statusCode: 201, message, data: data || null };
    }
    static conflict(message: string) {
        return { statusCode: 409, message, data: null };
    }
    static error(message: string, data?: any) {
        return { statusCode: 500, message, data: data };
    }
    static badRequest(message: string) {
        return { statusCode: 400, message, data: null };
    }
}
```
*Note: Make sure to map these responses to the proper Express `Res()` status in your controllers.*

## 🚀 Steps to Complete
1. Initialize a new NestJS project (`nest new project-name`).
2. Install necessary dependencies (Prisma, Swagger, class-validator, class-transformer).
3. Initialize Prisma and setup your `.env` pointing to a local PostgreSQL instance.
4. Define your `schema.prisma` and run migrations.
5. Create standard response and interceptor files in `common/`.
6. Generate the modules (`nest g module <name>`).
7. Implement Services and Controllers for CRUD operations for all the mentioned modules.
8. Test your endpoints using Swagger UI (typically at `http://localhost:3000/api`).

Good luck! This task will set up a strong foundation for your journey within our codebase.
