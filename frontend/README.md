# Frontend (React + Vite)

Steps to run the frontend:

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. The app will open at http://localhost:3000 by default. It will fetch data from the backend at the URL set in `VITE_API_URL` (see `.env.example` at project root).

If your backend runs on a different port, copy `.env.example` to `.env` in the project root and set `VITE_API_URL` accordingly.
