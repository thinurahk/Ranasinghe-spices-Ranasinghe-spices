// import { Mail, Phone, MapPin } from "lucide-react";

// const FacebookIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
// );
// const InstagramIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
// );
// const LinkedinIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
// );
// const TwitterIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
// );

// export function Footer() {
//   return (
//     <footer className="bg-primary pt-24 pb-12 text-background">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
//           {/* Brand Col */}
//           <div className="lg:pr-8">
//             <h2 className="font-serif text-3xl font-semibold tracking-tight mb-6">
//               CelonDaySpice<span className="text-accent">.</span>
//             </h2>
//             <p className="text-background/60 leading-relaxed mb-8">
//               Pioneering the export of pure Ceylon Cinnamon and premium spices to the world since 1969.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
//                 <FacebookIcon />
//               </a>
//               <a href="#" className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
//                 <InstagramIcon />
//               </a>
//               <a href="#" className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
//                 <LinkedinIcon />
//               </a>
//               <a href="#" className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
//                 <TwitterIcon />
//               </a>
//             </div>
//           </div>

//           {/* Links Col 1 */}
//           <div>
//             <h3 className="font-serif text-lg text-accent mb-6">Quick Links</h3>
//             <ul className="space-y-4 text-background/70">
//               <li><a href="#" className="hover:text-background transition-colors">Our Story</a></li>
//               <li><a href="#" className="hover:text-background transition-colors">Manufacturing Process</a></li>
//               <li><a href="#" className="hover:text-background transition-colors">Sustainability</a></li>
//               <li><a href="#" className="hover:text-background transition-colors">Certifications</a></li>
//               <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
//             </ul>
//           </div>

//           {/* Links Col 2 */}
//           <div>
//             <h3 className="font-serif text-lg text-accent mb-6">Products</h3>
//             <ul className="space-y-4 text-background/70">
//               <li><a href="#" className="hover:text-background transition-colors">Ceylon Cinnamon</a></li>
//               <li><a href="#" className="hover:text-background transition-colors">Whole Spices</a></li>
//               <li><a href="#" className="hover:text-background transition-colors">Essential Oils</a></li>
//               <li><a href="#" className="hover:text-background transition-colors">Organic Range</a></li>
//               <li><a href="#" className="hover:text-background transition-colors">Wholesale</a></li>
//             </ul>
//           </div>

//           {/* Contact & Inquiry */}
//           <div>
//             <h3 className="font-serif text-lg text-accent mb-6">Contact Us</h3>
//             <ul className="space-y-4 text-background/70 mb-8">
//               <li className="flex items-start">
//                 <MapPin className="w-5 h-5 mr-3 shrink-0 mt-0.5 text-accent" />
//                 <span>123 Spice Estate Road,<br />Colombo 00300, Sri Lanka</span>
//               </li>
//               <li className="flex items-center">
//                 <Phone className="w-5 h-5 mr-3 text-accent" />
//                 <span>+94 11 234 5678</span>
//               </li>
//               <li className="flex items-center">
//                 <Mail className="w-5 h-5 mr-3 text-accent" />
//                 <span>export@celondayspice.com</span>
//               </li>
//             </ul>
//             <form className="flex flex-col gap-3">
//               <input 
//                 type="email" 
//                 placeholder="Enter your email" 
//                 className="bg-background/10 border border-background/20 rounded-md px-4 py-2 text-sm text-background placeholder:text-background/50 focus:outline-none focus:border-accent"
//               />
//               <button 
//                 type="button" 
//                 className="bg-accent text-primary font-medium rounded-md px-4 py-2 text-sm hover:bg-background transition-colors"
//               >
//                 Request Inquiry
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
//           <p>© {new Date().getFullYear()} CelonDaySpice. All rights reserved.</p>
//           <div className="flex space-x-6">
//             <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
//             <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
