# Book Library — Upgraded

Features added in this upgraded version:
- Responsive layout (mobile-first)
- Hamburger menu for small screens
- Framer Motion animations for cards and pages
- Redux Toolkit with localStorage persistence (books survive reloads)
- Accessible focus states and ARIA-friendly attributes
- Clean modern CSS (no external frameworks required)

How to run:
1. Node 18+ recommended.
2. npm install
3. npm run dev
4. Open http://localhost:5173

Notes:
- This project uses localStorage under key `book_library_v1`.
- To reset data, clear that key in browser devtools or run `localStorage.clear()`.
