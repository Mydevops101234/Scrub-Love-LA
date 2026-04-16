"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const shopMenu = {
  Women: ["Scrub Sets", "Scrub Tops", "Scrub Pants", "Rompers", "Lab Coats"],
  Men: ["Scrub Sets", "Scrub Tops", "Scrub Pants", "Lab Coats"],
  Specialty: ["Surgical Scrubs", "Dental Scrubs", "Pediatric Scrubs", "ICU Scrubs"],
  Featured: ["New Arrivals", "Best Sellers", "Sale", "Collections"],
};

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z"/>
  </svg>
);

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const { totalItems } = useCart();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShopOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShopOpen(false), 150);
  };

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100 }}>

      {/* Top Announcement Bar */}
      {announcementVisible && (
        <div style={{
          background: "#1a1a1a",
          color: "white",
          padding: "0.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Social Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "#888",
              textTransform: "uppercase",
            }}>Follow Us</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
              color: "#1877F2",
              display: "flex",
              alignItems: "center",
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            ><FacebookIcon /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            ><TikTokIcon /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
              color: "#E1306C",
              display: "flex",
              alignItems: "center",
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            ><InstagramIcon /></a>
          </div>

          {/* Center message */}
          <p style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "#b8860b",
            textTransform: "uppercase",
            textAlign: "center",
          }}>🚚 Free shipping on orders over $75 — Use code <strong>SCRUBLOVE</strong> for 10% off</p>

          {/* Close button */}
          <button
            onClick={() => setAnnouncementVisible(false)}
            style={{
              background: "none",
              border: "none",
              color: "#888",
              cursor: "pointer",
              fontSize: "1rem",
              lineHeight: 1,
              padding: "0",
            }}
          >✕</button>
        </div>
      )}

      {/* Main Navbar */}
      <nav style={{
        background: "white",
        borderBottom: "1px solid #e8e0d0",
        padding: "0 2rem",
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#1a1a1a",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
              }}>Scrub</span>
              <span style={{
                fontFamily: "Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                lineHeight: 1,
              }}>
                <span style={{ color: "#e8002a" }}>LOVE</span>
                <span style={{ color: "#b8860b" }}>LA</span>
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
            {/* Shop dropdown */}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ position: "relative" }}
            >
              <button style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "0.85rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                color: shopOpen ? "#e8002a" : "#1a1a1a",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                padding: "0",
              }}>
                Shop
                <span style={{
                  fontSize: "0.6rem",
                  transition: "transform 0.2s",
                  transform: shopOpen ? "rotate(180deg)" : "rotate(0deg)",
                  display: "inline-block",
                }}>▼</span>
              </button>

              {shopOpen && (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    position: "fixed",
                    top: announcementVisible ? "108px" : "72px",
                    left: 0,
                    right: 0,
                    background: "white",
                    borderTop: "2px solid #e8002a",
                    borderBottom: "1px solid #eee",
                    padding: "2.5rem 4rem",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                    zIndex: 99,
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr) 220px",
                    gap: "3rem",
                  }}
                >
                  {Object.entries(shopMenu).map(([section, items]) => (
                    <div key={section}>
                      <p style={{
                        fontFamily: "Jost, sans-serif",
                        fontSize: "0.7rem",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "#b8860b",
                        marginBottom: "1.25rem",
                        fontWeight: 500,
                        borderBottom: "1px solid #f0f0f0",
                        paddingBottom: "0.75rem",
                      }}>{section}</p>
                      {items.map((item) => (
                        <Link
                          key={item}
                          href="/shop"
                          onClick={() => setShopOpen(false)}
                          style={{
                            display: "block",
                            fontFamily: "Jost, sans-serif",
                            fontSize: "0.85rem",
                            color: "#1a1a1a",
                            textDecoration: "none",
                            marginBottom: "0.75rem",
                            letterSpacing: "0.05em",
                            transition: "color 0.2s, paddingLeft 0.2s",
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.color = "#e8002a";
                            (e.currentTarget as HTMLElement).style.paddingLeft = "6px";
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.color = "#1a1a1a";
                            (e.currentTarget as HTMLElement).style.paddingLeft = "0px";
                          }}
                        >{item}</Link>
                      ))}
                    </div>
                  ))}

                  {/* Promo box */}
                  <div style={{
                    background: "#1a1a1a",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}>
                    <div>
                      <p style={{
                        fontFamily: "Jost, sans-serif",
                        fontSize: "0.7rem",
                        letterSpacing: "0.2em",
                        color: "#b8860b",
                        textTransform: "uppercase",
                        marginBottom: "0.5rem",
                      }}>Limited Offer</p>
                      <p style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1.4rem",
                        color: "white",
                        fontWeight: 300,
                        marginBottom: "1rem",
                        lineHeight: 1.3,
                      }}>Free shipping over $75</p>
                      <p style={{
                        fontFamily: "Jost, sans-serif",
                        fontSize: "0.75rem",
                        color: "#888",
                        marginBottom: "1.5rem",
                      }}>Use code: SCRUBLOVE for 10% off</p>
                    </div>
                    <Link href="/shop" onClick={() => setShopOpen(false)} style={{
                      display: "inline-block",
                      background: "#b8860b",
                      color: "white",
                      padding: "0.6rem 1.2rem",
                      fontFamily: "Jost, sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      textAlign: "center",
                    }}>Shop Now</Link>
                  </div>
                </div>
              )}
            </div>

            {["Collections", "About", "Contact"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "0.85rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                color: "#1a1a1a",
                textDecoration: "none",
                textTransform: "uppercase",
              }}>{item}</Link>
            ))}
          </div>

          {/* Cart */}
          <Link href="/cart" style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            textDecoration: "none",
            color: "#1a1a1a",
            position: "relative",
          }}>
            <div style={{ position: "relative" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {totalItems > 0 && (
                <span style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  background: "#e8002a",
                  color: "white",
                  borderRadius: "50%",
                  width: "18px",
                  height: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                }}>{totalItems}</span>
              )}
            </div>
            <span style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}>CART</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
