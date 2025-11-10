import React from 'react'

export default function BookDetails({ book }) {
  if (!book) return <div><h2>Details</h2><p>Select a book to see details.</p></div>
  return (
    <div className="details">
      <h2>{book.title}</h2>
      <img src={book.imageUrl || 'https://placehold.co/200x300'} alt={book.title} />
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      <p><strong>Price:</strong> ${book.price}</p>
      {book.paymentLink && (
        <p>
          <a className="buy-btn" href={book.paymentLink} target="_blank" rel="noreferrer">Buy Now</a>
        </p>
      )}
    </div>
  )
}
