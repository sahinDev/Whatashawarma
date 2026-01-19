# What A Shawarma

A small full-stack food ordering web app (React frontend + Node/Express backend).

---

## Project Overview

`Whatashawarma` is a simple ordering web application with separate frontend, admin, and backend folders. The frontend provides a public site for browsing food items, adding to cart, and placing orders. The admin area includes management pages. The backend exposes REST endpoints used by the frontend.

## Technologies

- Frontend: React (JSX), Vite (dev/build tooling)
- Admin: React (separate admin app) with Vite
- Backend: Node.js, Express
- Data: project contains model files for Users, Food, Orders (local DB configuration depends on environment)
- Animations: framer-motion (used for hamburger/menu animations)
- Build tools: npm

## Repository Layout

- `frontend/` — Main customer-facing React app
  - `src/` — React source (components, pages, assets)
  - `public/`, `vite.config.js`, `package.json`
- `admin/` — Admin React app
  - `src/` — Admin UI components and pages
- `backend/` — Node/Express API server
  - `controllers/`, `models/`, `routes/`, `middleware/`
  - `server.js` — server entrypoint
- `uploads/` — used for uploaded assets

## Key Features / Content

- Browse menu items (wraps, pizzas, bowls, sides)
- Add/remove items to cart and view cart
- Place orders and view order history (My Orders)
- Admin pages for listing/adding/editing food and orders (admin app)
- Authentication flows (login / logout)

## Developer Notes

- The app imports images from `frontend/src/assets` and exposes them via the `assets` export (`frontend/src/assets/assets.js`). Replace `frontend/src/assets/logo.png` to change the site logo used in both Navbar and Footer.
- The mobile hamburger/menu uses `framer-motion` for animations. Ensure `framer-motion` is installed in the frontend project if you change menu components.

## Running Locally (Windows / PowerShell)

1. Install dependencies (frontend, admin, backend):

```powershell
cd C:\Whatashawarma\frontend
npm install

cd ..\admin
npm install

cd ..\backend
npm install
```

2. Start backend (API):

```powershell
cd C:\Whatashawarma\backend
node server.js
# or use nodemon if installed: nodemon server.js
```

3. Start frontend (dev):

```powershell
cd C:\Whatashawarma\frontend
npm run dev
```

4. Start admin (dev):

```powershell
cd C:\Whatashawarma\admin
npm run dev
```

5. Open the apps in your browser (default Vite ports):
- Frontend: `http://localhost:5173` (or the port printed by Vite)
- Admin: `http://localhost:5174` (or admin port printed by Vite)

## Environment & Configuration

- If the backend requires environment variables (DB connection, JWT secret), create a `.env` file in `backend/` and populate per your local setup. Check `backend/config/db.js` for DB connection details used in the project.
