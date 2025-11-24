import React, { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

export default function BookDetails() {
  const { id } = useParams()
  const books = useSelector(s => s.books.list)
  const book = books.find(b => b.id === id)
  const navigate = useNavigate()

  useEffect(() => {
    if (!book) navigate('/404/book-not-found', { replace: true })
  }, [book, navigate])

  if (!book) return null

  return (
    <motion.section initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="details">
      <h2>{book.title}</h2>
      <p className="muted">by {book.author}</p>
      <p className="small muted">Category: {book.category} • Rating: {book.rating}</p>
      <p className="desc">{book.description}</p>
      <div style={{marginTop:'1rem'}}>
        <Link to={`/books/${book.category}`} className="btn">Back to Browse</Link>
      </div>
    </motion.section>
  )
}
