import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'
import Admin from './components/Admin'

// Base API URL comes from Vite env. When deployed to Netlify we'll call serverless functions
// placed at `/.netlify/functions/*`. If VITE_API_URL is empty, API_URL will be an empty string
// so requests become relative (e.g. '/.netlify/functions/get-books').
const API_URL = import.meta.env.VITE_API_URL || ''

export default function App() {
  const [books, setBooks] = useState([])
  const [selected, setSelected] = useState(null)

  // Fetch books from backend
  async function fetchBooks() {
    try {
      // When using Netlify Functions the endpoint will be '/.netlify/functions/get-books'
      const url = `${API_URL}/.netlify/functions/get-books`.replace('//.netlify', '/.netlify')
      const res = await axios.get(url)
      // Ensure we only set an array of books. If the function returns an error
      // object (e.g. { error: 'Server error' }) protect against .map crashes.
      const data = res.data
      if (Array.isArray(data)) {
        setBooks(data)
      } else {
        console.error('Unexpected response for books:', data)
        setBooks([])
      }
    } catch (err) {
      console.error('Error fetching books', err)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className="container">
      <h1>Simple Bookstore</h1>
      <div className="layout">
        <div className="left">
          <BookList books={books} onSelect={setSelected} />
        </div>
        <div className="right">
          <BookDetails book={selected} />
          <Admin onAdded={fetchBooks} />
        </div>
      </div>
    </div>
  )
}
