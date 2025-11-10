// Simple Express server for the bookstore backend

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // loads MONGODB_URI and ADMIN_PASSWORD from .env

const booksRouter = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // allow requests from the frontend
app.use(express.json()); // parse JSON request bodies

// Routes
app.use('/api/books', booksRouter);

// Connect to MongoDB and start server
async function start() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      console.error('MONGODB_URI not set in environment. See .env.example');
      process.exit(1);
    }
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
}

start();
