import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NotFound() {
  const location = useLocation()
  return (
    <div className="notfound">
      <h2>404 — Page Not Found</h2>
      <p>The requested URL <code>{location.pathname}</code> could not be found.</p>
      <p><Link to="/" className="btn">Back to Home</Link></p>
    </div>
  )
}
