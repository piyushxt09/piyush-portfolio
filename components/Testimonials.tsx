"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { portfolioData } from "@/data/portfolioData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = portfolioData.testimonials;

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const current = reviews[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-banner-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 lg:w-full max-w-sm">
              <Image
                src="/assets/image/tastimonials-img.png"
                alt="Client Reviews"
                width={400}
                height={400}
                className="w-full h-auto object-contain animate-float"
              />
            </div>
          </div>

          {/* Right Review Card Slider */}
          <div className="lg:col-span-7">
            <div className="max-w-xl mx-auto lg:mx-0">
              <span className="text-[#fca61f] font-semibold text-lg uppercase tracking-wider block mb-2">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#3f396d] mb-8">
                Client Stories & Feedback
              </h2>

              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 relative min-h-[280px] flex flex-col justify-between">
                <div className="mb-6">
                  <FaQuoteLeft className="w-10 h-10 text-[#007abe]/20 mb-4" />
                  <p className="text-lg sm:text-xl text-[#3f396d] italic leading-relaxed">
                    &ldquo;{current.content}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-[#3f396d]">
                        {current.name}
                      </h4>
                      <span className="text-sm text-[#7d7789] block">
                        {current.role}
                      </span>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 text-[#fca61f]">
                    {[...Array(current.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-end gap-3 mt-6">
                <button
                  onClick={prevReview}
                  className="w-12 h-12 rounded-full bg-white hover:bg-[#007abe] text-[#3f396d] hover:text-white shadow-md flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous review"
                >
                  <FaChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-12 h-12 rounded-full bg-white hover:bg-[#007abe] text-[#3f396d] hover:text-white shadow-md flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next review"
                >
                  <FaChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
