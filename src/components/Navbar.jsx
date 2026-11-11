import React from 'react';

function Navbar() {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#32201C] text-amber-100 text-center py-2 text-sm font-medium tracking-wide">
        ✨ Free Shipping on Orders Above ₹999
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#4A322C] text-white shadow-lg sticky top-0 z-50 border-b border-[#5C3F38]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex items-center justify-between h-24">

            {/* Logo Section matching the photo */}
            <a href="/" className="flex flex-col items-center justify-center group py-2">
              {/* Bow Icon */}
              <span className="text-xl leading-none mb-0.5 opacity-90 group-hover:scale-110 transition-transform">
                🎀
              </span>
              
              {/* Top Small Brand Name */}
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.35em] text-amber-100/90 uppercase leading-tight">
                BOWSOME
              </span>

              {/* Main Brand Name */}
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white lowercase leading-tight my-0.5 font-serif">
                tiny tots
              </h1>

              {/* Subtitle */}
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-amber-100/75 uppercase font-medium leading-none">
                BABY ESSENTIALS
              </span>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-amber-50 hover:text-amber-200 font-medium text-sm tracking-wider uppercase transition">
                Home
              </a>
              <a href="/products" className="text-amber-50 hover:text-amber-200 font-medium text-sm tracking-wider uppercase transition">
                Products
              </a>
              <a href="/about" className="text-amber-50 hover:text-amber-200 font-medium text-sm tracking-wider uppercase transition">
                About
              </a>
              <a href="/contact" className="text-amber-50 hover:text-amber-200 font-medium text-sm tracking-wider uppercase transition">
                Contact
              </a>
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-5">
              {/* Cart */}
              <a href="/cart" className="relative text-2xl hover:opacity-80 transition flex items-center justify-center">
                🛒
                <span className="absolute -top-1.5 -right-2 bg-amber-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#4A322C]">
                  0
                </span>
              </a>

              {/* Login */}
              <a
                href="/login"
                className="hidden sm:block bg-amber-100 text-[#4A322C] px-6 py-2 rounded-full font-bold text-sm hover:bg-white transition shadow-md"
              >
                Login
              </a>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
