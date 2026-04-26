"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Our Story", href: "/#story" },
  { 
    name: "Products", 
    href: "/products",
    hasMegaMenu: true 
  },
  { name: "Journey", href: "/#heritage" },
  { name: "Contact", href: "/contact" },
  
];

const MEGAMENU_CATEGORIES = [
  { name: "Ceylon Cinnamon", items: ["Cinnamon Quills", "Cinnamon Powder", "Cinnamon Chips"] },
  { name: "Whole Spices", items: ["Black Pepper", "Cloves", "Cardamom", "Nutmeg"] },
  { name: "Essential Oils", items: ["Cinnamon Bark Oil", "Cinnamon Leaf Oil", "Clove Oil"] },
  { name: "Organic Range", items: ["Organic Turmeric", "Organic Ginger", "Organic Lemongrass"] }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          isScrolled 
            ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-foreground/5 py-4" 
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group z-50 flex items-center gap-3">
            <img src="/logoblur.png" alt="Ranasinghe spices" loading="lazy" className="w-10 h-10 rounded-full object-cover" />
            <h1 className={cn(
              "font-serif text-2xl font-semibold tracking-tight transition-colors duration-300",
              isScrolled ? "text-primary" : "text-background"
            )}>
              Ranasinghe spices
              <span className="text-accent">.</span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && setActiveMegaMenu(link.name)}
                onMouseLeave={() => link.hasMegaMenu && setActiveMegaMenu(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wide flex items-center transition-colors duration-300 hover:text-accent",
                    isScrolled ? "text-foreground/80" : "text-background/90"
                  )}
                >
                  {link.name}
                  {link.hasMegaMenu && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>

                {/* Mega Menu Dropdown */}
                {link.hasMegaMenu && (
                  <AnimatePresence>
                    {activeMegaMenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px]"
                      >
                        <div className="bg-background shadow-2xl rounded-xl border border-foreground/5 p-8 grid grid-cols-2 gap-8">
                          {MEGAMENU_CATEGORIES.map(category => (
                            <div key={category.name}>
                              <h3 className="font-serif text-primary font-medium text-lg mb-4">{category.name}</h3>
                              <ul className="space-y-2">
                                {category.items.map(item => (
                                  <li key={item}>
                                    <Link href={`/products?category=${encodeURIComponent(category.name)}`} className="text-sm text-foreground/70 hover:text-accent transition-colors">
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-6 z-50">
            {/* <button className={cn("transition-colors hover:text-accent", isScrolled ? "text-foreground" : "text-background")}>
              <Search className="w-5 h-5" />
            </button> */}
            {/* <div className="h-4 w-px bg-current opacity-20"></div>
            <button className={cn("flex items-center text-sm font-medium transition-colors hover:text-accent", isScrolled ? "text-foreground" : "text-background")}>
              <Globe className="w-4 h-4 mr-2" /> EN
            </button> */}
            <Link 
              href="/contact" 
              className="bg-primary text-background px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 relative p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-background")} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background flex flex-col pt-24 px-6"
          >
            <nav className="flex flex-col space-y-6 text-2xl font-serif">
              {NAV_LINKS.map(link => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="border-b border-foreground/10 pb-4 text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-12 flex flex-col space-y-4">
              <button className="flex items-center justify-center p-4 border border-foreground/20 rounded-xl text-lg font-medium">
                <Globe className="w-5 h-5 mr-2" /> English (US)
              </button>
              <Link 
                href="/contact" 
                className="bg-primary text-background p-4 rounded-xl text-center text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
