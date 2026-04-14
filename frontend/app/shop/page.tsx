import Navbar from "@/components/layout/Navbar";
import ShopClient from "@/components/ui/ShopClient";

export default function ShopPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Navbar />
      <div style={{
        background: "#1a1a1a",
        padding: "2rem",
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
        }}>Browse Our Collection</p>
        <h1 style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "3rem",
          fontWeight: 300,
        }}>All Products</h1>
      </div>
      <ShopClient />
    </main>
  );
}
