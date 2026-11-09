
import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  Truck, 
  Star, 
  X, 
  ChevronRight,
  Filter,
  Maximize2,
  CheckCircle2
} from 'lucide-react';

export default function Tiny() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Contact Info
  const phoneNumber = "+919961097269";
  const whatsappNumber = "+919961097269";

  // Product collection mapped directly to the 5 user images
  const products = [
    {
      id: 1,
      title: "Royal White Lace Baby Nest",
      category: "nest",
      badge: "Handcrafted Lace",
      price: "Rs 3,490",
      originalPrice: "৳ 4,200",
      image: "18129.jpg",
      description: "Elegant ivory white quilted baby nest featuring intricate lace embroidery borders and a luxurious decorative center bow pillow.",
      features: [
        "100% Breathable Organic Cotton",
        "Handcrafted French-style Lace",
        "Includes Matching Bow Pillow",
        "Removable Machine Washable Cover"
      ],
      colorTheme: "bg-amber-50/50 text-amber-900 border-amber-200"
    },
    {
      id: 2,
      title: "Sage Green Deluxe Nursery Set",
      category: "sets",
      badge: "Full 6-Pcs Bundle",
      price: "Rs 8,490",
      originalPrice: "Rs 9,900",
      image: "18090.jpg",
      description: "Complete luxury olive & sage green nursery set including handwoven storage baskets with lace trim, hooded swaddle pod, and deluxe nest bed.",
      features: [
        "Matching Woven Storage Baskets",
        "Velvet-soft Cotton Fabric",
        "Includes Ergonomic Mattress & Pillow",
        "Complete Room Setup Solution"
      ],
      colorTheme: "bg-emerald-50/50 text-emerald-900 border-emerald-200"
    },
    {
      id: 3,
      title: "Blossom Pink Floral Cot Nest",
      category: "nest",
      badge: "Ruffled Comfort",
      price: "Rs 2,990",
      originalPrice: "Rs 3,600",
      image: "17407.jpg",
      description: "Soft cream muslin nest with delicate pink floral print and ruffled elasticized edges. Perfect protection for baby cribs and cot beds.",
      features: [
        "Ultra-soft Muslin Cotton",
        "Ruffled Safety Edges",
        "Hypoallergenic Poly-fill Cushioning",
        "Lightweight & Portable"
      ],
      colorTheme: "bg-rose-50/50 text-rose-900 border-rose-200"
    },
    {
      id: 4,
      title: "Slate Grey Hooded Swaddle Wrap",
      category: "swaddle",
      badge: "Travel Essential",
      price: "Rs 1,850",
      originalPrice: "৳ 2,200",
      image: "16545.jpg",
      description: "Modern quilted wrap-around swaddle envelope with snug hood protection. Designed for easy hospital exit, stroller trips, and cozy naps.",
      features: [
        "Quilted Diamond Stitching",
        "Protective Hood Contour",
        "Quick Velcro Snug Closing",
        "Includes Organizer Box"
      ],
      colorTheme: "bg-slate-100 text-slate-800 border-slate-300"
    },
    {
      id: 5,
      title: "Dusty Blue Bow Swaddle Blanket",
      category: "swaddle",
      badge: "Newborn Favorite",
      price: "Rs 2,150",
      originalPrice: "Rs 2,700",
      description: "Premium pastel teal-blue quilted swaddle featuring crisp white lace trim and an oversized dual-tone satin-finish bow tie.",
      features: [
        "Luxe Satin Finish Center Bow",
        "Detailed Lace Edging",
        "Temperature-Regulating Quilting",
        "Ideal for Newborn Photoshoots"
      ],
      colorTheme: "bg-sky-50/50 text-sky-900 border-sky-200"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Collection' },
    { id: 'nest', label: 'Baby Nests' },
    { id: 'swaddle', label: 'Swaddle Wraps' },
    { id: 'sets', label: 'Complete Sets' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-stone-800 antialiased selection:bg-rose-100 selection:text-rose-900">
      
      {/* 1. STICKY HEADER SECTION */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200/80 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo & Brand Name */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500 shadow-inner">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h1 className="font-serif text-lg sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Sweet Baby Couture
                </h1>
                <p className="text-[11px] sm:text-xs text-rose-600 font-medium">Handcrafted Luxury Baby Bedding</p>
              </div>
            </div>

            {/* Quick Contact & WhatsApp Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden lg:flex flex-col items-end mr-2">
                <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest">Call For Orders</span>
                <a href={`tel:${phoneNumber}`} className="text-sm font-bold text-stone-800 hover:text-rose-600 flex items-center gap-1.5 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-rose-500" />
                  {phoneNumber}
                </a>
              </div>

              {/* Direct Phone Call Button */}
              <a 
                href={`tel:${phoneNumber}`} 
                className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-medium transition-transform active:scale-95 shadow-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">Call Now</span>
              </a>

              {/* WhatsApp Quick Order Button */}
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I am interested in ordering your Baby Bedding Collection.")}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium transition-transform active:scale-95 shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* 2. HERO / PROMO SECTION */}
      <section className="relative bg-gradient-to-b from-stone-100/60 via-[#FDFBF7] to-[#FDFBF7] py-10 sm:py-14 border-b border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-rose-100/80 text-rose-800 mb-3">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" /> 100% Handcrafted Cotton & Lace
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 max-w-3xl mx-auto leading-snug">
            Pure Softness & Protection For Newborn Sleeping
          </h2>

          <p className="mt-3 text-stone-600 text-xs sm:text-base max-w-2xl mx-auto font-light">
            Scroll down to explore our luxury lace nests, swaddle envelopes, and nursery basket bundles designed for your baby's comfort.
          </p>

          {/* Value Badges */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs text-stone-600">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Organic Safe Materials</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-rose-500" />
              <span>Fast Home Delivery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Verified Customer Choice</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PRODUCT CATALOG GRID & FILTER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Category Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
          <div>
            <h3 className="text-xl font-serif font-bold text-stone-900">Featured Bedding Collection</h3>
            <p className="text-xs text-stone-500">Click any product to zoom image or order directly</p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-stone-400 mr-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic 5 Image Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Image Header Block */}
              <div 
                className="relative aspect-[4/4.5] overflow-hidden bg-stone-100 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md shadow-sm border ${product.colorTheme}`}>
                    {product.badge}
                  </span>
                </div>

                {/* Zoom Hover Icon */}
                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/90 backdrop-blur-md rounded-full text-stone-800 shadow-lg transform group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-5 h-5 text-stone-900" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 
                    onClick={() => setSelectedProduct(product)}
                    className="font-serif text-lg font-bold text-stone-900 group-hover:text-rose-600 transition-colors cursor-pointer mb-2"
                  >
                    {product.title}
                  </h4>

                  <p className="text-xs text-stone-600 line-clamp-2 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-stone-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Price & WhatsApp Order */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-xs text-stone-400 line-through mr-1">{product.originalPrice}</span>
                    <span className="text-lg font-bold text-stone-900">{product.price}</span>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I want to order the "${product.title}" (${product.price}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-xs transition-colors"
                  >
                    <span>Order Now</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </main>

      {/* 4. FULL IMAGE PREVIEW MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-stone-200">
            
            {/* Close Modal Button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow-md transition-transform active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Image Preview Container */}
              <div className="h-72 md:h-full bg-stone-100 relative">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details Column */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold mb-3 border ${selectedProduct.colorTheme}`}>
                    {selectedProduct.badge}
                  </span>

                  <h3 className="text-2xl font-serif font-bold text-stone-900">
                    {selectedProduct.title}
                  </h3>
                  
                  <div className="my-3 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-rose-600">{selectedProduct.price}</span>
                    <span className="text-sm text-stone-400 line-through">{selectedProduct.originalPrice}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {selectedProduct.description}
                  </p>

                  <h5 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">Detailed Specifications:</h5>
                  <div className="space-y-2 mb-6">
                    {selectedProduct.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Action Buttons */}
                <div className="space-y-2.5 pt-4 border-t border-stone-100">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello! I want to confirm order for: ${selectedProduct.title} (${selectedProduct.price})`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    Order via WhatsApp
                  </a>

                  <a
                    href={`tel:${phoneNumber}`}
                    className="w-full py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-stone-600" />
                    Direct Phone Call
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* 5. FOOTER SECTION */}
      <footer className="bg-stone-900 text-stone-400 py-10 border-t border-stone-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Sparkles className="w-5 h-5 text-rose-400" />
            <span className="font-serif text-lg text-white font-bold">Sweet Baby Couture</span>
          </div>
          <p className="text-xs text-stone-400 max-w-md mx-auto mb-4">
            Handcrafted luxury baby nests, swaddle blanket wraps & nursery basket sets made with highest safety standards.
          </p>
          <p className="text-[11px] text-stone-600">
            © {new Date().getFullYear()} Sweet Baby Couture. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
