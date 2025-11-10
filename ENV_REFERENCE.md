# Quick Reference: Environment Variables

This file documents all environment variables used in the project.

## Backend (.env file in `backend/`)

- `MONGODB_URI` — MongoDB Atlas connection string (SRV format)
  Example: `mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority`
  
- `ADMIN_PASSWORD` — Password required to add books via `/api/books/add` or Admin form
  Example: `securePassword123`
  
- `PORT` — Port the backend runs on (default: 5000)
  Example: `5000`

## Frontend (.env file in project root or `frontend/`)

- `VITE_API_URL` — Backend API URL for the frontend to call
  - Local development: `http://localhost:5000`
  - Deployed on Netlify: The Render backend URL (e.g., `https://bookstore-backend.onrender.com`)
  - If empty, the frontend will use relative paths (`/.netlify/functions/...`) for Netlify functions.

## Netlify Site Environment Variables

Set these in Netlify Site Settings → Build & deploy → Environment:

- `VITE_API_URL` — Backend URL that frontend should call
  Example: `https://bookstore-backend.onrender.com`

## Render Service Environment Variables

Set these in Render service settings:

- `MONGODB_URI` — Same MongoDB connection string as backend `.env`
- `ADMIN_PASSWORD` — Same password as backend `.env`

---

## Security Notes

- **Never commit `.env` files with real secrets to Git.** Use `.env.example` to show which variables are needed.
- **On Netlify/Render, use the dashboard UI to set environment variables.** Don't paste secrets in code.
- For MongoDB: the password and username are part of the connection string. Keep this secret (don't share the full URI publicly).
- For the admin password: this is set on the backend and frontend uses it only in the form submission. It's not exposed to the browser beyond the login form.
