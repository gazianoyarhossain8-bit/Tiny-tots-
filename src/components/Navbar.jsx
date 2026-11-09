import React from 'react';

function Navbar() {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-indigo-950 text-white text-center py-2 text-sm">
        ✨ Free Shipping on Orders Above ₹999
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-5 md:px-10">

          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div>
              <h1 className="text-3xl font-extrabold text-gold
                -700 tracking-tight">
                Tiny<span className="text-beise-500">Tots.</span>
              </h1>

              <p className="text-xs text-gray-500 tracking-widest">
                LITTLE DREAMS, BIG COMFORT
              </p>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">

              <a href="/" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                Home
              </a>

              <a href="/products" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                Products
              </a>

              <a href="/about" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                About
              </a>

              <a href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                Contact
              </a>

            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-4">

              {/* Cart */}
              <a href="/cart" className="relative text-2xl hover:text-indigo-600 transition">
                🛒
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </a>

              {/* Login */}
              <a
                href="/login"
                className="hidden sm:block bg-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-indigo-700 transition shadow-md"
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