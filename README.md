# Team Task Manager

A production-ready MVP for a role-based team task manager built with Node.js, Express, MongoDB, Mongoose, JWT auth, and React/Vite.

## Features

- Signup and login with bcrypt password hashing
- JWT authentication
- Roles: `ADMIN` and `MEMBER`
- Admin project creation
- Admin task assignment
- Members view only their assigned tasks
- Admins view all tasks
- Task status updates
- Overdue task highlighting
- Railway, MongoDB Atlas, and Vercel ready

## Project Structure

```text
backend/
  src/
    config/
    constants/
    controllers/
    middleware/
    models/
    routes/
    app.js
    seed.js
    server.js
  .env.example
  package.json
frontend/
  src/
    api.js
    App.jsx
    main.jsx
    styles.css
  .env.example
  index.html
  package.json
README.md
```

## Backend Code

The backend lives in `backend/` and exposes:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/projects` admin only
- `GET /api/projects`
- `POST /api/tasks` admin only
- `GET /api/tasks`
- `PUT /api/tasks/:id`
- `GET /api/users` admin only, used by the admin assignment UI
- `GET /health`

## Frontend Code

The frontend lives in `frontend/` and includes:

- Login and signup page
- Dashboard task list
- Task status dropdown
- Admin panel for creating projects and assigning tasks
- API integration through `frontend/src/api.js`

## Local Setup

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Set `backend/.env`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/team-task-manager
JWT_SECRET=replace-with-a-long-random-secret
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
```

Optional seed data:

```bash
npm run seed
```

Seed users:

- Admin: `admin@example.com` / `password123`
- Member: `member@example.com` / `password123`

### 2. Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Set `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

Open `http://localhost:5173`.

## Deployment Guide

### MongoDB Atlas

1. Create a MongoDB Atlas cluster.
2. Create a database user.
3. Allow Railway access from Network Access. For a simple MVP deployment, allow `0.0.0.0/0`; for production, restrict this when your hosting network is known.
4. Copy the connection string and replace the username, password, and database name.

### Railway Backend

1. Push this repository to GitHub.
2. Create a new Railway project from the GitHub repo.
3. Set the backend root directory to `backend`.
4. Add environment variables:
   - `PORT=5000`
   - `MONGODB_URI=<your MongoDB Atlas URI>`
   - `JWT_SECRET=<long random secret>`
   - `JWT_EXPIRES_IN=7d`
   - `CLIENT_URL=<your Vercel frontend URL>`
5. Railway should run:
   - Build/install: `npm install`
   - Start: `npm start`
6. After deploy, verify `https://your-railway-url/health`.

### Vercel Frontend

1. Import the same GitHub repository into Vercel.
2. Set the root directory to `frontend`.
3. Add environment variable:
   - `VITE_API_URL=https://your-railway-url/api`
4. Vercel should run:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy.
6. Update Railway `CLIENT_URL` to the final Vercel URL and redeploy the backend.

## API Notes

Send authenticated requests with:

```http
Authorization: Bearer <token>
```

Task statuses:

- `TODO`
- `IN_PROGRESS`
- `DONE`

Roles:

- `ADMIN`
- `MEMBER`

## Production Notes

- Use a strong `JWT_SECRET`.
- Restrict Atlas network access when possible.
- Consider disabling public admin signup for a hardened production app. This MVP allows selecting `ADMIN` on signup so it is immediately testable.
- Add rate limiting and request sanitization before handling untrusted public traffic at scale.
