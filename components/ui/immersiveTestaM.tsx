"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "We switched to CelonDaySpice for our Alba-grade cinnamon three years ago. The consistency between shipments is remarkable — something we never had with our previous supplier.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Thomas Reinhardt",
    role: "Head of Procurement, Meridian Foods GmbH",
  },
  {
    text: "The documentation package CelonDaySpice provides with every shipment — COA, phytosanitary, organic certificates — makes customs clearance seamless. It's a level of professionalism rare in this industry.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Lisa Tanaka",
    role: "Import Manager, NatureBridge Japan",
  },
  {
    text: "Their cinnamon essential oil is the cleanest we've tested. GC-MS results consistently show 70%+ eugenol with zero adulteration. Our formulators will not use anything else.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Dr. Ahmed Al-Rashid",
    role: "R&D Director, Areva Cosmetics UAE",
  },
  {
    text: "We placed our first wholesale order skeptically. The sensory difference between CelonDaySpice's C5 quills and what we were buying before was immediately apparent to our entire team.",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
    name: "Caroline Dubois",
    role: "Founder, Épice Authentique (France)",
  },
  {
    text: "Reliable, traceable, and genuinely premium. We have been sourcing from CelonDaySpice for five years and have not had a single quality rejection at customs.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Marcus Webb",
    role: "Supply Chain Director, Botanica UK",
  },
  {
    text: "What sets them apart is the personal communication. We get updates before we ask, and our account manager actually knows cinnamon grades — not just logistics jargon.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Priya Nair",
    role: "Category Manager, SilkRoute Trading Co.",
  },
  {
    text: "We source black pepper and cloves alongside the cinnamon. Every product is consistently on grade, on weight, and on time. That's what a global business needs.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Johan Andersen",
    role: "COO, Nordic Spice Alliance",
  },
  {
    text: "Private label was seamless. They handled everything from packaging design consultation to regulatory labelling for our target market. Excellent partners.",
    image: "https://randomuser.me/api/portraits/women/83.jpg",
    name: "Nadia Okonkwo",
    role: "Brand Manager, Afra Organics Nigeria",
  },
  {
    text: "The cinnamon bark oil from CelonDaySpice has become the highest-rated ingredient in our blends. Customers notice the quality difference before we even tell them what changed.",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    name: "Carlos Mendes",
    role: "CEO, TerraAroma Brazil",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            Trusted by Buyers Worldwide
          </h2>
          <p className="text-center mt-5 opacity-75">
            From European specialty retailers to global cosmetic formulators — here's what our partners say.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;