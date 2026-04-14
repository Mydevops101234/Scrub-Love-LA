"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";

const allProducts = [
  { id: 1, name: "Classic Scrub Set", price: 49.99, category: "Scrubs", color: "#e8f4f8" },
  { id: 2, name: "Fitted Scrub Top", price: 29.99, category: "Scrubs", color: "#f8f0e8" },
  { id: 3, name: "Scrub Jogger Pants", price: 34.99, category: "Scrubs", color: "#f0f8e8" },
  { id: 4, name: "Medical Romper", price: 59.99, category: "Rompers", color: "#f8e8f0" },
  { id: 5, name: "Classic Romper Set", price: 64.99, category: "Rompers", color: "#f0e8f8" },
  { id: 6, name: "Slim Fit Scrub Top", price: 32.99, category: "Scrubs", color: "#e8f8f0" },
];

const filters = ["All", "Scrubs", "Rompers"];
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Newest"];

export default function ShopClient() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  const filtered = allProducts
    .filter((p) => activeFilter === "All" || p.category === activeFilter)
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      return 0;
    });

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "2rem" }}>
      {/* Filter & Sort Bar */}
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
        {/* Filters */}
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <span style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            color: "#888",
            textTransform: "uppercase",
            marginRight: "0.5rem",
          }}>Filter:</span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: "0.4rem 1.2rem",
                fontFamily: "Jost, sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: activeFilter === f ? "1px solid #1a1a1a" : "1px solid #ddd",
                background: activeFilter === f ? "#1a1a1a" : "white",
                color: activeFilter === f ? "white" : "#1a1a1a",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >{f}</button>
          ))}
        </div>

        {/* Sort */}
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

        {/* Results count */}
        <span style={{
          fontFamily: "Jost, sans-serif",
          fontSize: "0.8rem",
          color: "#888",
        }}>{filtered.length} products</span>
      </div>

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
