import { ContactPageClient } from "@/components/pages/ContactPageClient"; // Force TS refresh
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Ranasinghe Spices",
  description: "Get in touch with Ranasinghe Spices for wholesale inquiries, custom orders, or any questions about our premium Ceylon spices and essential oils.",
  openGraph: {
    title: "Contact Us | Ranasinghe Spices",
    description: "Get in touch with Ranasinghe Spices for wholesale inquiries, custom orders, or any questions about our premium Ceylon spices.",
    images: ["/logo.jpeg"],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
