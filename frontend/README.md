# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Frontend Developer Intern Assignment

## Tech Stack
- Frontend: React.js, TailwindCSS
- Backend: Node.js, Express (Lightweight mock backend)
- Authentication: Token-based (JWT-ready structure)

## Features
- User Login & Register
- Protected Dashboard
- Task CRUD (Create, Read, Delete)
- Search tasks
- Logout flow

## Authentication Flow
- User logs in
- Token is stored in localStorage
- Protected routes check token before access

## API Endpoints
POST /api/auth/login  
POST /api/auth/register  
GET /api/tasks  
POST /api/tasks  
DELETE /api/tasks/:id  

## Security
- Token-based authentication
- Protected routes on frontend
- Backend structure ready for JWT & bcrypt

## Scalability Notes
- Frontend and backend are separated
- Can add refresh tokens
- Can integrate database (MongoDB)
- Pagination and caching can be added
- Role-based access can be implemented

## Note
Backend is intentionally kept lightweight for assignment purposes.
In production, it can be extended with full JWT validation and database support.

Backend is a lightweight mock implementation created for assignment purposes.
It can be extended with JWT validation, database, and role-based access in production.

