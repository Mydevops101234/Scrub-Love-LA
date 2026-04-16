import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import ChatBot from "@/components/ui/ChatBot";

export const metadata: Metadata = {
  title: "Scrub Love LA — Premium Medical Apparel",
  description: "Louisiana's premier medical scrubs and rompers brand. Wear with heart.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CartProvider>
          {children}
          <ChatBot />
        </CartProvider>
      </body>
    </html>
  );
}
