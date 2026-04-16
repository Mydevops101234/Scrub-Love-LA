"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestions = [
  "What sizes do you carry?",
  "How long does shipping take?",
  "What is your return policy?",
  "Do you offer bulk orders?",
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! Welcome to Scrub Love LA 👋 I'm here to help you with anything — sizing, shipping, products, or orders. What can I help you with today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = async (text?: string) => {
    const userMessage = text || input.trim();
    if (!userMessage) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `You are a friendly and helpful customer support assistant for Scrub Love LA, a Louisiana-based premium medical scrubs and apparel brand. 

Your job is to help customers with:
- Product information (scrubs, rompers, lab coats, specialty uniforms)
- Sizing guidance (we carry XS to XXL)
- Shipping information (free shipping over $75, standard 5-7 business days, express 2-3 days)
- Return policy (30-day returns, items must be unworn and unwashed)
- Payment methods (Visa, Mastercard, Apple Pay, Google Pay, Cash App via Stripe and Square)
- Order inquiries
- Bulk/wholesale orders (contact hello@scrublovela.com)
- General brand questions

Keep responses concise, warm and professional. Always end with a helpful follow-up question or offer further assistance. If you don't know something specific, direct them to hello@scrublovela.com.`,
          messages: messages
            .concat({ role: "user", content: userMessage })
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const reply = data.content?.[0]?.text || "I'm sorry, I couldn't process that. Please try again or email us at hello@scrublovela.com";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please email us at hello@scrublovela.com for assistance." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat bubble button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#1a1a1a",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          zIndex: 999,
          transition: "transform 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
        )}
        {/* Notification dot */}
        {!open && (
          <span style={{
            position: "absolute",
            top: "4px",
            right: "4px",
            width: "12px",
            height: "12px",
            background: "#e8002a",
            borderRadius: "50%",
            border: "2px solid white",
          }}/>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div style={{
          position: "fixed",
          bottom: "6rem",
          right: "2rem",
          width: "380px",
          height: "520px",
          background: "white",
          border: "1px solid #eee",
          boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          zIndex: 998,
          borderRadius: "4px",
          overflow: "hidden",
        }}>
          {/* Header */}
          <div style={{
            background: "#1a1a1a",
            padding: "1.25rem 1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "#b8860b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1rem",
              color: "white",
              fontWeight: 600,
              flexShrink: 0,
            }}>SL</div>
            <div>
              <p style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "white",
                letterSpacing: "0.05em",
              }}>Scrub Love LA</p>
              <p style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "0.7rem",
                color: "#b8860b",
                letterSpacing: "0.05em",
              }}>● Online — typically replies instantly</p>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: "auto",
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            background: "#faf8f5",
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              }}>
                <div style={{
                  maxWidth: "80%",
                  padding: "0.75rem 1rem",
                  background: msg.role === "user" ? "#1a1a1a" : "white",
                  color: msg.role === "user" ? "white" : "#1a1a1a",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  border: msg.role === "assistant" ? "1px solid #eee" : "none",
                  borderRadius: msg.role === "user" ? "12px 12px 0 12px" : "12px 12px 12px 0",
                }}>{msg.content}</div>
              </div>
            ))}

            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{
                  padding: "0.75rem 1rem",
                  background: "white",
                  border: "1px solid #eee",
                  borderRadius: "12px 12px 12px 0",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.85rem",
                  color: "#888",
                }}>Typing...</div>
              </div>
            )}

            {/* Suggestion chips — show only at start */}
            {messages.length === 1 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    style={{
                      padding: "0.4rem 0.85rem",
                      background: "white",
                      border: "1px solid #b8860b",
                      color: "#b8860b",
                      fontFamily: "Jost, sans-serif",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      borderRadius: "20px",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = "#b8860b";
                      (e.currentTarget as HTMLElement).style.color = "white";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = "white";
                      (e.currentTarget as HTMLElement).style.color = "#b8860b";
                    }}
                  >{s}</button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: "1rem",
            borderTop: "1px solid #eee",
            display: "flex",
            gap: "0.75rem",
            background: "white",
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: "0.6rem 1rem",
                border: "1px solid #ddd",
                fontFamily: "Jost, sans-serif",
                fontSize: "0.85rem",
                outline: "none",
                borderRadius: "2px",
              }}
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || loading}
              style={{
                padding: "0.6rem 1.2rem",
                background: !input.trim() || loading ? "#ccc" : "#1a1a1a",
                color: "white",
                border: "none",
                fontFamily: "Jost, sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: !input.trim() || loading ? "not-allowed" : "pointer",
                borderRadius: "2px",
              }}
            >Send</button>
          </div>
        </div>
      )}
    </>
  );
}
