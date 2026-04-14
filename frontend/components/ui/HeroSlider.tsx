"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    headline: "New Season Scrubs",
    subheadline: "Premium comfort for medical professionals",
    cta: "Shop Scrubs",
    bg: "#1a1a1a",
    accent: "#b8860b",
    tag: "NEW ARRIVALS",
  },
  {
    id: 2,
    headline: "Medical Rompers",
    subheadline: "Style meets function in every stitch",
    cta: "Shop Rompers",
    bg: "#0d1f2d",
    accent: "#e8002a",
    tag: "BEST SELLERS",
  },
  {
    id: 3,
    headline: "Wear With Heart",
    subheadline: "Louisiana's premier medical apparel brand",
    cta: "Shop All",
    bg: "#1c0a0a",
    accent: "#b8860b",
    tag: "SCRUB LOVE LA",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  const slide = slides[current];

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "580px",
      background: slide.bg,
      overflow: "hidden",
      transition: "background 0.6s ease",
    }}>
      {/* Background pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(circle at 70% 50%, ${slide.accent}22 0%, transparent 60%)`,
        transition: "all 0.6s ease",
      }}/>

      {/* EKG line decoration */}
      <svg style={{
        position: "absolute",
        bottom: "3rem",
        left: 0,
        width: "100%",
        opacity: 0.06,
      }} viewBox="0 0 1400 80" preserveAspectRatio="none">
        <polyline
          points="0,40 300,40 330,40 350,15 370,65 390,5 410,75 430,40 700,40 730,40 750,15 770,65 790,5 810,75 830,40 1100,40 1130,40 1150,15 1170,65 1190,5 1210,75 1230,40 1400,40"
          fill="none" stroke="white" strokeWidth="2"
        />
      </svg>

      {/* Content */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        padding: "0 6rem",
        opacity: animating ? 0 : 1,
        transform: animating ? "translateY(10px)" : "translateY(0)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}>
        <div style={{ maxWidth: "600px" }}>
          <span style={{
            display: "inline-block",
            background: slide.accent,
            color: "white",
            padding: "0.3rem 1rem",
            fontFamily: "Jost, sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            marginBottom: "1.5rem",
          }}>{slide.tag}</span>

          <h1 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            fontWeight: 300,
            color: "white",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}>{slide.headline}</h1>

          <p style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "1rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.6)",
            marginBottom: "2.5rem",
            letterSpacing: "0.05em",
          }}>{slide.subheadline}</p>

          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/shop" style={{
              display: "inline-block",
              background: slide.accent,
              color: "white",
              padding: "1rem 2.5rem",
              fontFamily: "Jost, sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}>{slide.cta}</Link>
            <Link href="/shop" style={{
              display: "inline-block",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              padding: "1rem 2.5rem",
              fontFamily: "Jost, sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}>View All</Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "0.5rem",
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? "2rem" : "0.5rem",
              height: "0.5rem",
              background: i === current ? slide.accent : "rgba(255,255,255,0.3)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              borderRadius: "2px",
            }}
          />
        ))}
      </div>

      {/* Arrow controls */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        style={{
          position: "absolute",
          left: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "white",
          width: "3rem",
          height: "3rem",
          cursor: "pointer",
          fontSize: "1.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >‹</button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        style={{
          position: "absolute",
          right: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "white",
          width: "3rem",
          height: "3rem",
          cursor: "pointer",
          fontSize: "1.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >›</button>
    </div>
  );
}
