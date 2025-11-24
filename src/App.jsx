import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import BrowseBooks from './pages/BrowseBooks'
import BookDetails from './pages/BookDetails'
import AddBook from './pages/AddBook'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='books/:category' element={<BrowseBooks />} />
        <Route path='book/:id' element={<BookDetails />} />
        <Route path='add' element={<AddBook />} />
      </Route>
      <Route path='/404/book-not-found' element={<NotFound />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
