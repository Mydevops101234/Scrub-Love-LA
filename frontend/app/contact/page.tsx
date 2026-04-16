import Navbar from "@/components/layout/Navbar";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
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
        }}>Get In Touch</p>
        <h1 style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "3.5rem",
          fontWeight: 300,
        }}>Contact Us</h1>
      </div>

      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "5rem 2rem",
        display: "grid",
        gridTemplateColumns: "1fr 1.5fr",
        gap: "5rem",
        alignItems: "start",
      }}>
        <div>
          <p style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            color: "#b8860b",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>Contact Information</p>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "2.2rem",
            fontWeight: 400,
            marginBottom: "2rem",
            lineHeight: 1.2,
          }}>We'd Love to Hear From You</h2>

          {[
            { label: "Email", value: "hello@scrublovela.com" },
            { label: "Phone", value: "+1 (504) 000-0000" },
            { label: "Location", value: "Louisiana, USA" },
            { label: "Hours", value: "Mon–Fri, 9am–5pm CST" },
          ].map((info) => (
            <div key={info.label} style={{
              marginBottom: "1.5rem",
              paddingBottom: "1.5rem",
              borderBottom: "1px solid #eee",
            }}>
              <p style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#b8860b",
                marginBottom: "0.25rem",
              }}>{info.label}</p>
              <p style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "0.95rem",
                color: "#1a1a1a",
              }}>{info.value}</p>
            </div>
          ))}

          <div style={{ marginTop: "2rem" }}>
            <p style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#b8860b",
              marginBottom: "1rem",
            }}>Follow Us</p>
            <div style={{ display: "flex", gap: "1rem" }}>
              {["Instagram", "Facebook", "TikTok"].map((s) => (
                <span key={s} style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.8rem",
                  color: "#1a1a1a",
                  border: "1px solid #ddd",
                  padding: "0.4rem 1rem",
                  cursor: "pointer",
                  letterSpacing: "0.05em",
                }}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        <ContactForm />
      </section>

      <footer style={{ background: "#1a1a1a", color: "#666", padding: "2rem", textAlign: "center" }}>
        <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", color: "#e8002a", marginBottom: "0.5rem" }}>SCRUB LOVE <span style={{ color: "#b8860b" }}>LA</span></p>
        <p style={{ fontFamily: "Jost, sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em" }}>© 2024 Scrub Love LA. All rights reserved.</p>
      </footer>
    </main>
  );
}
