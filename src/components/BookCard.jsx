import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function BookCard({ book }) {
  return (
    <motion.article layout whileHover={{ y: -6 }} className="card" aria-labelledby={`title-${book.id}`}>
      <h3 id={`title-${book.id}`}>{book.title}</h3>
      <p className="muted">by {book.author}</p>
      <p className="muted small">Category: {book.category}</p>
      <p className="desc">{book.description.length > 140 ? book.description.slice(0,140)+'...' : book.description}</p>
      <div className="card-footer">
        <strong>Rating: {book.rating}</strong>
        <Link to={`/book/${book.id}`} className="btn-link">View</Link>
      </div>
    </motion.article>
  )
}
