"use client";
import { useState } from "react";
import Link from "next/link";

const initialItems = [
  { id: 1, name: "Classic Scrub Set", price: 49.99, size: "M", color: "Navy", quantity: 1, bgColor: "#e8f4f8" },
  { id: 4, name: "Medical Romper", price: 59.99, size: "S", color: "Dusty Rose", quantity: 1, bgColor: "#f8e8f0" },
];

export default function CartClient() {
  const [items, setItems] = useState(initialItems);
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQty = (id: number, qty: number) => {
    if (qty < 1) return;
    setItems(items.map((item) => item.id === id ? { ...item, quantity: qty } : item));
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal >= 75 ? 0 : 8.99;
  const total = subtotal - discount + shipping;

  const applyPromo = () => {
    if (promo.toUpperCase() === "SCRUBLOVE") {
      setPromoApplied(true);
    }
  };

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "3rem 2rem" }}>
      {items.length === 0 ? (
        <div style={{ textAlign: "center", padding: "5rem 0" }}>
          <p style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "2rem",
            marginBottom: "1.5rem",
          }}>Your cart is empty</p>
          <Link href="/shop" style={{
            display: "inline-block",
            background: "#1a1a1a",
            color: "white",
            padding: "1rem 2.5rem",
            fontFamily: "Jost, sans-serif",
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}>Continue Shopping</Link>
        </div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 380px",
          gap: "3rem",
          alignItems: "start",
        }}>
          {/* Cart Items */}
          <div>
            {/* Header */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr auto auto auto",
              gap: "1rem",
              padding: "0 0 1rem",
              borderBottom: "2px solid #1a1a1a",
              fontFamily: "Jost, sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#888",
            }}>
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>

            {/* Items */}
            {items.map((item) => (
              <div key={item.id} style={{
                display: "grid",
                gridTemplateColumns: "1fr auto auto auto",
                gap: "1rem",
                padding: "1.5rem 0",
                borderBottom: "1px solid #eee",
                alignItems: "center",
              }}>
                {/* Product info */}
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                  <div style={{
                    width: "90px",
                    height: "110px",
                    background: item.bgColor,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <span style={{ fontSize: "0.7rem", color: "#aaa", fontFamily: "Jost, sans-serif" }}>IMG</span>
                  </div>
                  <div>
                    <p style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.3rem",
                      marginBottom: "0.25rem",
                    }}>{item.name}</p>
                    <p style={{
                      fontFamily: "Jost, sans-serif",
                      fontSize: "0.8rem",
                      color: "#888",
                      marginBottom: "0.25rem",
                    }}>Color: {item.color}</p>
                    <p style={{
                      fontFamily: "Jost, sans-serif",
                      fontSize: "0.8rem",
                      color: "#888",
                      marginBottom: "0.75rem",
                    }}>Size: {item.size}</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        fontFamily: "Jost, sans-serif",
                        fontSize: "0.75rem",
                        color: "#e8002a",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: 0,
                      }}
                    >Remove</button>
                  </div>
                </div>

                {/* Price */}
                <span style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.95rem",
                  color: "#b8860b",
                  fontWeight: 500,
                }}>${item.price.toFixed(2)}</span>

                {/* Quantity */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ddd",
                  background: "white",
                }}>
                  <button
                    onClick={() => updateQty(item.id, item.quantity - 1)}
                    style={{
                      width: "2rem",
                      height: "2rem",
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                      fontSize: "1rem",
                    }}
                  >−</button>
                  <span style={{
                    width: "2rem",
                    textAlign: "center",
                    fontFamily: "Jost, sans-serif",
                    fontSize: "0.85rem",
                  }}>{item.quantity}</span>
                  <button
                    onClick={() => updateQty(item.id, item.quantity + 1)}
                    style={{
                      width: "2rem",
                      height: "2rem",
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                      fontSize: "1rem",
                    }}
                  >+</button>
                </div>

                {/* Total */}
                <span style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}

            {/* Continue Shopping */}
            <div style={{ marginTop: "2rem" }}>
              <Link href="/shop" style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#1a1a1a",
                textDecoration: "none",
                borderBottom: "1px solid #1a1a1a",
                paddingBottom: "2px",
              }}>← Continue Shopping</Link>
            </div>
          </div>

          {/* Order Summary */}
          <div style={{
            background: "white",
            padding: "2rem",
            border: "1px solid #eee",
          }}>
            <h2 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1.8rem",
              fontWeight: 400,
              marginBottom: "1.5rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #eee",
            }}>Order Summary</h2>

            {/* Promo Code */}
            <div style={{ marginBottom: "1.5rem" }}>
              <p style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                color: "#888",
              }}>Promo Code</p>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="text"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                  placeholder="Enter code"
                  style={{
                    flex: 1,
                    padding: "0.6rem 1rem",
                    border: "1px solid #ddd",
                    fontFamily: "Jost, sans-serif",
                    fontSize: "0.85rem",
                    outline: "none",
                  }}
                />
                <button
                  onClick={applyPromo}
                  style={{
                    padding: "0.6rem 1rem",
                    background: "#1a1a1a",
                    color: "white",
                    border: "none",
                    fontFamily: "Jost, sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >Apply</button>
              </div>
              {promoApplied && (
                <p style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.8rem",
                  color: "#2d8c4e",
                  marginTop: "0.5rem",
                }}>✓ 10% discount applied!</p>
              )}
            </div>

            {/* Totals */}
            {[
              { label: "Subtotal", value: `$${subtotal.toFixed(2)}` },
              ...(promoApplied ? [{ label: "Discount (10%)", value: `-$${discount.toFixed(2)}` }] : []),
              { label: "Shipping", value: shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}` },
            ].map((row) => (
              <div key={row.label} style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.75rem 0",
                borderBottom: "1px solid #f0f0f0",
                fontFamily: "Jost, sans-serif",
                fontSize: "0.9rem",
              }}>
                <span style={{ color: "#888" }}>{row.label}</span>
                <span style={{ color: row.label === "Discount (10%)" ? "#2d8c4e" : row.value === "FREE" ? "#2d8c4e" : "#1a1a1a" }}>{row.value}</span>
              </div>
            ))}

            {/* Total */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1.25rem 0",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1.5rem",
              fontWeight: 600,
              borderTop: "2px solid #1a1a1a",
              marginTop: "0.5rem",
            }}>
              <span>Total</span>
              <span style={{ color: "#b8860b" }}>${total.toFixed(2)}</span>
            </div>

            {/* Free shipping notice */}
            {shipping > 0 && (
              <p style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "0.78rem",
                color: "#888",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}>Add ${(75 - subtotal).toFixed(2)} more for free shipping</p>
            )}

            {/* Checkout Button */}
            <button style={{
              width: "100%",
              padding: "1.2rem",
              background: "#1a1a1a",
              color: "white",
              border: "none",
              fontFamily: "Jost, sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              marginBottom: "1rem",
            }}>Proceed to Checkout</button>

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
            }}>Pay with Stripe</button>

            {/* Accepted payments */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.75rem",
              marginTop: "1.5rem",
              flexWrap: "wrap",
            }}>
              {["Visa", "Mastercard", "Apple Pay", "Google Pay", "Cash App"].map((p) => (
                <span key={p} style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.05em",
                  color: "#888",
                  border: "1px solid #ddd",
                  padding: "0.2rem 0.5rem",
                }}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
