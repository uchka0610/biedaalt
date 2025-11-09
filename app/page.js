"use client";

import { useState } from "react";
import ProductDetail from "./ProductDetail";

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Acme Circles T-Shirt",
      price: "$20.00 USD",
      image: "/images/tshirt.avif",
    },
    {
      id: 2,
      name: "Acme Drawstring Bag",
      price: "$12.00 USD",
      image: "/images/bag.avif",
    },
    { id: 3, name: "Acme Cup", price: "$15.00 USD", image: "/images/cup.avif" },
    {
      id: 4,
      name: "Acme Hoodie",
      price: "$50.00 USD",
      image: "/images/hoodie.avif",
    },
    {
      id: 5,
      name: "Acme Baby Onesie",
      price: "$10.00 USD",
      image: "/images/onesie.avif",
    },
    {
      id: 6,
      name: "Acme Baby Cap",
      price: "$10.00 USD",
      image: "/images/cap.avif",
    },
    { id: 7, name: "Acme Mug", price: "$15.00 USD", image: "/images/mug.avif" },
  ];

  // If a product is selected, show the detail page
  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  // Otherwise show the main store page
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="border-b border-neutral-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          {/* Logo and Nav */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-white w-6 h-6 rounded-sm flex items-center justify-center text-black font-bold text-sm">
                ▲
              </div>
              <span className="font-semibold text-sm tracking-wide">
                ACME STORE
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-white">
                All
              </a>
              <a href="#" className="hover:text-white">
                Shirts
              </a>
              <a href="#" className="hover:text-white">
                Stickers
              </a>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-2 text-sm text-neutral-400 placeholder-neutral-600 focus:outline-none focus:border-neutral-700"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Cart */}
          <button className="p-2 hover:bg-neutral-900 rounded-md">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* HERO GRID - Large T-Shirt LEFT + 2 Small RIGHT */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div
              onClick={() => setSelectedProduct(products[0])}
              className="lg:col-span-2 relative bg-neutral-950 rounded-lg overflow-hidden group cursor-pointer hover:ring-2 hover:ring-neutral-700 transition-all"
            >
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <img
                  src={products[0].image}
                  alt={products[0].name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <span className="text-white text-base font-medium">
                  {products[0].name}
                </span>
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold text-white">
                  {products[0].price}
                </span>
              </div>
            </div>

            {/* Two Smaller Products - RIGHT SIDE */}
            <div className="flex flex-col gap-6">
              {products.slice(1, 3).map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="relative bg-neutral-950 rounded-lg overflow-hidden aspect-square group cursor-pointer hover:ring-2 hover:ring-neutral-700 transition-all"
                >
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="text-white text-sm font-medium">
                      {product.name}
                    </span>
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-t border-neutral-800 border-b py-4 bg-black">
        <div className="marquee whitespace-nowrap">
          <div className="px-6">
            <div className="flex gap-6 pb-8">
              {products.slice(3).map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="relative bg-neutral-950 rounded-lg overflow-hidden min-w-[280px] w-[280px] aspect-square group cursor-pointer hover:ring-2 hover:ring-neutral-700 transition-all "
                >
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="text-white text-sm font-medium">
                      {product.name}
                    </span>
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 bg-black mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-white w-6 h-6 rounded-sm flex items-center justify-center text-black font-bold text-sm">
                ▲
              </div>
              <span className="font-semibold text-sm tracking-wide">
                ACME STORE
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3 text-sm text-neutral-400">
              <a href="#" className="hover:text-white">
                Home
              </a>
              <a href="#" className="hover:text-white">
                About
              </a>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-white">
                Shipping & Return Policy
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </div>

            {/* Deploy Button */}
            <div className="flex md:justify-end">
              <button className="bg-neutral-900 border border-neutral-800 text-xs px-4 py-2 rounded-md flex items-center gap-2 hover:bg-neutral-800 transition-colors">
                <span>▲</span>
                <span>Deploy</span>
              </button>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 border-t border-neutral-900 pt-8">
            <div className="flex items-center gap-4">
              <span>© 2023–2025 ACME, Inc. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-neutral-400">
                View the source
              </a>
            </div>
            <div className="flex items-center gap-1">
              <span>Created by</span>
              <span className="font-semibold">▲ Vercel</span>
            </div>
          </div>
        </div>
      </footer>

      {/* INLINE STYLE FOR MARQUEE */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .marquee {
          display: inline-block;
          animation: scroll 20s linear infinite;
        }
        ::-webkit-scrollbar {
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #404040;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #525252;
        }
      `}</style>
    </div>
  );
}
