"use client";
import Link from "next/link";

const categories = [
  { name: "Women", color: "#f8e8f0", icon: "👩‍⚕️" },
  { name: "Men", color: "#e8f0f8", icon: "👨‍⚕️" },
  { name: "Scrub Sets", color: "#e8f4f8", icon: "🥼" },
  { name: "Rompers", color: "#f0e8f8", icon: "👗" },
  { name: "Lab Coats", color: "#f8f8f8", icon: "🧪" },
  { name: "Specialty", color: "#f0f8e8", icon: "⚕️" },
  { name: "New Arrivals", color: "#1a1a1a", icon: "✨" },
  { name: "Sale", color: "#e8002a", icon: "🏷️" },
];

export default function CategoryCircles() {
  return (
    <section style={{
      background: "white",
      padding: "3rem 2rem",
      borderBottom: "1px solid #eee",
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap",
      }}>
        {categories.map((cat) => (
          <Link key={cat.name} href="/shop" style={{ textDecoration: "none", textAlign: "center" }}>
            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                background: cat.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.5rem",
                marginBottom: "0.75rem",
                border: "3px solid transparent",
                transition: "border 0.2s, transform 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.border = "3px solid #b8860b";
                (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.border = "3px solid transparent";
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >{cat.icon}</div>
            <p style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.8rem",
              color: "#1a1a1a",
              letterSpacing: "0.05em",
            }}>{cat.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
