import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container nav">
        <div className="branding">
          <Link to="/" className="logo">Rajbrary</Link>
        </div>

        <button className="hamburger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span className={open ? 'bar open' : 'bar'}></span>
          <span className={open ? 'bar open' : 'bar'}></span>
          <span className={open ? 'bar open' : 'bar'}></span>
        </button>

        <nav className={open ? 'main-nav open' : 'main-nav'}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/books/All" onClick={() => setOpen(false)}>Browse</Link>
          <Link to="/add" onClick={() => setOpen(false)}>Add Book</Link>
        </nav>
      </div>
    </header>
  )
}
