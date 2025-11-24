import { configureStore, createSlice, nanoid } from '@reduxjs/toolkit'

const STORAGE_KEY = 'book_library_v1'

const initialBooks = [
  { id: '1', title: 'The Stars Beyond', author: 'Ava Reed', category: 'Sci-Fi', description: "An interstellar journey exploring humanity's resilience.", rating: 4.5 },
  { id: '2', title: 'Quiet Rivers', author: 'Sam Parker', category: 'Fiction', description: 'A tender novel about family and secrets.', rating: 4.2 },
  { id: '3', title: 'The Practical Mind', author: 'Dana Kim', category: 'Non-Fiction', description: 'A handbook for thinking clearly and acting wisely.', rating: 4.7 }
]

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return initialBooks
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return initialBooks
    return parsed
  } catch (e) {
    return initialBooks
  }
}

const booksSlice = createSlice({
  name: 'books',
  initialState: { list: load() },
  reducers: {
    addBook: {
      reducer(state, action) {
        state.list.unshift(action.payload)
      },
      prepare(book) {
        return { payload: { ...book, id: nanoid() } }
      }
    },
    removeBook(state, action) {
      state.list = state.list.filter(b => b.id !== action.payload)
    },
    updateBooks(state, action) {
      state.list = action.payload
    }
  }
})

export const { addBook, removeBook, updateBooks } = booksSlice.actions

const store = configureStore({
  reducer: { books: booksSlice.reducer }
})

// persist on changes
store.subscribe(() => {
  try {
    const state = store.getState()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.books.list))
  } catch (e) {
    // ignore
  }
})

export default store
