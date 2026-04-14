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
---

## Getting Started

### Prerequisites
- Node.js v20+
- PostgreSQL
- Docker (optional)

### Local Development

**1. Clone the repository**
```bash
git clone https://github.com/Mydevops101234/Scrub-Love-LA.git
cd Scrub-Love-LA
```

**2. Setup the backend**
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

**3. Setup the frontend**
```bash
cd frontend
npm install
npm run dev
```

**4. Setup the database**
```bash
sudo -u postgres psql -d scrublovela -f database/schema.sql
```

**5. Run with Docker**
```bash
docker-compose up --build
```

---

## Environment Variables

```bash
# Backend .env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
DATABASE_URL=postgresql://user:password@localhost:5432/scrublovela
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

## CI/CD Pipeline

Every push to `main` triggers the GitHub Actions pipeline:

1. **Test Backend** — installs dependencies and verifies entry point
2. **Test Frontend** — installs dependencies and runs production build
3. **Build Docker Images** — builds both frontend and backend containers

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

MIT — see [LICENSE](LICENSE) for details.
