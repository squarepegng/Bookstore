import React, { useState } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || ''

// Simple admin area to add books. Protected by an admin password field.
export default function Admin({ onAdded }) {
  const [password, setPassword] = useState('')
  const [form, setForm] = useState({ title: '', author: '', description: '', price: '', imageUrl: '', paymentLink: '' })
  const [message, setMessage] = useState('')

  async function handleAdd(e) {
    e.preventDefault()
    setMessage('')
    try {
  const payload = { ...form, price: parseFloat(form.price), adminPassword: password }
  const url = `${API_URL}/.netlify/functions/add-book`.replace('//.netlify', '/.netlify')
  const res = await axios.post(url, payload)
      setMessage('Book added successfully')
      setForm({ title: '', author: '', description: '', price: '', imageUrl: '', paymentLink: '' })
      if (onAdded) onAdded()
    } catch (err) {
      console.error(err)
      setMessage(err.response?.data?.error || 'Error adding book')
    }
  }

  return (
    <div className="admin">
      <h3>Admin — Add Book</h3>
      <form onSubmit={handleAdd} className="admin-form">
        <input placeholder="Admin password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
        <input placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <input placeholder="Image URL" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} />
        <input placeholder="Payment link" value={form.paymentLink} onChange={(e) => setForm({ ...form, paymentLink: e.target.value })} />
        <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <button type="submit">Add Book</button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  )
}
