"use client";

import { motion } from "framer-motion";
import { RadialIntroDemo } from "./SpiningCircle";

const STEPS = [
  {
    number: "01",
    title: "Hand Picked",
    desc: "We select only the best spices from trusted local farms.",
  },
  {
    number: "02",
    title: "Carefully Peeled",
    desc: "Skilled hands peel and roll each quill to preserve natural oils.",
  },
  {
    number: "03",
    title: "Cleaned & Treated",
    desc: "Gently cleaned using eco-friendly methods for safe, pure spices.",
  },
  {
    number: "04",
    title: "Moisture Tested",
    desc: "Checked for the right moisture level to keep spices fresh longer.",
  },
  {
    number: "05",
    title: "Graded & Sorted",
    desc: "Every batch is sorted by size and quality before it leaves.",
  },
  {
    number: "06",
    title: "Sealed & Packed",
    desc: "Vacuum-sealed to lock in freshness until it reaches you.",
  },
  {
    number: "07",
    title: "Ready to Export",
    desc: "A final quality check before shipping to customers worldwide.",
  },
];

export function ManufacturingProcess() {
  return (
    <section
      id="process"
      className="py-24 relative overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/backimg2.png")' }}
    >
      {/* Low-opacity overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">

          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-[#a07c42] font-semibold tracking-widest uppercase text-xs mb-3 block">
                Quality Comes First
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#111827] font-medium tracking-tight mb-5">
                How We Make<br />Our Spices
              </h2>
              <p className="text-foreground/60 leading-relaxed text-sm max-w-md">
                From farm to export, every step is handled with care. 
                Here's how we ensure each spice meets our standard.
              </p>
            </motion.div>

            {/* Clean numbered list */}
            {/* <div className="flex flex-col divide-y divide-foreground/10">
              {STEPS.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="flex items-start gap-6 py-5 group"
                >
                  <span className="text-[#a07c42] font-mono text-xs font-semibold mt-[3px] shrink-0 w-6">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-[#111827] font-medium text-base mb-1 group-hover:text-[#a07c42] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-foreground/50 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div> */}
            
{/* Premium Timeline List */}
            <div className="relative border-l border-[#d4af37]/20 pl-8 ml-3 space-y-10">
{STEPS.map((step, index) => (
                <motion.div
                  key={step.number}
 initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Node */}
                  <span className="absolute -left-[39px] top-1 w-5 h-5 bg-[#fdfaf6] border-2 border-[#d4af37] rounded-full flex items-center justify-center group-hover:bg-[#d4af37] transition-colors duration-300" />
                  
                  <div className="flex items-baseline gap-4 mb-1.5">
                    <span className="text-[#d4af37] font-bold text-[10px] tracking-[0.2em]">
                      {step.number}
                    </span>
                    <h3 className="text-[#111827] font-serif font-medium text-lg lg:text-xl group-hover:text-[#d4af37] transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>



        

          {/* Right Column: Spinning Circle */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:mt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <RadialIntroDemo className="scale-75 md:scale-90 lg:scale-100 origin-center" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}