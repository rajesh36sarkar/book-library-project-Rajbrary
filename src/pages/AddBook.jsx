import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../store'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function AddBook() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('Fiction')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState('')

  const [errors, setErrors] = useState({})

  function validate() {
    const errs = {}
    if (!title.trim()) errs.title = 'Title is required.'
    if (!author.trim()) errs.author = 'Author is required.'
    if (!category.trim()) errs.category = 'Category is required.'
    if (!description.trim()) errs.description = 'Description is required.'
    const r = parseFloat(rating)
    if (isNaN(r) || r < 0 || r > 5) errs.rating = 'Rating must be a number between 0 and 5.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function onSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    dispatch(addBook({ title, author, category, description, rating: parseFloat(rating) }))
    navigate('/books/All')
  }

  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} className="addpage">
      <h2>Add a New Book</h2>
      <form className="form" onSubmit={onSubmit} noValidate>
        <label>Title
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          {errors.title && <div className="error" role="alert">{errors.title}</div>}
        </label>

        <label>Author
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
          {errors.author && <div className="error" role="alert">{errors.author}</div>}
        </label>

        <label>Category
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Fiction</option>
            <option>Non-Fiction</option>
            <option>Sci-Fi</option>
          </select>
        </label>

        <label>Description
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={5} />
          {errors.description && <div className="error" role="alert">{errors.description}</div>}
        </label>

        <label>Rating (0 - 5)
          <input value={rating} onChange={(e) => setRating(e.target.value)} placeholder="e.g., 4.5" />
          {errors.rating && <div className="error" role="alert">{errors.rating}</div>}
        </label>

        <div className="form-actions">
          <button className="btn primary" type="submit">Add Book</button>
        </div>
      </form>
    </motion.section>
  )
}
