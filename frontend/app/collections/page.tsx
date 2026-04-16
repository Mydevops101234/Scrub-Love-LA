import Navbar from "@/components/layout/Navbar";
import CollectionsClient from "@/components/ui/CollectionsClient";

export default function CollectionsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Navbar />
      <div style={{
        background: "#1a1a1a",
        padding: "4rem 2rem",
        textAlign: "center",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 30% 50%, rgba(184,134,11,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(232,0,42,0.1) 0%, transparent 50%)",
        }}/>
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            color: "#b8860b",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}>Curated For You</p>
          <h1 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "3.5rem",
            fontWeight: 300,
            marginBottom: "1rem",
          }}>Our Collections</h1>
          <p style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "0.9rem",
            color: "#aaa",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}>Explore our carefully curated collections designed for medical professionals who demand both style and function.</p>
        </div>
      </div>
      <CollectionsClient />
    </main>
  );
}
