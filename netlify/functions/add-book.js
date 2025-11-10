// Netlify Function: add-book
// Adds a new book to MongoDB Atlas. Requires ADMIN_PASSWORD in environment variables.

const { MongoClient } = require('mongodb')

const uri = process.env.MONGODB_URI
if (!uri) {
  console.error('MONGODB_URI not set in Netlify environment')
}

let cachedClient = global._mongoClient
let cachedDb = global._mongoDb

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }
  const client = new MongoClient(uri)
  await client.connect()
  const db = client.db()
  global._mongoClient = client
  global._mongoDb = db
  cachedClient = client
  cachedDb = db
  return { client, db }
}

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }
  try {
    const body = JSON.parse(event.body || '{}')
    const adminPassword = body.adminPassword || (event.headers && (event.headers['x-admin-password'] || event.headers['X-Admin-Password']))
    if (!adminPassword || adminPassword !== process.env.ADMIN_PASSWORD) {
      return { statusCode: 401, body: JSON.stringify({ error: 'Unauthorized: invalid admin password' }) }
    }

    const { title, author, description = '', price, imageUrl = '', paymentLink = '' } = body
    if (!title || !author || typeof price === 'undefined') {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields: title, author, price' }) }
    }

    const { db } = await connectToDatabase()
    const result = await db.collection('books').insertOne({
      title,
      author,
      description,
      price: parseFloat(price),
      imageUrl,
      paymentLink,
      createdAt: new Date()
    })

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Book added', bookId: result.insertedId })
    }
  } catch (err) {
    console.error('add-book error', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) }
  }
}
