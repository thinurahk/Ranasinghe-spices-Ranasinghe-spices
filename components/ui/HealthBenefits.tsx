"use client";

import { motion } from "framer-motion";
import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from '@/components/animate-ui/components/buttons/flip';


const BENEFITS = [
  {
    title: "ANTIOXIDANT PROPERTIES",
    desc: "Cinnamon is packed with antioxidants, which help protect the body from damage caused by harmful free radicals.",
  },
  {
    title: "ANTI-INFLAMMATORY EFFECTS",
    desc: "Cinnamon has anti-inflammatory properties that may help reduce the risk of chronic diseases such as heart disease and arthritis.",
  },
  {
    title: "REGULATES BLOOD SUGAR",
    desc: "Cinnamon has been shown to help regulate blood sugar levels, making it a useful spice for people with diabetes or prediabetes.",
  },
];

export function HealthBenefits() {
  return (
    <section className="relative w-full bg-white">
      {/* ── Top Header Bar ── */}
      <div className="w-full bg-[#fdfaf6] pt-20 pb-28 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[1px] bg-accent/60" />
              <span className="text-accent text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">
                Health Benefits
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#111827] font-medium tracking-tight uppercase">
              Spices
            </h2>
          </motion.div>
        </div>
      </div>

      {/* ── Main Content Area ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative -mt-16 md:-mt-20 pb-20 md:pb-28">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* Left: Text & Benefits */}
          <div className="flex-1 lg:max-w-lg relative z-10 pt-8 lg:pt-20 space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#4b5563] text-sm md:text-base leading-relaxed font-light"
            >
              Cinnamon is a spice that has been used for thousands of years for both its delicious flavor and its health-promoting properties. Here are some of the most well-known health benefits of true Ceylon cinnamon:
            </motion.p>

            <div className="space-y-6">
              {BENEFITS.map((benefit, index) => (
                <motion.div 
                  key={benefit.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="pl-4 border-l-2 border-accent/20"
                >
                  <h3 className="font-serif text-sm md:text-[0.95rem] font-semibold text-[#111827] uppercase tracking-[0.15em] mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="text-[#4b5563] text-sm leading-relaxed font-light">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <FlipButton asChild>
                <a href="#process">
                  <FlipButtonFront 
                    variant="default" 
                    size="lg" 
                    className="px-8 py-5 bg-[#111827] text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-none border-none transition-all hover:bg-[#1f2937]"
                  >
                    Learn More
                  </FlipButtonFront>
                  <FlipButtonBack 
                    variant="accent" 
                    size="lg" 
                    className="px-8 py-5 bg-accent text-primary text-[10px] font-bold tracking-[0.2em] uppercase rounded-none border-none"
                  >
                    See Benefits
                  </FlipButtonBack>
                </a>
              </FlipButton>
            </div>

          </div>

          {/* Right: Image overlapping the header */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative z-20 flex items-start justify-center lg:justify-end lg:-mt-6"
          >
            <div className="relative w-full lg:w-[120%] max-w-2xl lg:-right-8">
              <img 
                src="/cinnamonimg.jpg" 
                alt="Premium Ceylon Cinnamon Sticks" 
                loading="lazy"
                className="w-full h-auto drop-shadow-2xl mix-blend-multiply"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
