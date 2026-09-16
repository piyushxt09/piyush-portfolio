"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current visible section
      const sections = ["home", "services", "about", "portfolio", "testimonials", "blog", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <header
      className={`w-full transition-all duration-300 z-40 ${
        isScrolled
          ? "fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-md py-3"
          : "relative py-6 bg-banner-gradient"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group text-decoration-none">
            <div className="relative w-10 h-10 overflow-hidden">
              <Image
                src="/assets/image/head.png"
                alt="Priyanshu Chauhan"
                width={40}
                height={40}
                className="object-contain transform group-hover:scale-110 transition-transform"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-[#3f396d] tracking-tight">
              Priyanshu
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-lg font-medium transition-colors hover:text-[#fca61f] ${
                    isActive ? "text-[#fca61f] font-semibold" : "text-[#07003b]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Hire Me CTA */}
          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3 text-base font-semibold text-white bg-[#007abe] hover:bg-[#3f396d] rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Hire Me!
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#3f396d] hover:text-[#fca61f] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-5 shadow-xl transition-all animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-1 transition-colors ${
                  activeSection === link.id
                    ? "text-[#fca61f] font-semibold"
                    : "text-[#07003b] hover:text-[#fca61f]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center inline-block py-3 font-semibold text-white bg-[#007abe] hover:bg-[#3f396d] rounded-full shadow-md transition-all"
              >
                Hire Me!
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
