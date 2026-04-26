"use client";

import { motion } from "framer-motion";

export function HeritageSection() {
  return (
    <section id="heritage" className="py-32 bg-[#fdfaf0] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden relative">
              <img 
                src="/heritageimge.jpg" 
                alt="Heritage Spices" 
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 md:-right-12 bg-accent text-primary p-8 rounded-full border-8 border-background shadow-2xl flex flex-col items-center justify-center w-40 h-40"
            >
              <span className="text-4xl font-serif font-bold leading-none">5+</span>
              <span className="text-sm font-medium uppercase tracking-widest text-center mt-1">Years of<br/>Legacy</span>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:pl-12"
          >
            <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary font-medium tracking-tight mb-8">
              Years of Perfecting<br />the Art of Cinnamon.
            </h2>
            
            <div className="space-y-6 text-foreground/70 leading-relaxed text-lg">
              <p>
                In 2019, our founders made a single promise: to never let the rush of commerce compromise the 
                soul of a spice. That promise has held through our growth. Today, Ranasinghe spices stands as one 
                of Sri Lanka's most trusted names in premium spice export — not by growing fastest, but by 
                refusing to cut corners.
              </p>
              <p>
                True Ceylon Cinnamon (<em>Cinnamomum verum</em>) is native only to Sri Lanka. It is softer, 
                sweeter, and lower in coumarin than the Cassia sold by most of the world under the cinnamon 
                name. We grow, hand-peeled, and export only the real thing — traceable from estate to export 
                container, certified to the highest international standards.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-10">
              {[
                { stat: "5+", label: "Years of Export" },
                { stat: "20+", label: "Countries Served" },
                { stat: "100+", label: "Farming Families" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <p className="text-3xl font-serif font-bold text-primary">{stat}</p>
                  <p className="text-sm text-foreground/60 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
