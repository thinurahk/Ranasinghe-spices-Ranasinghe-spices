"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

/* ── Inline social SVGs (lucide-react dropped brand icons) ── */
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16z"/><path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772"/></svg>
);

const socialLinks = [
  { title: "Facebook",  href: "#", Icon: FacebookIcon  },
  { title: "Instagram", href: "#", Icon: InstagramIcon },
  { title: "LinkedIn",  href: "#", Icon: LinkedinIcon  },
  { title: "Twitter",   href: "#", Icon: TwitterIcon   },
];

const navGroups = [
  {
    label: "Company",
    links: [
      { title: "Our Story",    href: "#" },
      { title: "Sustainability", href: "#" },
      { title: "Certifications", href: "#" },
      { title: "Careers",      href: "#" },
      { title: "Press",        href: "#" },
    ],
  },
  {
    label: "Products",
    links: [
      { title: "Ceylon Cinnamon",  href: "#" },
      { title: "Whole Spices",     href: "#" },
      { title: "Essential Oils",   href: "#" },
      { title: "Organic Range",    href: "#" },
      { title: "Wholesale",        href: "#" },
    ],
  },
  {
    label: "Export",
    links: [
      { title: "How We Ship",      href: "#" },
      { title: "Private Label",    href: "#" },
      { title: "Quality Assurance",href: "#" },
      { title: "Request a Quote",  href: "#" },
      { title: "FAQs",             href: "#" },
    ],
  },
];

type StickyFooterProps = React.ComponentProps<"footer">;

export function StickyFooter({ className, ...props }: StickyFooterProps) {
  return (

    <footer
      className={cn("w-full relative text-white overflow-hidden", className)}
      {...props}
    >
      {/* Blurred Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[3px] scale-105" 
        style={{ backgroundImage: "url('/backimg11.jpg')" }}
      />
      {/* ── Dark overlay to keep text readable without green tint ── */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* ── Footer content ── */}
      <div className="relative z-10">
        {/* ── Top band ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand column – spans 2 cols on lg */}
          <AnimatedContainer className="lg:col-span-2 flex flex-col gap-6">
            {/* Logo / wordmark */}
            <div>
              <h2 className="font-serif text-3xl font-semibold tracking-tight leading-tight">
                Ranasinghe<span className="text-amber-400"> spices</span>
                <span className="text-amber-400">.</span>
              </h2>
              <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
                Pioneering the export of pure Ceylon Cinnamon and premium spices
                from the heart of Sri Lanka.
              </p>
            </div>

            {/* Contact */}
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-amber-400" />
                No 297 Ranawasa Unella Palatuwa
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-amber-400" />
                +94761113985
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-amber-400" />
                ranasingheexporters@gmail.com
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map(({ title, href, Icon }) => (
                <a
                  key={title}
                  href={href}
                  aria-label={title}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-amber-400 hover:text-amber-400 transition-colors"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </AnimatedContainer>

          {/* Nav groups */}
          {navGroups.map((group, i) => (
            <AnimatedContainer key={group.label} delay={0.1 + i * 0.08} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                {group.label}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>
          ))}
        </div>

        {/* Newsletter strip */}
        <AnimatedContainer delay={0.35} className="mt-14 rounded-2xl bg-white/5 border border-white/10 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-base font-semibold text-white">Stay updated on new harvests & export news</p>
            <p className="text-sm text-white/50 mt-1">Join our trade newsletter — no spam, ever.</p>
          </div>
          <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-64 rounded-lg bg-white/10 border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-amber-400 transition-colors"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-amber-400 text-[#1a2b1a] text-sm font-semibold hover:bg-amber-300 transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        </AnimatedContainer>
      </div>
      </div> {/* Closes relative z-10 wrapper */}

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Ranasinghe spices. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Animated wrapper ── */
type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: React.ReactNode;
  delay?: number;
};

function AnimatedContainer({ delay = 0.1, children, ...props }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
