"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaXmark, FaArrowRight, FaPaperPlane } from "react-icons/fa6";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let targetProgress = 0;
    let currentProgress = 0;
    let animId: number;

    const updateTarget = () => {
      const totalScroll =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        targetProgress = Math.min(Math.max(window.scrollY / totalScroll, 0), 1);
      } else {
        targetProgress = 0;
      }

      // Sticky glassmorphic navbar state
      const scrolled = window.scrollY > 40;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

      // Active section detection
      const sections = [
        "home",
        "services",
        "about",
        "resume",
        "portfolio",
        "testimonials",
        "blog",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const mapped = section === "resume" ? "about" : section;
            setActiveSection((prev) => (prev !== mapped ? mapped : prev));
            break;
          }
        }
      }
    };

    let isRunning = false;

    const loop = () => {
      // Butter-smooth physics lerp for continuous glide without lag
      currentProgress += (targetProgress - currentProgress) * 0.18;
      if (Math.abs(targetProgress - currentProgress) < 0.0005) {
        currentProgress = targetProgress;
        if (progressLineRef.current) {
          progressLineRef.current.style.transform = `scaleX(${currentProgress})`;
        }
        isRunning = false;
        return; // Pause loop when settled
      }

      if (progressLineRef.current) {
        progressLineRef.current.style.transform = `scaleX(${currentProgress})`;
      }

      animId = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(loop);
      }
    };

    const onScrollOrResize = () => {
      updateTarget();
      startLoop();
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    updateTarget();
    startLoop();

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Services", href: "#services", id: "services" },
    { label: "About & Resume", href: "#about", id: "about" },
    { label: "Portfolio", href: "#portfolio", id: "portfolio" },
    { label: "Testimonials", href: "#testimonials", id: "testimonials" },
    { label: "Blog", href: "#blog", id: "blog" },
  ];

  return (
    <>
      {/* Top Hairline Scroll Progress Bar (Hardware-Accelerated GPU scaleX) */}
      <div
        ref={progressLineRef}
        className="fixed top-0 left-0 right-0 h-[3.5px] bg-[#007abe] shadow-[0_0_12px_#007abe] z-50 pointer-events-none origin-left will-change-transform"
        style={{ transform: "scaleX(0)" }}
        aria-hidden="true"
      />

      {/* Floating Island Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? "py-2.5 sm:py-3 bg-white/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(63,57,109,0.08)] border-b border-gray-100/80"
          : "py-4 sm:py-5 bg-banner-gradient"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with Avatar & Pill */}
            <Link
              href="#home"
              className="flex items-center gap-3 group text-decoration-none focus:outline-none"
            >
              <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/assets/image/head.png"
                  alt="Priyanshu Chauhan"
                  width={34}
                  height={34}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black text-[#3f396d] tracking-tight group-hover:text-[#007abe] transition-colors">
                  Priyanshu
                </span>

              </div>
            </Link>

            {/* Desktop Modern Capsule Nav Menu */}
            <nav className="hidden lg:flex items-center p-1.5 rounded-full bg-white/70 backdrop-blur-md border border-gray-200/80 shadow-2xs">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${isActive
                      ? "bg-[#3f396d] text-white shadow-xs"
                      : "text-[#7d7789] hover:text-[#3f396d] hover:bg-white/80"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Let's Talk CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#007abe] to-[#3f396d] hover:from-[#fca61f] hover:to-[#f59e0b] text-white text-xs sm:text-sm font-bold shadow-[0_6px_20px_-4px_rgba(0,122,190,0.4)] hover:shadow-[0_6px_20px_-4px_rgba(252,166,31,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>Let&apos;s Talk</span>
                <span className="w-2 h-2 rounded-full bg-[#27c93f] animate-pulse" />
                <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 rounded-full bg-white shadow-xs border border-gray-200/80 flex items-center justify-center text-[#3f396d] hover:text-[#007abe] focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? (
                  <FaXmark className="w-5 h-5" />
                ) : (
                  <FaBars className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Modern Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden px-4 pt-2 pb-4">
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl border border-gray-100 animate-fadeIn">
              <div className="flex flex-col space-y-1 mb-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;

                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${isActive
                        ? "bg-[#f0f4ff] text-[#007abe]"
                        : "text-[#3f396d] hover:bg-gray-50"
                        }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#007abe]" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#007abe] to-[#3f396d] flex items-center justify-center gap-2 shadow-md"
              >
                <FaPaperPlane className="text-xs" />
                <span>Let&apos;s Connect</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
