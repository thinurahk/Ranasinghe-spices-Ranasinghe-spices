import { Metadata } from "next";
import { ProductsPageClient } from "@/components/pages/ProductsPageClient";

export const metadata: Metadata = {
  title: "Our Spices Catalog",
  description: "Browse our premium collection of authentic Ceylon spices including Cinnamon, Whole Spices, and Essential Oils. Pure quality from Sri Lanka to your kitchen.",
  keywords: ["Ceylon Cinnamon", "Sri Lankan Spices", "Buy Spices Wholesale", "Premium Cinnamon Quills"],
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
