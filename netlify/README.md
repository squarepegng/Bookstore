# Netlify Functions

This folder contains Netlify Functions used when deploying the project to Netlify.

Functions:
- `netlify/functions/get-books.js` — returns all books from MongoDB
- `netlify/functions/add-book.js` — adds a book (requires ADMIN_PASSWORD env var)

Setup notes:
- In Netlify site settings, add environment variables:
  - `MONGODB_URI` — MongoDB Atlas connection string
  - `ADMIN_PASSWORD` — password used by the Admin form

Deploy:
- Push repo to GitHub. In Netlify, create a new site from Git, set the project root to the repository root or `frontend` depending on your structure, and ensure the Functions directory is set to `netlify/functions`.
