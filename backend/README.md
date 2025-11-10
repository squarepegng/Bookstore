# Backend (Node.js + Express)

Files in this folder:
- `server.js` — main server entry
- `routes/books.js` — API routes for books
- `models/Book.js` — Mongoose model
- `seed.js` — optional script to seed sample data

Setup:
1. Copy `.env.example` to `.env` at the project root and fill in `MONGODB_URI` and `ADMIN_PASSWORD`.
2. Install dependencies:

```bash
cd backend
npm install
```

3. Run the server (development):

```bash
npm run dev
```

4. Optionally seed sample data:

```bash
npm run seed
```

API examples:
- GET all books: `GET http://localhost:5000/api/books`
- Add a book (POST): `POST http://localhost:5000/api/books/add` with JSON body and `adminPassword` in body.
