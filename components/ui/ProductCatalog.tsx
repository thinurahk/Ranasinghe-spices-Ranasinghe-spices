"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight, LayoutGrid, Sparkles, Leaf, Droplet, Sprout } from "lucide-react";

import Link from "next/link";
import { CATEGORIES, CATEGORY_CARDS, PRODUCTS } from "@/lib/data";

export function ProductCatalog() {
  const [activeCategory] = useState("All");

  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Our Catalog</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary font-medium tracking-tight">
              Not Just Spices —<br />An Assurance of Origin.
            </h2>
          </div>
          <p className="text-foreground/70 max-w-sm mt-6 md:mt-0">
            Every product ships with full traceability documentation. From the estate it was grown on, to the container it arrives in.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          {CATEGORIES.map(category => (
            <Link
              key={category.name}
              href={category.name === "All" ? "#products" : `/products?category=${encodeURIComponent(category.name)}`}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                activeCategory === category.name 
                  ? "bg-primary text-background shadow-md border border-primary text-[15px]" 
                  : "bg-white text-foreground border border-foreground/10 hover:border-primary/30 hover:shadow-sm"
              }`}
            >
              <category.icon 
                className={`w-4 h-4 mr-2 ${activeCategory === category.name ? 'text-accent stroke-current drop-shadow-sm' : 'text-accent stroke-[2.5px]'}`} 
              />
              {category.name}
            </Link>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key="categories"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10"
          >
            {CATEGORY_CARDS.map((card, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={card.name}
                className="group flex flex-col sm:flex-row bg-[#faf9f6] rounded-3xl p-6 md:p-10 border border-foreground/5 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[280px]"
              >
                <div className="flex-1 flex flex-col justify-center pr-0 sm:pr-8 mb-8 sm:mb-0 z-10">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#111827] mb-4 group-hover:text-[#a07c42] transition-colors duration-300 uppercase tracking-wide">
                    {card.name}
                  </h3>
                  <p className="text-foreground/60 text-sm md:text-[15px] leading-relaxed mb-8 max-w-[280px]">
                    {card.desc}
                  </p>
                  <Link href={`/products?category=${encodeURIComponent(card.name)}`} className="mt-auto self-start bg-[#111827] text-white hover:bg-[#a07c42] px-6 py-3 rounded-full text-xs font-bold tracking-[0.15em] transition-colors shadow-md flex items-center gap-3 group/btn">
                    VIEW PRODUCTS
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="w-full sm:w-[45%] h-[200px] sm:h-full relative rounded-2xl overflow-hidden shrink-0 shadow-inner group-hover:shadow-2xl transition-shadow duration-500">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={card.image} 
                    alt={card.name} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
