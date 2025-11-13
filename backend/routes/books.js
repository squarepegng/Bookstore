// Routes for /api/books with Supabase integration

const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// GET /api/books — return all books
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('Books')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    res.json(data);
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

    const { data, error } = await supabase
      .from('Books')
      .insert([
        {
          title,
          author,
          description: description || '',
          price,
          image_url: imageUrl || '',
          payment_link: paymentLink || '',
        }
      ])
      .select();
    
    if (error) throw error;
    
    res.json({ message: 'Book added', book: data[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
