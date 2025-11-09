"use client";

import { useState } from "react";

export default function ProductDetail({ product, onBack }) {
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const colors = ["Black", "White", "Blue"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  const productImages = [
    product?.image || "/images/tshirt.avif",
    product?.image || "/images/tshirt2.avif",
    product?.image || "/images/tshirt3.avif",
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <button onClick={onBack} className="flex items-center gap-2">
              <div className="bg-white w-6 h-6 rounded-sm flex items-center justify-center text-black font-bold text-sm">
                ▲
              </div>
              <span className="font-semibold text-sm tracking-wide">
                ACME STORE
              </span>
            </button>
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

      {/* Product Detail Section */}
      <main className="flex-1 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Image Gallery */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative bg-neutral-950 rounded-lg overflow-hidden aspect-square">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <img
                    src={productImages[currentImageIndex]}
                    alt={product?.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Navigation Arrows */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
                  <button
                    onClick={handlePrevImage}
                    className="w-10 h-10 bg-neutral-900/80 hover:bg-neutral-800 rounded-full flex items-center justify-center transition-colors"
                  >
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <span className="text-sm text-neutral-400">
                    {currentImageIndex + 1} / {productImages.length}
                  </span>
                  <button
                    onClick={handleNextImage}
                    className="w-10 h-10 bg-neutral-900/80 hover:bg-neutral-800 rounded-full flex items-center justify-center transition-colors"
                  >
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-4">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative bg-neutral-950 rounded-lg overflow-hidden w-20 h-20 border-2 transition-colors ${
                      currentImageIndex === idx
                        ? "border-blue-600"
                        : "border-neutral-800 hover:border-neutral-700"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product?.name} ${idx + 1}`}
                      className="w-full h-full object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">
                  {product?.name || "Acme Circles T-Shirt"}
                </h1>
                <div className="inline-block bg-blue-600 px-4 py-2 rounded-full text-lg font-semibold">
                  {product?.price || "$20.00 USD"}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-neutral-400">
                  COLOR
                </h3>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedColor === color
                          ? "bg-white text-black"
                          : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-neutral-400">
                  SIZE
                </h3>
                <div className="flex flex-wrap gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-16 h-10 rounded-full text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? "bg-white text-black"
                          : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Description */}
              <div>
                <p className="text-neutral-400 text-sm">
                  60% combed ringspun cotton/40% polyester jersey tee.
                </p>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add To Cart
              </button>
            </div>
          </div>

          {/* Related Products Section */}
          <div className="mt-24">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Placeholder for related products */}
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-neutral-950 rounded-lg h-64 flex items-center justify-center text-neutral-600"
                >
                  Related Product {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-black mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-white w-6 h-6 rounded-sm flex items-center justify-center text-black font-bold text-sm">
                ▲
              </div>
              <span className="font-semibold text-sm tracking-wide">
                ACME STORE
              </span>
            </div>

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

            <div className="flex md:justify-end">
              <button className="bg-neutral-900 border border-neutral-800 text-xs px-4 py-2 rounded-md flex items-center gap-2 hover:bg-neutral-800 transition-colors">
                <span>▲</span>
                <span>Deploy</span>
              </button>
            </div>
          </div>

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
    </div>
  );
}
