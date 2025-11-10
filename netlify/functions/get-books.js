// Netlify Function: get-books
// Returns all books from MongoDB Atlas. Uses a cached MongoClient to avoid reconnecting on every invocation.

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
  const db = client.db() // database from connection string
  global._mongoClient = client
  global._mongoDb = db
  cachedClient = client
  cachedDb = db
  return { client, db }
}

exports.handler = async function (event, context) {
  try {
    const { db } = await connectToDatabase()
    const books = await db.collection('books').find({}).sort({ createdAt: -1 }).toArray()
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(books)
    }
  } catch (err) {
    console.error('get-books error', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) }
  }
}
