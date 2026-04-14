import Navbar from "@/components/layout/Navbar";
import ProductDetail from "@/components/ui/ProductDetail";

const products = [
  { id: 1, name: "Classic Scrub Set", price: 49.99, category: "Scrubs", color: "#e8f4f8", description: "Our signature Classic Scrub Set is crafted from premium moisture-wicking fabric, designed to keep you comfortable through the longest shifts. Features multiple pockets, a relaxed fit, and reinforced stitching for durability.", sizes: ["XS", "S", "M", "L", "XL", "XXL"], colors: ["Navy", "Black", "Ceil Blue", "Wine", "Pewter", "Teal", "Graphite", "Hunter Green"] },
  { id: 2, name: "Fitted Scrub Top", price: 29.99, category: "Scrubs", color: "#f8f0e8", description: "A lightweight fitted scrub top with a modern cut. Made from breathable fabric with functional pockets and a flattering silhouette for all body types.", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Wine", "Pewter", "Teal", "Navy", "Black", "Royal Blue"] },
  { id: 3, name: "Scrub Jogger Pants", price: 34.99, category: "Scrubs", color: "#f0f8e8", description: "Comfortable jogger style scrub pants with an elastic waistband, drawstring, and deep pockets. Perfect for long shifts on your feet.", sizes: ["XS", "S", "M", "L", "XL", "XXL"], colors: ["Black", "Navy", "Graphite", "Hunter Green", "Charcoal", "Wine"] },
  { id: 4, name: "Medical Romper", price: 59.99, category: "Rompers", color: "#f8e8f0", description: "Our signature one-piece medical romper combines style and functionality. Features a zip front, multiple pockets, and a comfortable stretch fabric that moves with you.", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Black", "Navy", "Dusty Rose", "Burgundy", "Forest Green", "Pewter"] },
  { id: 5, name: "Classic Romper Set", price: 64.99, category: "Rompers", color: "#f0e8f8", description: "Elevated medical romper with premium fabric and refined detailing. A statement piece for the modern medical professional.", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Burgundy", "Forest Green", "Black", "Navy", "Dusty Rose", "Charcoal"] },
  { id: 6, name: "Slim Fit Scrub Top", price: 32.99, category: "Scrubs", color: "#e8f8f0", description: "A modern slim fit scrub top designed for a tailored look without sacrificing comfort. Made from stretch fabric with a professional finish.", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Royal Blue", "Hunter Green", "Charcoal", "Navy", "Black", "Teal"] },
];

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <div style={{ padding: "4rem", textAlign: "center", fontFamily: "Jost, sans-serif" }}>Product not found</div>;
  return (
    <main style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Navbar />
      <ProductDetail product={product} />
    </main>
  );
}
