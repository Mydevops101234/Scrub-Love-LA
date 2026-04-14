-- Users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'customer',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(100),
  sizes TEXT[],
  colors TEXT[],
  images TEXT[],
  stock INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  items JSONB NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  shipping_address TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  stripe_payment_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Sample products
INSERT INTO products (name, description, price, category, sizes, colors, stock) VALUES
('Classic Scrub Set', 'Premium comfortable scrub set for medical professionals', 49.99, 'scrubs', ARRAY['XS','S','M','L','XL','XXL'], ARRAY['Navy','Black','Ceil Blue'], 50),
('Fitted Scrub Top', 'Lightweight fitted scrub top with pockets', 29.99, 'scrubs', ARRAY['XS','S','M','L','XL'], ARRAY['Wine','Pewter','Teal'], 75),
('Scrub Jogger Pants', 'Comfortable jogger style scrub pants', 34.99, 'scrubs', ARRAY['XS','S','M','L','XL','XXL'], ARRAY['Black','Navy','Graphite'], 60),
('Medical Romper', 'Stylish one piece medical romper', 59.99, 'rompers', ARRAY['XS','S','M','L','XL'], ARRAY['Black','Navy','Dusty Rose'], 40);
