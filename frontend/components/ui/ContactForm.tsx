"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        background: "white",
        padding: "3rem",
        border: "1px solid #eee",
        textAlign: "center",
      }}>
        <span style={{ fontSize: "2rem", display: "block", marginBottom: "1rem" }}>✓</span>
        <h3 style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "2rem",
          fontWeight: 400,
          marginBottom: "1rem",
          color: "#2d8c4e",
        }}>Message Sent!</h3>
        <p style={{
          fontFamily: "Jost, sans-serif",
          fontSize: "0.9rem",
          color: "#888",
        }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <div style={{
      background: "white",
      padding: "3rem",
      border: "1px solid #eee",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1.5rem",
        marginBottom: "1.5rem",
      }}>
        {[
          { key: "name", label: "Full Name", type: "text", placeholder: "Jane Doe" },
          { key: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
        ].map((field) => (
          <div key={field.key}>
            <label style={{
              display: "block",
              fontFamily: "Jost, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#888",
              marginBottom: "0.5rem",
            }}>{field.label}</label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.key as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                border: "1px solid #ddd",
                fontFamily: "Jost, sans-serif",
                fontSize: "0.9rem",
                outline: "none",
                background: "#fafafa",
              }}
            />
          </div>
        ))}
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{
          display: "block",
          fontFamily: "Jost, sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#888",
          marginBottom: "0.5rem",
        }}>Subject</label>
        <select
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            border: "1px solid #ddd",
            fontFamily: "Jost, sans-serif",
            fontSize: "0.9rem",
            outline: "none",
            background: "#fafafa",
            cursor: "pointer",
          }}
        >
          <option value="">Select a subject</option>
          <option>Order Inquiry</option>
          <option>Product Question</option>
          <option>Returns & Exchanges</option>
          <option>Wholesale Inquiry</option>
          <option>Other</option>
        </select>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <label style={{
          display: "block",
          fontFamily: "Jost, sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#888",
          marginBottom: "0.5rem",
        }}>Message</label>
        <textarea
          placeholder="How can we help you?"
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            border: "1px solid #ddd",
            fontFamily: "Jost, sans-serif",
            fontSize: "0.9rem",
            outline: "none",
            background: "#fafafa",
            resize: "vertical",
          }}
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "1.2rem",
          background: "#1a1a1a",
          color: "white",
          border: "none",
          fontFamily: "Jost, sans-serif",
          fontSize: "0.85rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >Send Message</button>
    </div>
  );
}
