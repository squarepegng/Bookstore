# Full-stack Bookstore Starter

This project contains a beginner-friendly full-stack bookstore example.

- Backend: Node.js + Express + MongoDB (Mongoose)
- Frontend: React (Vite)

Quick overview:
- Backend runs on port 5000 by default and exposes:
  - GET /api/books — returns all books
  - POST /api/books/add — adds a book (requires admin password)
- Frontend runs with Vite and fetches data from the backend.

See the `backend/README.md` and `frontend/README.md` for detailed setup steps.
