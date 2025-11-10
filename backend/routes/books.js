// Routes for /api/books

const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET /api/books — return all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/books/add — add a new book (admin-protected)
router.post('/add', async (req, res) => {
  try {
    const adminPassword = req.body.adminPassword || req.get('x-admin-password');
    if (!adminPassword || adminPassword !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Unauthorized: invalid admin password' });
    }

    const { title, author, description, price, imageUrl, paymentLink } = req.body;
    if (!title || !author || typeof price === 'undefined') {
      return res.status(400).json({ error: 'Missing required fields: title, author, price' });
    }

    const book = new Book({ title, author, description, price, imageUrl, paymentLink });
    await book.save();
    res.json({ message: 'Book added', book });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
