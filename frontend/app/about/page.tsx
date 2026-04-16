import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Navbar />

      <div style={{
        background: "#1a1a1a",
        padding: "4rem 2rem",
        textAlign: "center",
        color: "white",
      }}>
        <p style={{
          fontFamily: "Jost, sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.3em",
          color: "#b8860b",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}>Our Story</p>
        <h1 style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "3.5rem",
          fontWeight: 300,
        }}>About Scrub Love LA</h1>
      </div>

      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          marginBottom: "5rem",
        }}>
          <div>
            <p style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              color: "#b8860b",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>Who We Are</p>
            <h2 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "2.5rem",
              fontWeight: 400,
              marginBottom: "1.5rem",
              lineHeight: 1.2,
            }}>Born from a Passion for Healthcare</h2>
            <p style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.95rem",
              color: "#666",
              lineHeight: 1.9,
              marginBottom: "1rem",
            }}>Scrub Love LA was founded in Louisiana with a simple mission — to create medical apparel that combines professional standards with modern style. We believe healthcare workers deserve to feel as good as they look.</p>
            <p style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.95rem",
              color: "#666",
              lineHeight: 1.9,
            }}>Every piece in our collection is carefully crafted from premium fabrics, designed to withstand the demands of long shifts while keeping you comfortable and confident.</p>
          </div>
          <div style={{
            width: "100%",
            aspectRatio: "4/5",
            background: "#e8f4f8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#aaa" }}>Brand Image</span>
          </div>
        </div>

        <div style={{ marginBottom: "5rem" }}>
          <p style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            color: "#b8860b",
            textTransform: "uppercase",
            marginBottom: "1rem",
            textAlign: "center",
          }}>What We Stand For</p>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "2.5rem",
            fontWeight: 400,
            marginBottom: "3rem",
            textAlign: "center",
          }}>Our Values</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}>
            {[
              { title: "Quality", desc: "Premium fabrics and reinforced stitching built to last through the toughest shifts.", icon: "✦" },
              { title: "Comfort", desc: "Moisture-wicking, stretch fabrics designed to move with you all day long.", icon: "✦" },
              { title: "Style", desc: "Modern cuts and elegant designs that make you feel confident on and off the floor.", icon: "✦" },
            ].map((v) => (
              <div key={v.title} style={{
                background: "white",
                padding: "2rem",
                border: "1px solid #eee",
                textAlign: "center",
              }}>
                <span style={{ display: "block", color: "#b8860b", fontSize: "1.5rem", marginBottom: "1rem" }}>{v.icon}</span>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 400, marginBottom: "1rem" }}>{v.title}</h3>
                <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.85rem", color: "#888", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "#1a1a1a", padding: "4rem", textAlign: "center", color: "white" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", fontWeight: 300, marginBottom: "1rem" }}>
            Ready to Wear With <span style={{ color: "#e8002a", fontStyle: "italic" }}>Heart?</span>
          </h2>
          <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.9rem", color: "#aaa", marginBottom: "2rem" }}>
            Explore our full collection of premium medical apparel.
          </p>
          <Link href="/shop" style={{
            display: "inline-block",
            background: "#b8860b",
            color: "white",
            padding: "1rem 3rem",
            fontFamily: "Jost, sans-serif",
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}>Shop Now</Link>
        </div>
      </section>

      <footer style={{ background: "#1a1a1a", color: "#666", padding: "2rem", textAlign: "center" }}>
        <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", color: "#e8002a", marginBottom: "0.5rem" }}>SCRUB LOVE <span style={{ color: "#b8860b" }}>LA</span></p>
        <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em" }}>© 2024 Scrub Love LA. All rights reserved.</p>
      </footer>
    </main>
  );
}
