"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { StickyFooter } from "@/components/ui/sticky-footer";
import { X, MapPin, Mail, Phone, Clock } from "lucide-react";

export function ContactPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative w-full min-h-screen selection:bg-[#d4af37]/30 bg-[#f9f9f9]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-[#111827] pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Blurred Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[3px] scale-105" 
          style={{ backgroundImage: "url('/contactusbackground.jpg')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-3xl sm:text-5xl md:text-7xl font-serif font-bold tracking-tight uppercase"
          >
            Get In Touch
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-[#d4af37] mx-auto mt-8 mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 max-w-2xl mx-auto text-sm sm:text-lg font-light px-2"
          >
            Whether you're looking for wholesale pricing, custom blends, or simply have a question about our Ceylon spices, our team is ready to help.
          </motion.p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif text-[#111827] font-bold mb-4">Contact Information</h2>
              <p className="text-gray-500 font-light leading-relaxed">
                Reach out to us directly using the details below, or use our quick inquiry form to send a specific request. We strive to respond to all inquiries within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-[#111827] font-bold tracking-widest uppercase text-xs mb-2">Our Headquarters</h4>
                  <p className="text-gray-600 font-light">No 297 Ranawasa Unella Palatuwa<br/>Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-[#111827] font-bold tracking-widest uppercase text-xs mb-2">Call Us</h4>
                  <p className="text-gray-600 font-light">+94 76 111 3985</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-[#111827] font-bold tracking-widest uppercase text-xs mb-2">Email Us</h4>
                  <p className="text-gray-600 font-light">ranasingheexporters@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-[#111827] font-bold tracking-widest uppercase text-xs mb-2">Business Hours</h4>
                  <p className="text-gray-600 font-light">Monday - Friday: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 text-center flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px]">
            <div className="w-20 h-20 bg-[#fdfaf6] rounded-full flex items-center justify-center mb-6 border border-[#d4af37]/20">
              <Mail className="w-8 h-8 text-[#d4af37]" />
            </div>
            <h3 className="text-2xl font-serif text-[#111827] font-bold mb-4">Request a Custom Quote</h3>
            <p className="text-gray-500 font-light mb-8 max-w-sm">
              Looking for bulk orders, private labeling, or specific spice grades? Send us your requirements using our fast inquiry form.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#111827] text-white px-8 py-4 rounded-full text-xs font-black tracking-[0.2em] uppercase hover:bg-[#d4af37] hover:text-[#111827] transition-all duration-300 shadow-lg shadow-[#111827]/10 transform active:scale-95"
            >
              Open Inquiry Form
            </button>
          </div>

        </div>
      </div>

      <StickyFooter />

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
              className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl overflow-y-auto max-h-[90vh] shadow-2xl"
            >
              <div className="p-5 sm:p-8 relative">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-[#111827] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <h3 className="text-[#111827] text-3xl font-serif font-bold mb-2">Inquire Now</h3>
                <p className="text-gray-500 text-sm mb-8">Send us your requirements and we'll get back to you shortly.</p>

                <form 
                  className="space-y-5" 
                  onSubmit={(e) => { 
                    e.preventDefault(); 
                    const formData = new FormData(e.currentTarget);
                    const data = Object.fromEntries(formData);
                    const subject = `General Inquiry - ${data.fullName}`;
                    const body = `Inquiry Details:\n\n` +
                                 `Name: ${data.fullName}\n` +
                                 `Email: ${data.email}\n` +
                                 `Phone: ${data.phone || 'N/A'}\n` +
                                 `Company: ${data.company || 'N/A'}\n\n` +
                                 `Message:\n${data.message}`;
                    
                    window.location.href = `mailto:ranasingheexporters@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    setIsModalOpen(false);
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-black tracking-widest uppercase text-gray-400 mb-2">Full Name *</label>
                      <input 
                        name="fullName"
                        type="text" 
                        required
                        placeholder="Kevin Jayasooriya"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black tracking-widest uppercase text-gray-400 mb-2">Company Name</label>
                      <input 
                        name="company"
                        type="text" 
                        placeholder="Spice Co. Ltd"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-black tracking-widest uppercase text-gray-400 mb-2">Email Address *</label>
                      <input 
                        name="email"
                        type="email" 
                        required
                        placeholder="kevinjayasooriya@example.com"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black tracking-widest uppercase text-gray-400 mb-2">Phone Number</label>
                      <input 
                        name="phone"
                        type="tel" 
                        placeholder="+94 7X XXX XXXX"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase text-gray-400 mb-2">Message *</label>
                    <textarea 
                      name="message"
                      rows={5}
                      required
                      placeholder="Please describe your requirements, desired quantities, or any questions..."
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 focus:border-[#d4af37] transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 bg-[#111827] text-white text-[12px] font-black tracking-[0.2em] uppercase rounded-xl hover:bg-[#d4af37] hover:text-[#111827] transition-all duration-300 transform active:scale-[0.98] shadow-lg"
                  >
                    Send to Email Client
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
