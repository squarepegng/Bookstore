// Simple Express server for the bookstore backend with Supabase

const express = require('express');
const cors = require('cors');
require('dotenv').config(); // loads SUPABASE_URL, SUPABASE_ANON_KEY, and ADMIN_PASSWORD from .env

const booksRouter = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // allow requests from the frontend
app.use(express.json()); // parse JSON request bodies

// Routes
app.use('/api/books', booksRouter);

// Verify Supabase configuration
async function start() {
  try {
    const url = process.env.SUPABASE_URL;
    const anonKey = process.env.SUPABASE_ANON_KEY;
    
    if (!url || !anonKey) {
      console.error('SUPABASE_URL and SUPABASE_ANON_KEY not set in environment. See .env.example');
      process.exit(1);
    }
    
    console.log('✅ Supabase configured');

    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
}

start();
