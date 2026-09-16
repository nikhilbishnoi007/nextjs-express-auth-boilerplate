# Full-Stack Auth Boilerplate (Next.js + Express + MongoDB + JWT)

A production-ready authentication starter kit so you never have to build login/signup from scratch again.

## ✨ Features

- Signup, Login, Logout, "Get current user" (`/me`) endpoints
- JWT stored in **HTTP-only cookies** (secure — not accessible via JS, protects against XSS token theft)
- Passwords hashed with **bcrypt**
- Protected routes on both backend (middleware) and frontend (redirect if not logged in)
- Global auth state via **React Context** — `useAuth()` hook available anywhere
- Fully typed with **TypeScript** on both frontend and backend
- Clean, modular folder structure — easy to extend (roles, email verification, password reset, etc.)

## 🗂️ Project Structure

```
auth-boilerplate/
├── backend/          # Express + TypeScript + MongoDB API
│   └── src/
│       ├── config/       # DB connection
│       ├── controllers/  # Route logic (signup, login, logout, me)
│       ├── middleware/   # JWT verification / route protection
│       ├── models/       # Mongoose User schema
│       ├── routes/       # Express routes
│       └── utils/        # Token generation helper
└── frontend/         # Next.js (App Router) + TypeScript + Tailwind
    ├── app/              # Pages: home, login, signup, dashboard
    ├── context/          # AuthContext (global auth state)
    └── lib/              # API helper (fetch wrapper)
```

## 🚀 Setup

### Backend
```bash
cd backend
npm install
cp .env.example .env   # fill in MONGO_URI and JWT_SECRET
npm run dev
```

### Frontend
```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

Visit `http://localhost:3000`.

## 🔧 Customization Tips

- **Add fields to User** (e.g. avatar, role) → edit `backend/src/models/User.ts`
- **Change token expiry** → edit `JWT_EXPIRES_IN` in `.env`
- **Add Google/GitHub OAuth** → extend `authController.ts` and add new routes
- **Styling** → this uses Tailwind CSS; swap classes or plug in your own design system
- **Deploy** → backend works great on Render/Railway, frontend on Vercel

## 🔒 Security Notes

- Cookies are `httpOnly` (JS can't read them) and `secure` in production
- Always set a strong, random `JWT_SECRET` in production
- Set `sameSite: "none"` only when frontend and backend are on different domains (already handled)

## 📄 License

This template is sold for use in personal and commercial projects. Redistribution or resale of the template source code itself (as-is) is not permitted. See license terms provided at purchase.

---

Need custom features (OAuth, email verification, roles/permissions)? Feel free to reach out for custom builds.
