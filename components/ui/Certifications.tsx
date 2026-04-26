"use client";

import { motion } from "framer-motion";

const BADGES = [
  { name: "USDA Organic", cert: "US-ORG-01" },
  { name: "ISO 22000", cert: "Food Safety" },
  { name: "Fair Trade", cert: "Certified" },
  { name: "BRCGS", cert: "Grade AA" },
  { name: "EU Organic", cert: "LK-BIO-149" }
];

export function Certifications() {
  return (
    <section className="py-24 bg-foreground/5 border-y border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">Certified for Excellence</h2>
          <p className="text-foreground/60">Meeting the highest global standards for food safety and organic farming.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {BADGES.map((badge, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={badge.name}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center shadow-sm border border-foreground/5 mb-4 group-hover:border-accent transition-colors group-hover:shadow-md">
                <span className="font-serif font-bold text-primary opacity-50 group-hover:opacity-100 transition-opacity">
                  {badge.name.split(' ')[0]}
                </span>
              </div>
              <span className="font-medium text-foreground">{badge.name}</span>
              <span className="text-xs text-foreground/50">{badge.cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
