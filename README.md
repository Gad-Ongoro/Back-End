# Task Tracker Backend API
A RESTful API for managing tasks, built with **Express.js**, **Prisma ORM**, and **MySQL**.

It provides a REST API for managing tasks, intended to be consumed by a Next.js frontend.

## Swagger Docs
https://task-tracker-backend-qt3n.onrender.com/docs/

## Features
- RESTful API for CRUD operations on tasks
- Prisma ORM with MySQL database
- Dockerized development environment
- Type-safe TypeScript setup
- `.env`-driven config for environment flexibility

## Tech Stack
- Node.js
- TypeScript
- Express.js
- Prisma
- MySQL
- Docker


## Getting Started
### 1. Clone the repository

```bash
git clone git@github.com:Gad-Ongoro/Back-End.git

cd Back-End
```

### 2. Create .env file
```bash
DATABASE_URL=mysql://root@localhost:3306/task_tracker

PORT=8080
```

### 3. Start MySQL via Docker (optional local development)
Use Docker to start a MySQL container locally:
```bash
docker run --name mysql-dev \
  -e MYSQL_ALLOW_EMPTY_PASSWORD=yes \
  -e MYSQL_DATABASE=task_tracker \
  -p 3306:3306 \
  -d mysql:latest
```

### 4. Install dependencies
```bash
npm install
```

### 5. Prisma setup (schema sync and client generation)
```bash
npx prisma generate
npx prisma migrate dev --name init
```
This will:
- Apply schema changes to the database
- Create a new migration
- Generate the Prisma client into node_modules/.prisma/client

### 6. Run the server in dev mode
```bash
npm run dev
```
Server will start on: http://localhost:8080

## API Routes
| Method | Route        | Description            |
| ------ | ------------ | ---------------------- |
| GET    | `/tasks`     | Get all tasks          |
| GET    | `/tasks/:id` | Get task by id         |
| POST   | `/tasks`     | Create a new task      |
| PUT    | `/tasks/:id` | Update a specific task |
| DELETE | `/tasks/:id` | Delete a task          |

## Docker
### Run backend with Docker
```bash
docker build -t task-tracker-api .

docker run -p 8080:8080 --env-file .env task-tracker-api
```

## Useful Commands
| Command                  | Purpose                             |
| ------------------------ | ----------------------------------- |
| `npm run dev`            | Start dev server with nodemon       |
| `npx prisma studio`      | Open Prisma Studio (GUI for DB)     |
| `npx prisma migrate dev` | Run migrations                      |
| `npx prisma generate`    | Regenerate Prisma client            |
