"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const ColorChangeCards = () => {
  return (
    <div className="py-24 px-6 md:px-12 bg-[#f9f9f9]">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#111827] font-bold tracking-tight mb-4">
            Our Commitment
          </h2>
          <div className="h-1 bg-[#d4af37] w-16 mx-auto mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            We hold ourselves to the highest standards at every step of the journey, ensuring that what reaches your kitchen is nothing short of perfection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <Card
            heading="Source"
            description="Directly from family-owned Ceylon estates, ensuring the highest grade harvests."
            imgSrc="colorchangecards1.jpg"
          />
          <Card
            heading="Harvest"
            description="Hand-picked at the peak of flavor to ensure maximum essential oil content."
            imgSrc="colorchangecard2.webp"
          />
          <Card
            heading="Purity"
            description="Rigorous testing to guarantee zero additives, artificial colors, or preservatives."
            imgSrc="colorchangecard3.webp"
          />
          <Card
            heading="Trace"
            description="Scan your batch to see the exact estate and harvest date of your spices."
            imgSrc="colorchangecard4.webp"
          />
        </div>
      </div>
    </div>
  );
};

// --- Card Component ---
interface CardProps {
  heading: string;
  description: string;
  imgSrc: string;
}

const Card = ({ heading, description, imgSrc }: CardProps) => {
  return (
    <motion.div
      transition={{ staggerChildren: 0.04 }}
      whileHover="hover"
      className="group relative h-[420px] w-full cursor-pointer overflow-hidden rounded-3xl bg-[#111827] shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Background Image */}
      <img
        src={imgSrc}
        alt={heading}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-80 md:opacity-60 md:saturate-0 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-100 md:group-hover:saturate-100"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      
      <div className="relative z-20 flex h-full flex-col justify-between p-8">
        {/* Top Icon */}
        <div className="ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-500 group-hover:bg-[#d4af37] group-hover:border-[#d4af37] group-hover:text-[#111827]">
          <FiArrowUpRight className="text-2xl transition-transform duration-500 group-hover:rotate-45" />
        </div>
        
        {/* Bottom Content */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h4 className="mb-3 font-serif text-3xl font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">
            {heading.split("").map((letter, index) => (
              <AnimatedLetter letter={letter} key={index} />
            ))}
          </h4>
          <p className="text-white/70 font-light leading-relaxed text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// --- AnimatedLetter Helper Component ---
interface AnimatedLetterProps {
  letter: string;
}

const letterVariants: Variants = {
  hover: {
    y: "-50%",
  },
};

const AnimatedLetter = ({ letter }: AnimatedLetterProps) => {
  return (
    <div className="inline-block h-[36px] overflow-hidden">
      <motion.span
        className="flex min-w-[4px] flex-col"
        style={{ y: "0%" }}
        variants={letterVariants}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span>{letter === " " ? "\u00A0" : letter}</span>
        <span>{letter === " " ? "\u00A0" : letter}</span>
      </motion.span>
    </div>
  );
};

export default ColorChangeCards;
