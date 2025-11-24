import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import BookCard from '../components/BookCard'
import { motion } from 'framer-motion'

export default function BrowseBooks() {
  const { category } = useParams()
  const books = useSelector(s => s.books.list)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const filtered = useMemo(() => {
    const cat = category || 'All'
    const q = query.trim().toLowerCase()
    return books.filter(b => {
      const matchesCategory = cat === 'All' ? true : b.category === cat
      const matchesQuery = q === '' || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [books, category, query])

  const categories = ['All', 'Fiction', 'Non-Fiction', 'Sci-Fi']

  return (
    <div>
      <div className="browse-header">
        <h2>Browse Books</h2>
        <div className="controls">
          <select value={category || 'All'} onChange={(e) => navigate(`/books/${e.target.value}`)}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <input placeholder="Search by title or author" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
      </div>

      <motion.div layout className="grid">
        {filtered.length === 0 ? <p>No books found.</p> : filtered.map(b => <BookCard key={b.id} book={b} />)}
      </motion.div>
    </div>
  )
}
