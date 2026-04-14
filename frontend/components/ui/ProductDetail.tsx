"use client";
import { useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  color: string;
  description: string;
  sizes: string[];
  colors: string[];
}

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "3rem 2rem" }}>
      {/* Breadcrumb */}
      <div style={{
        fontFamily: "Jost, sans-serif",
        fontSize: "0.8rem",
        color: "#888",
        marginBottom: "2rem",
        letterSpacing: "0.05em",
      }}>
        <Link href="/" style={{ color: "#888", textDecoration: "none" }}>Home</Link>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <Link href="/shop" style={{ color: "#888", textDecoration: "none" }}>Shop</Link>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <span style={{ color: "#1a1a1a" }}>{product.name}</span>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "start",
      }}>
        {/* Product Image */}
        <div>
          <div style={{
            width: "100%",
            aspectRatio: "3/4",
            background: product.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
          }}>
            <span style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1.2rem",
              color: "#999",
              letterSpacing: "0.1em",
            }}>Product Image</span>
          </div>
          {/* Thumbnail row */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{
                width: "80px",
                height: "100px",
                background: product.color,
                opacity: i === 1 ? 1 : 0.5,
                cursor: "pointer",
                border: i === 1 ? "2px solid #1a1a1a" : "2px solid transparent",
              }}/>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <span style={{
            display: "inline-block",
            background: "#b8860b",
            color: "white",
            padding: "0.25rem 0.75rem",
            fontFamily: "Jost, sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>{product.category}</span>

          <h1 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "2.8rem",
            fontWeight: 400,
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}>{product.name}</h1>

          <p style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "2rem",
            color: "#b8860b",
            marginBottom: "1.5rem",
            fontWeight: 600,
          }}>${product.price}</p>

          <p style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "0.9rem",
            color: "#666",
            lineHeight: 1.8,
            marginBottom: "2rem",
          }}>{product.description}</p>

          {/* Color Selector */}
          <div style={{ marginBottom: "1.5rem" }}>
            <p style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
              color: "#1a1a1a",
            }}>Color: <span style={{ color: "#b8860b" }}>{selectedColor || "Select"}</span></p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  style={{
                    padding: "0.4rem 1rem",
                    fontFamily: "Jost, sans-serif",
                    fontSize: "0.8rem",
                    border: selectedColor === c ? "2px solid #1a1a1a" : "1px solid #ddd",
                    background: selectedColor === c ? "#1a1a1a" : "white",
                    color: selectedColor === c ? "white" : "#1a1a1a",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >{c}</button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div style={{ marginBottom: "2rem" }}>
            <p style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
              color: "#1a1a1a",
            }}>Size: <span style={{ color: "#b8860b" }}>{selectedSize || "Select"}</span></p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  style={{
                    width: "3rem",
                    height: "3rem",
                    fontFamily: "Jost, sans-serif",
                    fontSize: "0.8rem",
                    border: selectedSize === s ? "2px solid #1a1a1a" : "1px solid #ddd",
                    background: selectedSize === s ? "#1a1a1a" : "white",
                    color: selectedSize === s ? "white" : "#1a1a1a",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >{s}</button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
            <p style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}>Qty:</p>
            <div style={{ display: "flex", alignItems: "center", border: "1px solid #ddd", background: "white" }}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  color: "#1a1a1a",
                }}
              >−</button>
              <span style={{
                width: "2.5rem",
                textAlign: "center",
                fontFamily: "Jost, sans-serif",
                fontSize: "0.9rem",
              }}>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  color: "#1a1a1a",
                }}
              >+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize || !selectedColor}
            style={{
              width: "100%",
              padding: "1.2rem",
              background: added ? "#2d8c4e" : (!selectedSize || !selectedColor) ? "#ccc" : "#1a1a1a",
              color: "white",
              border: "none",
              fontFamily: "Jost, sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: !selectedSize || !selectedColor ? "not-allowed" : "pointer",
              transition: "background 0.3s",
              marginBottom: "1rem",
            }}
          >{added ? "✓ Added to Cart" : "Add to Cart"}</button>

          <button style={{
            width: "100%",
            padding: "1.2rem",
            background: "#b8860b",
            color: "white",
            border: "none",
            fontFamily: "Jost, sans-serif",
            fontSize: "0.85rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}>Buy Now</button>

          {/* Product Details */}
          <div style={{
            marginTop: "2rem",
            borderTop: "1px solid #eee",
            paddingTop: "1.5rem",
          }}>
            {[
              { label: "Material", value: "Premium moisture-wicking fabric" },
              { label: "Fit", value: "Regular fit" },
              { label: "Care", value: "Machine wash cold, tumble dry low" },
              { label: "SKU", value: `SLL-00${product.id}` },
            ].map((detail) => (
              <div key={detail.label} style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.75rem 0",
                borderBottom: "1px solid #f0f0f0",
                fontFamily: "Jost, sans-serif",
                fontSize: "0.85rem",
              }}>
                <span style={{ color: "#888", letterSpacing: "0.05em" }}>{detail.label}</span>
                <span style={{ color: "#1a1a1a" }}>{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
