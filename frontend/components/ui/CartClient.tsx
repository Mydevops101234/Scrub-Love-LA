"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartClient() {
  const { items, removeItem, updateQty, subtotal } = useCart();
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [checkout, setCheckout] = useState(false);

  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal >= 75 ? 0 : 8.99;
  const total = subtotal - discount + shipping;

  const applyPromo = () => {
    if (promo.toUpperCase() === "SCRUBLOVE") setPromoApplied(true);
  };

  if (checkout) {
    return <GuestCheckout total={total} />;
  }

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "3rem 2rem" }}>
      {items.length === 0 ? (
        <div style={{ textAlign: "center", padding: "5rem 0" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", marginBottom: "1.5rem" }}>Your cart is empty</p>
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "3rem", alignItems: "start" }}>
          <div>
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

            {items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} style={{
                display: "grid",
                gridTemplateColumns: "1fr auto auto auto",
                gap: "1rem",
                padding: "1.5rem 0",
                borderBottom: "1px solid #eee",
                alignItems: "center",
              }}>
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
                    <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", marginBottom: "0.25rem" }}>{item.name}</p>
                    <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.8rem", color: "#888", marginBottom: "0.25rem" }}>Color: {item.color}</p>
                    <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.8rem", color: "#888", marginBottom: "0.75rem" }}>Size: {item.size}</p>
                    <button onClick={() => removeItem(item.id, item.size, item.color)} style={{
                      fontFamily: "Jost, sans-serif",
                      fontSize: "0.75rem",
                      color: "#e8002a",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: 0,
                    }}>Remove</button>
                  </div>
                </div>
                <span style={{ fontFamily: "Jost, sans-serif", fontSize: "0.95rem", color: "#b8860b", fontWeight: 500 }}>${item.price.toFixed(2)}</span>
                <div style={{ display: "flex", alignItems: "center", border: "1px solid #ddd", background: "white" }}>
                  <button onClick={() => updateQty(item.id, item.size, item.color, item.quantity - 1)} style={{ width: "2rem", height: "2rem", border: "none", background: "none", cursor: "pointer", fontSize: "1rem" }}>−</button>
                  <span style={{ width: "2rem", textAlign: "center", fontFamily: "Jost, sans-serif", fontSize: "0.85rem" }}>{item.quantity}</span>
                  <button onClick={() => updateQty(item.id, item.size, item.color, item.quantity + 1)} style={{ width: "2rem", height: "2rem", border: "none", background: "none", cursor: "pointer", fontSize: "1rem" }}>+</button>
                </div>
                <span style={{ fontFamily: "Jost, sans-serif", fontSize: "0.95rem", fontWeight: 500 }}>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}

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

          <div style={{ background: "white", padding: "2rem", border: "1px solid #eee" }}>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 400, marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid #eee" }}>Order Summary</h2>

            <div style={{ marginBottom: "1.5rem" }}>
              <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem", color: "#888" }}>Promo Code</p>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="text"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                  placeholder="Enter code"
                  style={{ flex: 1, padding: "0.6rem 1rem", border: "1px solid #ddd", fontFamily: "Jost, sans-serif", fontSize: "0.85rem", outline: "none" }}
                />
                <button onClick={applyPromo} style={{
                  padding: "0.6rem 1rem",
                  background: "#1a1a1a",
                  color: "white",
                  border: "none",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}>Apply</button>
              </div>
              {promoApplied && <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.8rem", color: "#2d8c4e", marginTop: "0.5rem" }}>✓ 10% discount applied!</p>}
            </div>

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

            {shipping > 0 && (
              <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.78rem", color: "#888", marginBottom: "1.5rem", textAlign: "center" }}>
                Add ${(75 - subtotal).toFixed(2)} more for free shipping
              </p>
            )}

            <button
              onClick={() => setCheckout(true)}
              style={{
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

            <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
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

function GuestCheckout({ total }: { total: number }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    email: "", firstName: "", lastName: "",
    address: "", city: "", state: "", zip: "",
  });
  const [createAccount, setCreateAccount] = useState(false);
  const [password, setPassword] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { clearCart } = useCart();

  const handleOrder = () => {
    clearCart();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div style={{ maxWidth: "600px", margin: "5rem auto", textAlign: "center", padding: "0 2rem" }}>
        <div style={{ background: "white", padding: "4rem", border: "1px solid #eee" }}>
          <span style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }}>✓</span>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", fontWeight: 400, marginBottom: "1rem", color: "#2d8c4e" }}>Order Confirmed!</h2>
          <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.9rem", color: "#888", marginBottom: "0.5rem" }}>Thank you, {form.firstName}!</p>
          <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.9rem", color: "#888", marginBottom: "2rem" }}>A confirmation has been sent to {form.email}</p>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", color: "#b8860b", marginBottom: "2rem" }}>Order Total: ${total.toFixed(2)}</p>
          {createAccount && (
            <div style={{ background: "#f5f5f5", padding: "1.5rem", marginBottom: "2rem", textAlign: "left" }}>
              <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.8rem", color: "#2d8c4e", marginBottom: "0.5rem" }}>✓ Account created successfully!</p>
              <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.8rem", color: "#888" }}>You can now track your orders and save your details for faster checkout.</p>
            </div>
          )}
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
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem" }}>
      {/* Steps indicator */}
      <div style={{ display: "flex", gap: "0", marginBottom: "3rem", borderBottom: "1px solid #eee", paddingBottom: "1.5rem" }}>
        {["Contact", "Shipping", "Payment"].map((s, i) => (
          <div key={s} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginRight: "2rem" }}>
            <span style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: step > i + 1 ? "#2d8c4e" : step === i + 1 ? "#1a1a1a" : "#ddd",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Jost, sans-serif",
              fontSize: "0.75rem",
            }}>{step > i + 1 ? "✓" : i + 1}</span>
            <span style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: step === i + 1 ? "#1a1a1a" : "#888",
            }}>{s}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "3rem" }}>
        <div style={{ background: "white", padding: "2rem", border: "1px solid #eee" }}>

          {/* Step 1 — Contact */}
          {step === 1 && (
            <div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 400, marginBottom: "0.5rem" }}>Contact Information</h2>
              <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.85rem", color: "#888", marginBottom: "2rem" }}>
                Already have an account? <Link href="#" style={{ color: "#b8860b", textDecoration: "none" }}>Sign in</Link> or continue as guest below.
              </p>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", fontFamily: "Jost, sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", marginBottom: "0.5rem" }}>Email Address *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid #ddd", fontFamily: "Jost, sans-serif", fontSize: "0.9rem", outline: "none" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                {[
                  { key: "firstName", label: "First Name", placeholder: "Jane" },
                  { key: "lastName", label: "Last Name", placeholder: "Doe" },
                ].map((f) => (
                  <div key={f.key}>
                    <label style={{ display: "block", fontFamily: "Jost, sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", marginBottom: "0.5rem" }}>{f.label} *</label>
                    <input
                      type="text"
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.placeholder}
                      style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid #ddd", fontFamily: "Jost, sans-serif", fontSize: "0.9rem", outline: "none" }}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!form.email || !form.firstName || !form.lastName}
                style={{
                  width: "100%",
                  padding: "1.2rem",
                  background: !form.email || !form.firstName || !form.lastName ? "#ccc" : "#1a1a1a",
                  color: "white",
                  border: "none",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  cursor: !form.email || !form.firstName || !form.lastName ? "not-allowed" : "pointer",
                }}>Continue to Shipping →</button>
            </div>
          )}

          {/* Step 2 — Shipping */}
          {step === 2 && (
            <div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 400, marginBottom: "2rem" }}>Shipping Address</h2>

              {[
                { key: "address", label: "Street Address", placeholder: "123 Main St", full: true },
                { key: "city", label: "City", placeholder: "Baton Rouge", full: false },
                { key: "state", label: "State", placeholder: "Louisiana", full: false },
                { key: "zip", label: "ZIP Code", placeholder: "70801", full: false },
              ].map((f) => (
                <div key={f.key} style={{ marginBottom: "1.5rem", gridColumn: f.full ? "1 / -1" : "auto" }}>
                  <label style={{ display: "block", fontFamily: "Jost, sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", marginBottom: "0.5rem" }}>{f.label} *</label>
                  <input
                    type="text"
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    placeholder={f.placeholder}
                    style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid #ddd", fontFamily: "Jost, sans-serif", fontSize: "0.9rem", outline: "none" }}
                  />
                </div>
              ))}

              <div style={{ display: "flex", gap: "1rem" }}>
                <button onClick={() => setStep(1)} style={{
                  flex: 1,
                  padding: "1.2rem",
                  background: "white",
                  color: "#1a1a1a",
                  border: "1px solid #ddd",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}>← Back</button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!form.address || !form.city || !form.state || !form.zip}
                  style={{
                    flex: 2,
                    padding: "1.2rem",
                    background: !form.address || !form.city || !form.state || !form.zip ? "#ccc" : "#1a1a1a",
                    color: "white",
                    border: "none",
                    fontFamily: "Jost, sans-serif",
                    fontSize: "0.85rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    cursor: !form.address || !form.city || !form.state || !form.zip ? "not-allowed" : "pointer",
                  }}>Continue to Payment →</button>
              </div>
            </div>
          )}

          {/* Step 3 — Payment */}
          {step === 3 && (
            <div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 400, marginBottom: "2rem" }}>Payment</h2>

              {/* Payment methods */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem", marginBottom: "2rem" }}>
                {["💳 Card", " Apple Pay", "🅶 Google Pay"].map((m) => (
                  <button key={m} style={{
                    padding: "0.75rem",
                    border: m === "💳 Card" ? "2px solid #1a1a1a" : "1px solid #ddd",
                    background: m === "💳 Card" ? "#1a1a1a" : "white",
                    color: m === "💳 Card" ? "white" : "#1a1a1a",
                    fontFamily: "Jost, sans-serif",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                  }}>{m}</button>
                ))}
              </div>

              {/* Card fields */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", fontFamily: "Jost, sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", marginBottom: "0.5rem" }}>Card Number</label>
                <input
                  type="text"
                  placeholder="•••• •••• •••• ••••"
                  style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid #ddd", fontFamily: "Jost, sans-serif", fontSize: "0.9rem", outline: "none" }}
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                <div>
                  <label style={{ display: "block", fontFamily: "Jost, sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", marginBottom: "0.5rem" }}>Expiry Date</label>
                  <input type="text" placeholder="MM / YY" style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid #ddd", fontFamily: "Jost, sans-serif", fontSize: "0.9rem", outline: "none" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: "Jost, sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", marginBottom: "0.5rem" }}>CVV</label>
                  <input type="text" placeholder="•••" style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid #ddd", fontFamily: "Jost, sans-serif", fontSize: "0.9rem", outline: "none" }} />
                </div>
              </div>

              {/* Create account option */}
              <div style={{
                background: "#faf8f5",
                padding: "1.5rem",
                border: "1px solid #e8e0d0",
                marginBottom: "2rem",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: createAccount ? "1rem" : "0" }}>
                  <input
                    type="checkbox"
                    id="createAccount"
                    checked={createAccount}
                    onChange={(e) => setCreateAccount(e.target.checked)}
                    style={{ width: "16px", height: "16px", cursor: "pointer" }}
                  />
                  <label htmlFor="createAccount" style={{
                    fontFamily: "Jost, sans-serif",
                    fontSize: "0.85rem",
                    color: "#1a1a1a",
                    cursor: "pointer",
                  }}>Save my details for faster checkout next time</label>
                </div>
                {createAccount && (
                  <div>
                    <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.78rem", color: "#888", marginBottom: "0.75rem" }}>
                      Create a password to save your order history and details.
                    </p>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid #ddd", fontFamily: "Jost, sans-serif", fontSize: "0.9rem", outline: "none" }}
                    />
                  </div>
                )}
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <button onClick={() => setStep(2)} style={{
                  flex: 1,
                  padding: "1.2rem",
                  background: "white",
                  color: "#1a1a1a",
                  border: "1px solid #ddd",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}>← Back</button>
                <button onClick={handleOrder} style={{
                  flex: 2,
                  padding: "1.2rem",
                  background: "#b8860b",
                  color: "white",
                  border: "none",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}>Place Order — ${total.toFixed(2)}</button>
              </div>
            </div>
          )}
        </div>

        {/* Order summary sidebar */}
        <div style={{ background: "white", padding: "1.5rem", border: "1px solid #eee", alignSelf: "start" }}>
          <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", fontWeight: 400, marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid #eee" }}>Order Summary</h3>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", fontFamily: "Jost, sans-serif", fontSize: "0.85rem" }}>
            <span style={{ color: "#888" }}>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", fontFamily: "Jost, sans-serif", fontSize: "0.85rem", borderBottom: "1px solid #eee" }}>
            <span style={{ color: "#888" }}>Shipping</span>
            <span style={{ color: "#2d8c4e" }}>FREE</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem 0", fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", fontWeight: 600 }}>
            <span>Total</span>
            <span style={{ color: "#b8860b" }}>${total.toFixed(2)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
            {["Visa", "Mastercard", "Apple Pay", "Google Pay", "Cash App"].map((p) => (
              <span key={p} style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "0.6rem",
                color: "#888",
                border: "1px solid #ddd",
                padding: "0.2rem 0.4rem",
              }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
