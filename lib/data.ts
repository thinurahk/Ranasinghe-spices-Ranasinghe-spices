import { LayoutGrid, Sparkles, Leaf, Droplet, Sprout } from "lucide-react";

export const CATEGORIES = [
  { name: "All", icon: LayoutGrid },
  { name: "Cinnamon", icon: Sparkles },
  { name: "Whole Spices", icon: Leaf },
  { name: "Essential Oils", icon: Droplet },
  { name: "Spices Powder", icon: Sprout }
];

export const CATEGORY_CARDS = [
  {
    name: "Cinnamon",
    desc: "Warm, sweet and slightly pungent, our cinnamon adds depth and complexity to any dish.",
    image: "/products/cinnamon-sticks-isolated-white.jpg",
  },
  {
    name: "Whole Spices",
    desc: "Bring bold flavor to your kitchen with our premium quality whole spices.",
    image: "/products/black-peppers.jpg",
  },
  {
    name: "Essential Oils",
    desc: "Harness the power of nature with our therapeutic-grade essential oils.",
    image: "/products/Cinnamon Bark Oil.jpg",
  },
  {
    name: "Spices Powder",
    desc: "Get that perfect mix of spices every time with our fine, freshly ground spice powders.",
    image: "/products/Pure Cinnamon Powder.png",
  }
];

