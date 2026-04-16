"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";

const allProducts = [
  { id: 1, name: "Classic Scrub Set", price: 49.99, category: "Scrubs", gender: "Women", color: "#e8f4f8" },
  { id: 2, name: "Fitted Scrub Top", price: 29.99, category: "Scrubs", gender: "Women", color: "#f8f0e8" },
  { id: 3, name: "Scrub Jogger Pants", price: 34.99, category: "Scrubs", gender: "Unisex", color: "#f0f8e8" },
  { id: 4, name: "Medical Romper", price: 59.99, category: "Rompers", gender: "Women", color: "#f8e8f0" },
  { id: 5, name: "Classic Romper Set", price: 64.99, category: "Rompers", gender: "Women", color: "#f0e8f8" },
  { id: 6, name: "Slim Fit Scrub Top", price: 32.99, category: "Scrubs", gender: "Men", color: "#e8f8f0" },
  { id: 7, name: "Men's Cargo Scrub Pants", price: 39.99, category: "Scrubs", gender: "Men", color: "#e8ede8" },
  { id: 8, name: "Men's Classic Scrub Set", price: 54.99, category: "Scrubs", gender: "Men", color: "#e0eaf0" },
  { id: 9, name: "Unisex Lab Coat", price: 69.99, category: "Lab Coats", gender: "Unisex", color: "#f8f8f8" },
  { id: 10, name: "Women's Lab Coat", price: 74.99, category: "Lab Coats", gender: "Women", color: "#faf0f8" },
  { id: 11, name: "Dental Scrub Set", price: 52.99, category: "Specialty", gender: "Unisex", color: "#f0f4e8" },
  { id: 12, name: "Surgical Scrub Set", price: 57.99, category: "Specialty", gender: "Unisex", color: "#e8f0f8" },
];

const genderFilters = ["All", "Women", "Men", "Unisex"];
const categoryFilters = ["All", "Scrubs", "Rompers", "Lab Coats", "Specialty"];
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Newest"];

export default function ShopClient() {
  const [activeGender, setActiveGender] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  const filtered = allProducts
    .filter((p) => activeGender === "All" || p.gender === activeGender)
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      return 0;
    });

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "2rem" }}>

      {/* Gender Filter Bar */}
      <div style={{
        display: "flex",
        gap: "0",
        marginBottom: "0",
        borderBottom: "2px solid #1a1a1a",
      }}>
        {genderFilters.map((g) => (
          <button
            key={g}
            onClick={() => setActiveGender(g)}
            style={{
              padding: "0.85rem 2rem",
              fontFamily: "Jost, sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              border: "none",
              borderBottom: activeGender === g ? "3px solid #e8002a" : "3px solid transparent",
              background: "white",
              color: activeGender === g ? "#e8002a" : "#888",
              cursor: "pointer",
              transition: "all 0.2s",
              fontWeight: activeGender === g ? 500 : 400,
              marginBottom: "-2px",
            }}
          >{g}</button>
        ))}
      </div>

      {/* Category + Sort Bar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "white",
        padding: "1rem 1.5rem",
        marginBottom: "2rem",
        borderBottom: "1px solid #eee",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
          <span style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            color: "#888",
            textTransform: "uppercase",
            marginRight: "0.5rem",
          }}>Category:</span>
          {categoryFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveCategory(f)}
              style={{
                padding: "0.4rem 1.2rem",
                fontFamily: "Jost, sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: activeCategory === f ? "1px solid #1a1a1a" : "1px solid #ddd",
                background: activeCategory === f ? "#1a1a1a" : "white",
                color: activeCategory === f ? "white" : "#1a1a1a",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >{f}</button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: "#888",
              textTransform: "uppercase",
            }}>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "0.8rem",
                padding: "0.4rem 1rem",
                border: "1px solid #ddd",
                background: "white",
                cursor: "pointer",
                outline: "none",
              }}
            >
              {sortOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <span style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "0.8rem",
            color: "#888",
          }}>{filtered.length} products</span>
        </div>
      </div>

      {/* No results */}
      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "5rem 0" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", marginBottom: "1rem" }}>No products found</p>
          <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.9rem", color: "#888" }}>Try adjusting your filters</p>
        </div>
      )}

      {/* Product Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "1.5rem",
      }}>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
