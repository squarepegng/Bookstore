// Simple script to seed the database with sample books

require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/Book');

const sampleBooks = [
  {
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    description: 'A classic tale about a young prince traveling between planets.',
    price: 9.99,
    imageUrl: 'https://placehold.co/200x300?text=Little+Prince',
    paymentLink: 'https://example.com/pay/little-prince'
  },
  {
    title: '1984',
    author: 'George Orwell',
    description: 'Dystopian novel about totalitarianism.',
    price: 12.5,
    imageUrl: 'https://placehold.co/200x300?text=1984',
    paymentLink: 'https://example.com/pay/1984'
  }
];

async function seed() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      console.error('MONGODB_URI not set. Set it in .env');
      process.exit(1);
    }
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB — seeding...');
    await Book.deleteMany({});
    await Book.insertMany(sampleBooks);
    console.log('Seeding completed');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error', err);
    process.exit(1);
  }
}

seed();