export const PRODUCTS = [
  // Cinnamon Grades
  {
    id: 1,
    name: "Alba Ceylon Cinnamon",
    category: "Cinnamon",
    price: "Premium Grade",
    image: "/products/cinnamon-alba1.png",
    rating: 5.0,
    tags: ["Best Seller", "Rare"],
    desc: "The pinnacle of true Cinnamon. Our Alba grade is the thinnest and most delicate variation (6-10mm), offering the highest concentration of aromatic oils. We also provide a full range of variations including C5, C4 Special, C4, M5, M4, H2 Special, H3, and Quiling cuts.",
    color: "#fdf8f4" // Soft warm background for cards
  },
  {
    id: 2,
    name: "C5 Ceylon Cinnamon",
    category: "Cinnamon",
    price: "Export Grade",
    image: "/products/C5 Ceylon Cinnamon.jpg",
    rating: 4.9,
    tags: ["Top Quality"],
    desc: "Premium quality quills with a refined texture and sweet, citrusy aroma. Highly sought after for gourmet cooking.",
    color: "#fdf8f4"
  },
  {
    id: 3,
    name: "C4 Special Cinnamon",
    category: "Cinnamon",
    price: "Selected Grade",
    image: "/products/C4 Special Cinnamon.jpg",
    rating: 4.8,
    tags: [],
    desc: "Hand-selected quills known for their consistent thickness and deep, aromatic flavor profile.",
    color: "#fdf8f4"
  },
  {
    id: 4,
    name: "C4 Ceylon Cinnamon",
    category: "Cinnamon",
    price: "Standard Grade",
    image: "/products/C4 Ceylon Cinnamon.jpg",
    rating: 4.7,
    tags: [],
    desc: "Excellent quality quills, perfect for daily culinary use and baking. Authentic Ceylon flavor.",
    color: "#fdf8f4"
  },
  {
    id: 5,
    name: "M5 Cinnamon Quills",
    category: "Cinnamon",
    price: "Commercial Grade",
    image: "/products/M5 Cinnamon Quills.png",
    rating: 4.6,
    tags: [],
    desc: "Medium grade quills, excellent for grinding into fresh powder or infusing in stews and beverages.",
    color: "#fdf8f4"
  },
  {
    id: 6,
    name: "M4 Cinnamon Quills",
    category: "Cinnamon",
    price: "Bulk Grade",
    image: "/products/M4 Cinnamon Quills.png",
    rating: 4.5,
    tags: [],
    desc: "Versatile cinnamon quills with a robust spice profile, ideal for large-scale food production.",
    color: "#fdf8f4"
  },
  {
    id: 7,
    name: "H2 Special Cinnamon",
    category: "Cinnamon",
    price: "Hamburg Grade",
    image: "/products/H2 Special Cinnamon.png",
    rating: 4.5,
    tags: [],
    desc: "Higher density quills with a robust and spicy flavor, favored in European markets.",
    color: "#fdf8f4"
  },
  {
    id: 8,
    name: "H3 Cinnamon Sticks",
    category: "Cinnamon",
    price: "Robust Grade",
    image: "/products/H3 Cinnamon Sticks.png",
    rating: 4.4,
    tags: [],
    desc: "Durable cinnamon sticks with a strong woody aroma, ideal for long-simmering recipes.",
    color: "#fdf8f4"
  },
  {
    id: 9,
    name: "Quiling No. 1",
    category: "Cinnamon",
    price: "Cut Grade",
    image: "/products/Quiling No. 1.png",
    rating: 4.6,
    tags: [],
    desc: "Uniformly cut cinnamon quills, perfect for gifting and premium packaging applications.",
    color: "#fdf8f4"
  },
  {
    id: 10,
    name: "Quiling No. 2",
    category: "Cinnamon",
    price: "Value Grade",
    image: "/products/Quiling No. 2.png",
    rating: 4.3,
    tags: [],
    desc: "Quality cinnamon cuts suitable for both commercial kitchens and home cooking.",
    color: "#fdf8f4"
  },

  // Whole Spices
  {
    id: 11,
    name: "Whole Black Pepper",
    category: "Whole Spices",
    price: "Premium Grade",
    image: "/products/black-peppers.jpg",
    rating: 4.9,
    tags: ["Bold"],
    desc: "Premium bold black peppercorns, sun-dried to lock in intense heat and complex aromatic notes.",
    color: "#f5f7f5" // Subtle green tint
  },
  {
    id: 12,
    name: "Whole White Pepper",
    category: "Whole Spices",
    price: "Fine Grade",
    image: "/products/white pepper(whole spice).png",
    rating: 4.8,
    tags: [],
    desc: "Creamy white peppercorns with a sharp, clean bite. Ideal for light-colored sauces and fish dishes.",
    color: "#fbfaf8"
  },
  {
    id: 13,
    name: "Aromatic Whole Cloves",
    category: "Whole Spices",
    price: "Hand-Picked",
    image: "/products/Aromatic whole cloves.png",
    rating: 4.9,
    tags: ["High Oil"],
    desc: "Hand-picked aromatic cloves, rich in essential oils and harvested just before full bloom.",
    color: "#f5f2ee"
  },
  {
    id: 14,
    name: "Green Cardamom Pods",
    category: "Whole Spices",
    price: "Jumbo Grade",
    image: "/products/Green Cardamom.png",
    rating: 5.0,
    tags: ["Fragrant"],
    desc: "Plump green cardamom pods with a sweet, floral aroma and cooling eucalyptus undertones.",
    color: "#f3f6f3" // Soft green
  },
  {
    id: 15,
    name: "Whole Nutmeg",
    category: "Whole Spices",
    price: "Premium Grade",
    image: "/products/Whole Nutmeg.png",
    rating: 4.7,
    tags: [],
    desc: "Whole nutmeg seeds, freshly harvested and dried to preserve their warm, nutty potency.",
    color: "#f8f5f2"
  },
  {
    id: 16,
    name: "Dried Betel Nuts",
    category: "Whole Spices",
    price: "Select Grade",
    image: "/products/Dried Betel Nuts.png",
    rating: 4.4,
    tags: [],
    desc: "Superior quality dried betel nuts, carefully processed for traditional uses and export.",
    color: "#fdfaf6"
  },
  {
    id: 17,
    name: "Garcinia Rings (Goraka)",
    category: "Whole Spices",
    price: "Traditional",
    image: "/products/Garcinia Rings (Goraka).png",
    rating: 4.6,
    tags: ["Sour"],
    desc: "Dried Garcinia Cambogia rings, a staple Sri Lankan souring agent for seafood and curries.",
    color: "#fdf8f4"
  },

  // Oil Products
  {
    id: 18,
    name: "Cinnamon Leaf Oil",
    category: "Essential Oils",
    price: "Pure Extract",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop",
    rating: 5.0,
    tags: ["100% Pure"],
    desc: "Potent and warm essential oil, steam-distilled from the inner bark of the Ceylon cinnamon tree.",
    color: "#fdfaf5" // Soft gold
  },
  {
    id: 19,
    name: "Cinnamon Bark Oil",
    category: "Essential Oils",
    price: "Pure Extract",
    image: "/products/Cinnamon Bark Oil.jpg",
    rating: 4.8,
    tags: ["100% Pure"],
    desc: "Earthy and spicy oil, distilled from fresh leaves. Rich in eugenol for aromatherapy and cosmetics.",
    color: "#fdfaf5"
  },

  // Spices Powder
  {
    id: 20,
    name: "Pure Cinnamon Powder",
    category: "Spices Powder",
    price: "Fine Ground",
    image: "/products/Pure Cinnamon Powder.png",
    rating: 4.9,
    tags: ["No Additives"],
    desc: "Fine-ground Ceylon cinnamon, naturally sweet and aromatic. Perfect for baking and wellness.",
    color: "bg-[#fdf8f4]"
  },
  {
    id: 21,
    name: "Black Pepper Powder",
    category: "Spices Powder",
    price: "Sharp Grade",
    image: "/products/Black Pepper Powder.png",
    rating: 4.7,
    tags: [],
    desc: "Freshly ground black pepper for immediate heat. Sourced from the finest local estates.",
    color: "bg-[#fcfcfc]"
  },
  {
    id: 22,
    name: "White Pepper Powder",
    category: "Spices Powder",
    price: "Smooth Grade",
    image: "/products/White Pepper Powder(spice powder).png",
    rating: 4.6,
    tags: [],
    desc: "Finely milled white pepper powder, offering a subtle, complex heat for gourmet applications.",
    color: "bg-[#faf9f8]"
  },
  {
    id: 23,
    name: "Natural Ginger Powder",
    category: "Spices Powder",
    price: "Warm Grade",
    image: "/products/Natural Ginger Powder.png",
    rating: 4.8,
    tags: ["Warming"],
    desc: "Zesty and warming ground ginger, processed from premium sun-dried roots for maximum flavor.",
    color: "bg-[#fefdf5]" // Soft yellow
  },
];
