# Fullstack Setup (React + C#)

Project is split into 2 independent parts:

- `frontend`: React app (Vite)
- `backend`: ASP.NET Core Web API (C#)

## 1) Frontend (React)

Location: `frontend`

Run:

```bash
cd frontend
npm install
npm run dev
```

Frontend default URL: `http://localhost:5173`

Optional environment config:

1. Copy `frontend/.env.example` to `frontend/.env`
2. Update `VITE_API_BASE_URL` if backend URL changes

## 2) Backend (C# ASP.NET Core)

Location: `backend`

Backend includes:

- Minimal API entry point: `backend/Program.cs`
- Health endpoint: `GET /api/health`
- CORS policy allows frontend URL: `http://localhost:5173`

Run (after installing .NET SDK 10+):

```bash
cd backend
dotnet restore
dotnet run
```

Backend default URL (from launch settings): `http://localhost:5082 `

Swagger UI (development): `http://localhost:5082/swagger`

## Prerequisites

- Node.js + npm
- .NET SDK 10.0 or newer

Your machine has .NET SDK 10 installed, so backend can run with current setup.
