import React from 'react'

// Display a list of books. Clicking a book calls onSelect(book)
export default function BookList({ books, onSelect }) {
  return (
    <div>
      <h2>Books</h2>
      {books.length === 0 && <p>No books available.</p>}
      <ul className="book-list">
        {books.map((b) => (
          <li key={b.id} onClick={() => onSelect(b)}>
            <img src={b.image_url || 'https://placehold.co/80x120'} alt={b.title} />
            <div>
              <strong>{b.title}</strong>
              <div className="author">{b.author}</div>
              <div className="price">${b.price}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
