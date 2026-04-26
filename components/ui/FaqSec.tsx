"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const items = [
  {
    id: "1",
    title: "What makes Ranasinghe Spices cinnamon different from regular cinnamon?",
    content:
      "Ranasinghe Spices sources only true Ceylon Cinnamon (Cinnamomum verum) — the 'true cinnamon' native to Sri Lanka. Unlike the more common Cassia variety, Ceylon Cinnamon has a delicate, sweet flavour, lower coumarin content, and a softer, multi-layered quill. Our estate-grown cinnamon is harvested by skilled craftsmen following traditional methods passed down over generations.",
  },
  {
    id: "2",
    title: "Do you offer bulk and wholesale orders?",
    content:
      "Yes. We cater to food manufacturers, specialty retailers, and hospitality businesses worldwide. Wholesale pricing tiers are available based on order volume. Please use our Contact page or email ranasingheexporters@gmail.com to discuss your requirements and receive a custom quotation.",
  },
  {
    id: "3",
    title: "How do you guarantee the quality and authenticity of your spices?",
    content:
      "At Ranasinghe Spices, we maintain a direct relationship with our farmers and estates. Every batch undergoes rigorous quality checks for aroma, flavor, and purity. We provide full traceability from the field to your doorstep, ensuring you receive 100% authentic Ceylon spices without any fillers or additives.",
  },
  {
    id: "4",
    title: "How do you ensure freshness during international shipping?",
    content:
      "We use vacuum-sealed, food-grade packaging designed to preserve aroma and shelf life. All orders are processed in our climate-controlled facility and shipped via globally trusted logistics partners with tracking.",
  },
  {
    id: "5",
    title: "Can I request custom blends or private-label packaging?",
    content:
      "Absolutely. We offer custom spice blending and private-label packaging services for brands looking to create their own premium product line. Minimum order quantities apply. Reach out to our export team to discuss formulation, packaging design, and lead times.",
  },
  {
    id: "6",
    title: "Which countries do you currently export to?",
    content:
      "We currently export to over 20+ countries across Europe, North America, the Middle East, Australia, and Asia. Our logistics network is continuously expanding. If you are based in a region not listed, please contact us — we are happy to explore options.",
  },
];

function Component() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-14"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">FAQ</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            Common Questions
          </h2>
          <p className="text-center mt-5 opacity-75">
            Everything you need to know about sourcing premium Ceylon spices from Ranasinghe Spices.
          </p>
        </motion.div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full" defaultValue="1">
          {items.map((item) => (
            <AccordionItem value={item.id} key={item.id} className="py-1 border-b border-border">
              <AccordionTrigger className="py-5 text-base font-medium text-left leading-snug hover:no-underline hover:text-amber-700 transition-colors">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          Still have questions?{" "}
          <a
            href="mailto:ranasingheexporters@gmail.com"
            className="text-amber-700 font-medium hover:underline underline-offset-4"
          >
            Contact our export team →
          </a>
        </div>
      </div>
    </section>
  );
}

export { Component };
