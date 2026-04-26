"use client";

import { useState, useEffect, Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { StickyFooter } from "@/components/ui/sticky-footer";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import { ArrowRight, Search, SlidersHorizontal, X } from "lucide-react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");
  
  const [activeCategory, setActiveCategory] = useState(categoryQuery || "All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const openInquiry = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (categoryQuery) {
      setActiveCategory(categoryQuery);
    }
  }, [categoryQuery]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    
    <div className="bg-[#f9f9f9] min-h-screen" >
      
      {/* Hero Section */}
      <div className="relative bg-[#111827] pt-48 pb-32 px-6 overflow-hidden">
        {/* Blurred Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[3px] scale-105" 
          style={{ backgroundImage: "url('/backimg22.jpg')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl sm:text-6xl md:text-8xl font-serif font-bold tracking-tight uppercase"
          >
            Products
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-[#d4af37] mx-auto mt-8"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-20">
        {/* Filter & Search Bar */}
        <div className="bg-white shadow-xl rounded-xl border border-gray-100 p-2 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
                  activeCategory === cat.name 
                    ? "bg-[#111827] text-white" 
                    : "text-gray-500 hover:text-[#111827] hover:bg-gray-50"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80 px-2">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] transition-all"
            />
          </div>
        </div>

        {/* Results Info */}
        <div className="mt-12 mb-8 flex items-center justify-between text-gray-400 text-xs font-bold tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Showing {filteredProducts.length} Results</span>
          </div>
          <span>{activeCategory}</span>
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-32"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (idx % 8) * 0.05 }}
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:border-[#d4af37]/40 transition-all duration-500 flex flex-col"
              >
                {/* Image Area */}
                <div className="relative overflow-hidden bg-[#f8f6f1]" style={{ aspectRatio: '4/4.5' }}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-contain mix-blend-multiply p-6 group-hover:scale-108 transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.08]" 
                  />

                  {/* Tags */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {product.tags.map(tag => (
                      <span key={tag} className={`text-[9px] font-black px-2.5 py-1 tracking-[0.15em] uppercase rounded-sm ${tag === 'Best Seller' ? 'bg-[#d4af37] text-[#111827]' : 'bg-[#111827] text-white'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover Overlay with description */}
                  <div className="absolute inset-0 bg-[#111827]/90 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-center">
                    <p className="text-white/80 text-xs leading-relaxed font-light">{product.desc}</p>
                    <button 
                      onClick={() => openInquiry(product)}
                      className="mt-5 inline-flex items-center gap-2 bg-[#d4af37] text-[#111827] text-[10px] font-black tracking-[0.2em] uppercase px-5 py-2.5 rounded-full hover:bg-white transition-colors"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Gold accent line */}
                  <div className="w-6 h-[2px] bg-[#d4af37] mb-3 group-hover:w-12 transition-all duration-500" />
                  
                  <span className="text-[#d4af37] text-[9px] font-black tracking-[0.25em] uppercase block mb-1.5">
                    {product.category}
                  </span>
                  <h3 className="text-[#111827] text-base font-bold leading-snug mb-auto">
                    {product.name}
                  </h3>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-[#d4af37]' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-[10px] text-gray-400 ml-1 font-medium">{product.rating.toFixed(1)}</span>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                    <span className="text-[11px] font-bold text-[#111827] tracking-wide bg-gray-50 px-3 py-1.5 rounded-full">{product.price}</span>
                    <button className="flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase text-gray-300 group-hover:text-[#d4af37] transition-colors duration-300">
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProducts.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-gray-400 font-medium">No products found matching your criteria.</p>
            <button 
              onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
              className="mt-4 text-[#d4af37] font-bold uppercase text-xs tracking-widest hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#111827]/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl overflow-y-auto max-h-[90vh] shadow-2xl"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left Side: Product Preview */}
                <div className="w-full md:w-2/5 bg-[#f8f6f1] p-5 sm:p-8 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-gray-100">
                  <img 
                    src={selectedProduct?.image} 
                    alt={selectedProduct?.name} 
                    loading="lazy"
                    className="w-32 h-32 object-contain mix-blend-multiply mb-6"
                  />
                  <span className="text-[#d4af37] text-[9px] font-black tracking-widest uppercase mb-2">Inquiry For</span>
                  <h4 className="text-[#111827] text-sm font-bold text-center leading-tight">{selectedProduct?.name}</h4>
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-3/5 p-5 sm:p-8 relative">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-[#111827] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <h3 className="text-[#111827] text-2xl font-serif font-bold mb-1">Inquire Now</h3>
                  <p className="text-gray-500 text-xs mb-6">Send us your requirements and we'll get back to you shortly.</p>

                  <form 
                    className="space-y-4" 
                    onSubmit={(e) => { 
                      e.preventDefault(); 
                      const formData = new FormData(e.currentTarget);
                      const data = Object.fromEntries(formData);
                      const subject = `Product Inquiry: ${selectedProduct?.name} - ${data.fullName}`;
                      const body = `Inquiry Details:\n\n` +
                                   `Product: ${selectedProduct?.name}\n` +
                                   `Name: ${data.fullName}\n` +
                                   `Email: ${data.email}\n` +
                                   `Phone: ${data.phone || 'N/A'}\n\n` +
                                   `Message:\n${data.message}`;
                      
                      window.location.href = `mailto:ranasingheexporters@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      setIsModalOpen(false);
                    }}
                  >
                    <div>
                      <label className="block text-[10px] font-black tracking-widest uppercase text-gray-400 mb-1.5">Full Name</label>
                      <input 
                        name="fullName"
                        type="text" 
                        required
                        placeholder="Kevin Jayasooriya"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] transition-all"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black tracking-widest uppercase text-gray-400 mb-1.5">Email</label>
                        <input 
                          name="email"
                          type="email" 
                          required
                          placeholder="kevinjayasooriya@example.com"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black tracking-widest uppercase text-gray-400 mb-1.5">Phone (Optional)</label>
                        <input 
                          name="phone"
                          type="tel" 
                          placeholder="+94 ..."
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black tracking-widest uppercase text-gray-400 mb-1.5">Message</label>
                      <textarea 
                        name="message"
                        rows={4}
                        required
                        placeholder="I'm interested in wholesale pricing for this product..."
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] transition-all resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 bg-[#111827] text-white text-[11px] font-black tracking-[0.2em] uppercase rounded-xl hover:bg-[#d4af37] hover:text-[#111827] transition-all duration-300 transform active:scale-[0.98]"
                    >
                      Open Email Client
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ProductsPageClient() {
  return (
    <main className="relative w-full min-h-screen selection:bg-[#d4af37]/30">
      <Navbar />
      <Suspense fallback={<div className="h-screen bg-[#f9f9f9] flex items-center justify-center"><div className="w-8 h-8 border-4 border-gray-200 border-t-[#d4af37] rounded-full animate-spin" /></div>}>
        <ProductsContent />
      </Suspense>
      <StickyFooter />
    </main>
  );
}
