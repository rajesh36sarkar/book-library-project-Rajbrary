import React from 'react'
import { useSelector } from 'react-redux'
import BookCard from '../components/BookCard'
import { Link } from 'react-router-dom'

const CATEGORIES = ['All', 'Fiction', 'Non-Fiction', 'Sci-Fi']

export default function Home() {
  const books = useSelector(s => s.books.list)
  const popular = [...books].sort((a,b) => b.rating - a.rating).slice(0,3)

  return (
    <section>
      <section className="hero">
        <h2 className="fade-in">Welcome to Rajbrary</h2>
        <p className="muted">Browse, add and enjoy books.</p>
      </section>

      <section className="categories">
        <h3>Categories</h3>
        <div className="chips">
          {CATEGORIES.map(c => <Link key={c} to={`/books/${c}`} className="chip">{c}</Link>)}
        </div>
      </section>

      <section className="popular">
        <h3>Popular Books</h3>
        <div className="grid">
          {popular.map(b => <BookCard key={b.id} book={b} />)}
        </div>
      </section>
    </section>
  )
}
