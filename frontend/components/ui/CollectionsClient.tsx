"use client";
import Link from "next/link";

const collections = [
  { id: 1, name: "Classic Scrubs", description: "Timeless designs built for comfort and durability across every shift.", items: "12 pieces", bg: "#e8f4f8", tag: "BEST SELLER" },
  { id: 2, name: "Medical Rompers", description: "One-piece styles that blend elegance with professional functionality.", items: "6 pieces", bg: "#f8e8f0", tag: "NEW ARRIVAL" },
  { id: 3, name: "Fitted Collection", description: "Modern slim-fit silhouettes for the fashion-forward medical professional.", items: "8 pieces", bg: "#f0f8e8", tag: "TRENDING" },
  { id: 4, name: "Jogger Series", description: "Relaxed jogger-style scrubs offering maximum comfort and style.", items: "5 pieces", bg: "#f8f0e8", tag: "POPULAR" },
  { id: 5, name: "Scrub Sets", description: "Perfectly matched tops and pants for a complete polished look.", items: "10 pieces", bg: "#f0e8f8", tag: "FEATURED" },
  { id: 6, name: "Sale Collection", description: "Premium pieces at discounted prices — limited time only.", items: "15 pieces", bg: "#fff0e8", tag: "SALE" },
];

export default function CollectionsClient() {
  return (
    <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "4rem 2rem" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
        gap: "2rem",
        marginBottom: "4rem",
      }}>
        {collections.map((col) => (
          <Link key={col.id} href="/shop" style={{ textDecoration: "none", color: "inherit" }}>
            <div
              style={{
                background: "white",
                border: "1px solid #eee",
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
                height: "280px",
                background: col.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}>
                <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#aaa", letterSpacing: "0.1em" }}>Collection Image</span>
                <span style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  background: col.tag === "SALE" ? "#e8002a" : "#b8860b",
                  color: "white",
                  padding: "0.25rem 0.75rem",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>{col.tag}</span>
                <span style={{
                  position: "absolute",
                  bottom: "1rem",
                  right: "1rem",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.75rem",
                  color: "#888",
                  letterSpacing: "0.1em",
                }}>{col.items}</span>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", fontWeight: 400, marginBottom: "0.75rem" }}>{col.name}</h3>
                <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.85rem", color: "#888", lineHeight: 1.7, marginBottom: "1.5rem" }}>{col.description}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{
                    fontFamily: "Jost, sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#b8860b",
                    borderBottom: "1px solid #b8860b",
                    paddingBottom: "2px",
                  }}>Shop Collection</span>
                  <span style={{ color: "#b8860b", fontSize: "1.2rem" }}>→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Banner */}
      <div style={{
        background: "#1a1a1a",
        padding: "5rem 2rem",
        textAlign: "center",
        color: "white",
      }}>
        <h2 style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 300,
          marginBottom: "1.5rem",
        }}>Can't Find What You're Looking For?</h2>
        <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.9rem", color: "#aaa", marginBottom: "2rem" }}>
          Browse our full catalog or contact us for custom orders.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/shop" style={{
            display: "inline-block",
            background: "#b8860b",
            color: "white",
            padding: "1rem 2.5rem",
            fontFamily: "Jost, sans-serif",
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}>Shop All</Link>
          <Link href="/contact" style={{
            display: "inline-block",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "white",
            padding: "1rem 2.5rem",
            fontFamily: "Jost, sans-serif",
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}>Contact Us</Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: "#1a1a1a", color: "#666", padding: "2rem", textAlign: "center", marginTop: "0" }}>
        <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", color: "#e8002a", marginBottom: "0.5rem" }}>SCRUB LOVE <span style={{ color: "#b8860b" }}>LA</span></p>
        <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em" }}>© 2024 Scrub Love LA. All rights reserved.</p>
      </footer>
    </section>
  );
}
