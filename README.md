# Scrub Love LA — Full Stack E-Commerce Platform

A production-grade e-commerce platform built for a Louisiana-based medical scrubs and apparel brand. Features a responsive storefront, secure payment processing, inventory management, and a containerized deployment pipeline.

---

## Tech Stack

**Frontend**
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

**Backend**
- Node.js + Express
- PostgreSQL
- JWT Authentication
- Stripe Payment API

**DevOps**
- Docker + Docker Compose
- GitHub Actions CI/CD
- Cloudways (Production Hosting)

---

## Features

- Animated hero slider with auto-advance
- Product catalog with category filtering and sorting
- Product detail pages with size and color selectors
- Shopping cart with quantity controls and promo codes
- Stripe, Apple Pay, Google Pay and Cash App payment support
- Free shipping threshold logic
- Fully containerized with Docker
- Automated CI/CD pipeline via GitHub Actions

---

## Project Structure

    scrub-love-la/
    ├── frontend/                  # Next.js application
    │   ├── app/                   # App router pages
    │   │   ├── page.tsx           # Homepage
    │   │   ├── shop/              # Shop listing page
    │   │   │   └── [id]/          # Product detail page
    │   │   └── cart/              # Shopping cart page
    │   ├── components/
    │   │   ├── layout/
    │   │   │   └── Navbar.tsx     # Navigation bar
    │   │   └── ui/
    │   │       ├── HeroSlider.tsx     # Animated hero banner
    │   │       ├── CategoryCircles.tsx # Category navigation
    │   │       ├── ProductCard.tsx    # Product grid card
    │   │       ├── ProductDetail.tsx  # Product detail view
    │   │       ├── ShopClient.tsx     # Shop with filters
    │   │       └── CartClient.tsx     # Cart with order summary
    │   └── public/                # Static assets
    ├── backend/                   # Node.js + Express REST API
    │   ├── routes/
    │   │   ├── auth.js            # Auth routes
    │   │   ├── products.js        # Product routes
    │   │   ├── orders.js          # Order routes
    │   │   └── payments.js        # Stripe payment routes
    │   ├── middleware/
    │   │   └── auth.js            # JWT middleware
    │   ├── config/
    │   │   └── db.js              # PostgreSQL connection
    │   └── server.js              # Express entry point
    ├── database/
    │   └── schema.sql             # PostgreSQL schema + seed data
    ├── docker-compose.yml         # Full stack container setup
    └── .github/
        └── workflows/
            └── deploy.yml         # CI/CD pipeline

---

## Getting Started

### Prerequisites
- Node.js v20+
- PostgreSQL
- Docker (optional)

### Local Development

**1. Clone the repository**

    git clone https://github.com/Mydevops101234/Scrub-Love-LA.git
    cd Scrub-Love-LA

**2. Setup the backend**

    cd backend
    cp .env.example .env
    npm install
    npm run dev

**3. Setup the frontend**

    cd frontend
    npm install
    npm run dev

**4. Setup the database**

    sudo -u postgres psql -d scrublovela -f database/schema.sql

**5. Run with Docker**

    docker-compose up --build

---

## Environment Variables

    # Backend .env
    PORT=5000
    NODE_ENV=development
    CLIENT_URL=http://localhost:3000
    DATABASE_URL=postgresql://user:password@localhost:5432/scrublovela
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key

---

## CI/CD Pipeline

Every push to main triggers the GitHub Actions pipeline:

1. Test Backend — installs dependencies and verifies entry point
2. Test Frontend — installs dependencies and runs production build
3. Build Docker Images — builds both frontend and backend containers

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /health | API health check |
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get single product |
| GET | /api/orders | Get user orders |
| POST | /api/orders | Create new order |
| POST | /api/payments/create-payment-intent | Create Stripe payment |

---

## License

MIT — see LICENSE for details.
