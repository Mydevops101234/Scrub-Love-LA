import Navbar from "@/components/layout/Navbar";
import CartClient from "@/components/ui/CartClient";

export default function CartPage() {
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
        }}>Review Your Order</p>
        <h1 style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "3rem",
          fontWeight: 300,
        }}>Shopping Cart</h1>
      </div>
      <CartClient />
    </main>
  );
}
