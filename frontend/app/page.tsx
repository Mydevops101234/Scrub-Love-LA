import Navbar from "@/components/layout/Navbar";
import HeroSlider from "@/components/ui/HeroSlider";
import CategoryCircles from "@/components/ui/CategoryCircles";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";

const featured = [
  { id: 1, name: "Classic Scrub Set", price: 49.99, category: "Scrubs", color: "#e8f4f8" },
  { id: 2, name: "Fitted Scrub Top", price: 29.99, category: "Scrubs", color: "#f8f0e8" },
  { id: 3, name: "Scrub Jogger Pants", price: 34.99, category: "Scrubs", color: "#f0f8e8" },
  { id: 4, name: "Medical Romper", price: 59.99, category: "Rompers", color: "#f8e8f0" },
];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Navbar />

      {/* Announcement Bar */}
      <div style={{
        background: "#b8860b",
        color: "white",
        textAlign: "center",
        padding: "0.5rem",
        fontFamily: "Jost, sans-serif",
        fontSize: "0.8rem",
        letterSpacing: "0.15em",
      }}>
        FREE SHIPPING ON ORDERS OVER $75 — USE CODE: SCRUBLOVE
      </div>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Category Circles */}
      <CategoryCircles />

      {/* Featured Products */}
      <section style={{ padding: "4rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
          borderBottom: "2px solid #1a1a1a",
          paddingBottom: "1rem",
        }}>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "2rem",
            fontWeight: 600,
          }}>Featured Products</h2>
          <Link href="/shop" style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            color: "#b8860b",
            textDecoration: "none",
            textTransform: "uppercase",
          }}>View All →</Link>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}>
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promo Banners */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        padding: "0 2rem 4rem",
        maxWidth: "1400px",
        margin: "0 auto",
      }}>
        <div style={{
          background: "#1a1a1a",
          padding: "3rem",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}>
          <p style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            color: "#b8860b",
            marginBottom: "1rem",
            textTransform: "uppercase",
          }}>New Arrivals</p>
          <h3 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "2.5rem",
            fontWeight: 300,
            marginBottom: "1.5rem",
            lineHeight: 1.2,
          }}>Premium<br />Scrub Sets</h3>
          <Link href="/shop" style={{
            display: "inline-block",
            background: "#b8860b",
            color: "white",
            padding: "0.75rem 2rem",
            fontFamily: "Jost, sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}>Shop Now</Link>
        </div>

        <div style={{
          background: "#e8002a",
          padding: "3rem",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}>
          <p style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1rem",
            textTransform: "uppercase",
          }}>Limited Time</p>
          <h3 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "2.5rem",
            fontWeight: 300,
            marginBottom: "1.5rem",
            lineHeight: 1.2,
          }}>Medical<br />Rompers</h3>
          <Link href="/shop" style={{
            display: "inline-block",
            background: "white",
            color: "#e8002a",
            padding: "0.75rem 2rem",
            fontFamily: "Jost, sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}>Shop Now</Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#1a1a1a", color: "white", padding: "4rem 2rem 2rem" }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem",
          marginBottom: "3rem",
        }}>
          <div>
            <p style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1.4rem",
              color: "#e8002a",
              marginBottom: "1rem",
            }}>SCRUB LOVE <span style={{ color: "#b8860b" }}>LA</span></p>
            <p style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.85rem",
              color: "#888",
              lineHeight: 1.8,
            }}>Louisiana's premier medical apparel brand. Wear with heart.</p>
          </div>
          {[
            { title: "Shop", links: ["Scrubs", "Rompers", "New Arrivals", "Sale"] },
            { title: "Help", links: ["Size Guide", "Shipping", "Returns", "Contact"] },
            { title: "Company", links: ["About Us", "Careers", "Press", "Sustainability"] },
          ].map((col) => (
            <div key={col.title}>
              <p style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                color: "#b8860b",
              }}>{col.title}</p>
              {col.links.map((link) => (
                <p key={link} style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.85rem",
                  color: "#888",
                  marginBottom: "0.75rem",
                  cursor: "pointer",
                }}>{link}</p>
              ))}
            </div>
          ))}
        </div>
        <div style={{
          borderTop: "1px solid #333",
          paddingTop: "2rem",
          textAlign: "center",
          fontFamily: "Jost, sans-serif",
          fontSize: "0.75rem",
          color: "#555",
          letterSpacing: "0.1em",
        }}>
          © 2024 Scrub Love LA. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
