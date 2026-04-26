"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/herovid.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure white text is readable over the video */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-accent text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-6 block">
            Since 2019
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-background font-medium leading-[1.1] mb-8"
        >
          The World Deserves
          <span className="block italic text-primary-light">True Ceylon Spice.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Since 2019, Ranasinghe spices has supplied the globe's finest chefs, 
          retailers, and manufacturers with the only cinnamon that truly deserves its name — 
          grown, hand-peeled, and exported directly from Sri Lanka.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#products"
            className="px-8 py-4 bg-accent text-primary font-medium rounded-full hover:bg-background transition-colors w-full sm:w-auto z-10 block"
          >
            Explore Our Products
          </a>
          <a
            href="#story"
            className="px-8 py-4 bg-transparent border border-background/30 text-background font-medium rounded-full hover:bg-background/10 transition-colors w-full sm:w-auto z-10 block backdrop-blur-sm"
          >
            Discover Our Heritage
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-background/60 text-xs tracking-widest uppercase mb-4" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-background/20 relative overflow-hidden"
        >
          <motion.div 
            className="w-full h-1/2 bg-accent absolute top-0"
            animate={{ 
              top: ["-50%", "100%"] 
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
