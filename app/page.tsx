import { Metadata } from "next";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { WelcomeSection } from "@/components/ui/WelcomeSection";
import { HealthBenefits } from "@/components/ui/HealthBenefits";
import { ProductCatalog } from "@/components/ui/ProductCatalog";
import { ManufacturingProcess } from "@/components/ui/ManufacturingProcess";
import { HeritageSection } from "@/components/ui/HeritageSection";
import { Certifications } from "@/components/ui/Certifications";

import BwCard from "@/components/ui/bwCard";
import { Component as FaqSection } from "@/components/ui/FaqSec";
import Testimonials from "@/components/ui/immersiveTestaM";
import { StickyFooter } from "@/components/ui/sticky-footer";

export const metadata: Metadata = {
  title: "Ranasinghe Spices | Premium Ceylon Spices Exporter in Sri Lanka",
  description: "Leading exporter of pure Ceylon spices from Sri Lanka. We supply high-quality, ethically sourced Ceylon cinnamon, whole spices, essential oils, and spice powders to the global market.",
};

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden selection:bg-accent/30 selection:text-primary min-h-screen">
      <Navbar />
      <Hero />
      <WelcomeSection />
      <HealthBenefits />
      <ProductCatalog />
      <BwCard />
      <ManufacturingProcess />
      <HeritageSection />
      <FaqSection />
      <Testimonials />
      <StickyFooter />
    </main>
  );
}
