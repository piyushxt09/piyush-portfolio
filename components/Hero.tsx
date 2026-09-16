"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = portfolioData.personal.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative w-full bg-banner-gradient pt-8 pb-20 overflow-hidden">
      {/* Floating Left Social Bar */}
      <div className="hidden xl:flex flex-col items-center absolute left-8 top-1/2 -translate-y-1/2 z-20 space-y-4">
        <Link
          href={portfolioData.personal.socials.linkedin}
          target="_blank"
          className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#3f396d] hover:bg-[#007abe] hover:text-white transition-all transform hover:scale-110"
          title="LinkedIn"
        >
          <FaLinkedinIn className="w-5 h-5" />
        </Link>
        <Link
          href={portfolioData.personal.socials.twitter}
          target="_blank"
          className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#3f396d] hover:bg-black hover:text-white transition-all transform hover:scale-110"
          title="Twitter / X"
        >
          <FaXTwitter className="w-5 h-5" />
        </Link>
        <Link
          href={portfolioData.personal.socials.instagram}
          target="_blank"
          className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#3f396d] hover:bg-[#E1306C] hover:text-white transition-all transform hover:scale-110"
          title="Instagram"
        >
          <FaInstagram className="w-5 h-5" />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="inline-block text-[#fca61f] font-semibold text-lg tracking-wide uppercase mb-3">
              {portfolioData.personal.tagline}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3f396d] leading-tight mb-2">
              Hello, I am
            </h2>

            {/* Dynamic Rotating Roles Text */}
            <div className="h-16 sm:h-20 flex items-center justify-center lg:justify-start overflow-hidden mb-4">
              <span
                key={currentRoleIndex}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#007abe] transition-all duration-500 transform animate-fadeIn"
              >
                {roles[currentRoleIndex]}
              </span>
            </div>

            <p className="text-base sm:text-lg text-[#7d7789] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              {portfolioData.personal.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="#about"
                className="px-8 py-4 bg-[#fca61f] hover:bg-[#007abe] text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Download My CV
              </Link>
              <Link
                href="#portfolio"
                className="px-8 py-4 bg-transparent hover:bg-white text-[#3f396d] font-bold border-2 border-[#3f396d] rounded-full hover:shadow-md transition-all duration-300"
              >
                See My Work
              </Link>
            </div>

            {/* Mobile Social Links */}
            <div className="flex xl:hidden items-center justify-center lg:justify-start gap-4 mt-8">
              <Link
                href={portfolioData.personal.socials.linkedin}
                target="_blank"
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#3f396d] hover:bg-[#007abe] hover:text-white transition-all"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href={portfolioData.personal.socials.twitter}
                target="_blank"
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#3f396d] hover:bg-black hover:text-white transition-all"
              >
                <FaXTwitter />
              </Link>
              <Link
                href={portfolioData.personal.socials.instagram}
                target="_blank"
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#3f396d] hover:bg-[#E1306C] hover:text-white transition-all"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Right Image Column with floating stat badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-72 sm:w-96 lg:w-full max-w-md">
              {/* Main Profile Graphic */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/assets/image/banner-right-img.png"
                  alt={portfolioData.personal.name}
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Floating Badge 1: 3-4 Years Experience */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-float">
                <div className="w-12 h-12 rounded-xl bg-[#f0f4ff] flex items-center justify-center">
                  <Image
                    src="/assets/image/cup-img.png"
                    alt="Experience"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#3f396d] leading-none">
                    {portfolioData.personal.experienceYears}
                  </h4>
                  <span className="text-xs text-[#7d7789]">Experience</span>
                </div>
              </div>

              {/* Floating Badge 2: 13k+ Users & Clients */}
              <div className="absolute -top-6 -right-6 z-20 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-float [animation-delay:1.5s]">
                <div className="w-12 h-12 rounded-xl bg-[#eefcf8] flex items-center justify-center">
                  <Image
                    src="/assets/image/admin-icon.png"
                    alt="Happy Clients"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#3f396d] leading-none">
                    {portfolioData.personal.clientsCount}k+
                  </h4>
                  <span className="text-xs text-[#7d7789]">Clients Served</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
