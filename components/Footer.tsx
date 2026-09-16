"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { name, socials } = portfolioData.personal;

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#service-con" },
    { label: "About & Resume", href: "#about-con" },
    { label: "Portfolio", href: "#Portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#Contact" },
  ];

  return (
    <footer className="w-full bg-[#110c27] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Brand Header */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--light-purple-color)]/60 bg-white/5 flex items-center justify-center shadow-lg">
            <Image
              src="/assets/image/head.png"
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {name}
          </h3>
        </div>

        {/* Short Statement */}
        <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-8 font-light">
          Turning complex problems into simple, efficient, and user-friendly web
          applications with clean code, scalable architecture, and responsive designs.
        </p>

        {/* Navigation links */}
        <nav className="mb-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white/75 hover:text-[var(--accent)] transition-colors py-1 inline-block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="w-11 h-11 rounded-full bg-white/5 hover:bg-[var(--light-purple-color)] border border-white/10 hover:border-transparent text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="text-lg" />
          </a>
          <a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter / X"
            className="w-11 h-11 rounded-full bg-white/5 hover:bg-[var(--light-purple-color)] border border-white/10 hover:border-transparent text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
          >
            <FontAwesomeIcon icon={faXTwitter} className="text-lg" />
          </a>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="w-11 h-11 rounded-full bg-white/5 hover:bg-[var(--light-purple-color)] border border-white/10 hover:border-transparent text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-lg" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-xs sm:text-sm text-white/50">
          <p>
            Copyright &copy; {new Date().getFullYear()} Piyush Solution | All rights
            reserved by <span className="text-white/80 font-medium">{name}</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
