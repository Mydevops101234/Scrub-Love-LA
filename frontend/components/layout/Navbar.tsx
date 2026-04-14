"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "white",
      borderBottom: "1px solid #e8e0d0",
      padding: "0 2rem",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "72px",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1.6rem",
              fontWeight: 600,
              color: "#e8002a",
              letterSpacing: "0.05em",
            }}>SCRUB LOVE</span>
            <span style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1rem",
              fontWeight: 400,
              color: "#b8860b",
              letterSpacing: "0.2em",
              alignSelf: "flex-end",
              marginBottom: "4px",
            }}>LA</span>
          </div>
        </Link>

        {/* Nav Links */}
        <div style={{
          display: "flex",
          gap: "2.5rem",
          alignItems: "center",
        }} className="nav-links">
          {["Shop", "Collections", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Shop" ? "/shop" : `/${item.toLowerCase()}`}
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "0.85rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                color: "#1a1a1a",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
            >{item}</Link>
          ))}
        </div>

        {/* Cart Icon */}
        <Link href="/cart" style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          textDecoration: "none",
          color: "#1a1a1a",
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <span style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}>CART</span>
        </Link>
      </div>
    </nav>
  );
}
