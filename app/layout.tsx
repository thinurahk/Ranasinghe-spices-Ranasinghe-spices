import type { Metadata } from "next";
import { Poppins, Cinzel } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cinzel = Cinzel({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ranasinghe Spices | Premium Ceylon Spices Exporter in Sri Lanka",
    template: "%s | Ranasinghe Spices",
  },
  description: "Leading exporter of pure Ceylon spices from Sri Lanka. We supply high-quality, ethically sourced Ceylon cinnamon, whole spices, essential oils, and spice powders to the global market.",
  keywords: [
    "Ceylon Spices",
    "Sri Lanka Spices Exporter",
    "Wholesale Spices Sri Lanka",
    "Ceylon Cinnamon Exporter",
    "Ranasinghe Spices",
    "Bulk Spices Supplier",
    "Premium Spices",
    "Essential Oils Sri Lanka",
    "Organic Ceylon Spices",
    "Black Pepper Sri Lanka",
  ],
  authors: [{ name: "Ranasinghe Spices" }],
  creator: "Ranasinghe Spices",
  publisher: "Ranasinghe Spices",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ranasinghe Spices | Premium Ceylon Spices Exporter",
    description: "Leading exporter of pure Ceylon spices from Sri Lanka. High-quality, ethically sourced Ceylon cinnamon, whole spices, and essential oils.",
    url: "https://ranasinghespices.com",
    siteName: "Ranasinghe Spices",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Ranasinghe Spices Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranasinghe Spices | Premium Ceylon Spices Exporter",
    description: "Leading exporter of pure Ceylon spices from Sri Lanka. High-quality, ethically sourced Ceylon cinnamon, whole spices, and essential oils.",
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", poppins.variable, cinzel.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
