"use client";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  color: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{
          background: "white",
          border: "1px solid #e8e0d0",
          overflow: "hidden",
          transition: "transform 0.2s, box-shadow 0.2s",
          cursor: "pointer",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        <div style={{
          height: "320px",
          background: product.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}>
          <span style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "1rem",
            color: "#999",
            letterSpacing: "0.1em",
          }}>Product Image</span>
          <span style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            background: "#b8860b",
            color: "white",
            padding: "0.25rem 0.75rem",
            fontFamily: "Jost, sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>{product.category}</span>
        </div>

        <div style={{ padding: "1.5rem" }}>
          <h3 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "1.3rem",
            fontWeight: 400,
            marginBottom: "0.5rem",
          }}>{product.name}</h3>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "1rem",
              fontWeight: 500,
              color: "#b8860b",
            }}>${product.price}</span>
            <span style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#999",
            }}>View →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
