"use client";

import { motion } from "framer-motion";
import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from '@/components/animate-ui/components/buttons/flip';


export function WelcomeSection() {
  return (
    <section 
      id="story"
      className="py-32 md:py-48 relative overflow-hidden flex items-center min-h-[70vh] bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/backWelcome.png')" }}
    >
      {/* Professional Overlay for better readability and vibe */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-accent/60" />
              <span className="text-accent text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">
                Our Philosophy
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111827] font-medium leading-[1.2] mb-8">
              The Art of <br/>
              <span className="italic text-accent/90">Pure Ceylon</span>
            </h2>
            
            <div className="space-y-5 text-[#4b5563] text-sm md:text-base leading-relaxed font-light mb-10">
              <p>
                At <span className="font-medium text-[#111827]">Ranasinghe spices</span>, we believe excellence is found in the details. 
                Our journey begins in the hidden spice gardens of Sri Lanka, where tradition is preserved through generations of careful cultivation.
              </p>
              <p>
                We bring you more than just spices; we bring the unadulterated soul of the island. 
                Hand-selected, ethically sourced, and delivered with the same passion that defined our heritage.
              </p>
            </div>

            <div className="flex items-center gap-8">
              <FlipButton asChild>
                <a href="#heritage">
                  <FlipButtonFront 
                    variant="default" 
                    size="lg" 
                    className="px-8 py-5 bg-[#111827] text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-none border-none transition-all hover:bg-[#1f2937]"
                  >
                    Our Story
                  </FlipButtonFront>
                  <FlipButtonBack 
                    variant="accent" 
                    size="lg" 
                    className="px-8 py-5 bg-accent text-primary text-[10px] font-bold tracking-[0.2em] uppercase rounded-none border-none"
                  >
                    Explore
                  </FlipButtonBack>
                </a>
              </FlipButton>

              <a href="#process" className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#111827]/60 hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1">
                View Process
              </a>
            </div>
          </motion.div>

          {/* Minimalist Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 p-4 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <div className="overflow-hidden">
                <img 
                  src="/1.jpg" 
                  alt="Premium Ceylon Spices" 
                  loading="lazy"
                  className="w-full h-[250px] lg:h-[350px] object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
            {/* Minimalist frame background */}
            <div className="absolute -top-6 -right-6 w-1/2 h-1/2 border-t border-r border-accent/20 -z-0" />
            <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 border-b border-l border-accent/20 -z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
