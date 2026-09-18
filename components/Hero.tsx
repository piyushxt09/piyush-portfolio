"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaDownload,
  FaArrowRight,
  FaCheck,
  FaRegCopy,
  FaStar,
  FaCode,
  FaBolt,
} from "react-icons/fa6";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<"dev" | "stack">("dev");

  const roles = portfolioData.personal.roles;

  // Typewriter effect
  useEffect(() => {
    const currentFullText = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const techPills = [
    { name: "Angular 19", color: "#dd0031" },
    { name: "Next.js 16", color: "#007abe" },
    { name: "React 19", color: "#61dafb" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "Node.js", color: "#339933" },
    { name: "PHP 8.4", color: "#777bb4" },
    { name: "MongoDB", color: "#47a248" },
    { name: "MySQL", color: "#00758f" },
  ];

  return (
    <section
      id="home"
      className="relative w-full bg-banner-gradient pt-24 pb-16 sm:pt-28 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Ambient Radial Mesh Glows - Strictly Theme Colors */}
      <div
        className="absolute -top-32 -right-20 w-[30rem] h-[30rem] bg-[#007abe]/12 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -left-28 w-[26rem] h-[26rem] bg-[#fca61f]/12 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 right-1/3 w-[24rem] h-[24rem] bg-[#3f396d]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Modern Developer Tech Grid Pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#3f396d_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating Left Social Bar - Glassmorphism Capsule */}
      <aside
        aria-label="Social Profiles"
        className="hidden xl:flex flex-col items-center absolute left-6 2xl:left-8 top-1/2 -translate-y-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-3.5 p-2 rounded-full bg-white/80 backdrop-blur-xl border border-white shadow-[0_12px_35px_rgba(63,57,109,0.08)]">
          <Link
            href={portfolioData.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white shadow-xs flex items-center justify-center text-[#3f396d] hover:bg-[#007abe] hover:text-white transition-all duration-300 transform hover:scale-110"
            title="LinkedIn Profile"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </Link>
          <Link
            href={portfolioData.personal.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white shadow-xs flex items-center justify-center text-[#3f396d] hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110"
            title="Twitter / X"
          >
            <FaXTwitter className="w-4 h-4" />
          </Link>
          <Link
            href={portfolioData.personal.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white shadow-xs flex items-center justify-center text-[#3f396d] hover:bg-[#E1306C] hover:text-white transition-all duration-300 transform hover:scale-110"
            title="Instagram"
          >
            <FaInstagram className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex flex-col items-center mt-3 gap-1.5 opacity-60">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#3f396d] [writing-mode:vertical-lr] rotate-180">
            Follow Me
          </span>
          <div className="w-[1.5px] h-8 bg-gradient-to-b from-[#3f396d] to-transparent" />
        </div>
      </aside>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Live Availability Pill & Quick Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#fca61f]/40 shadow-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fca61f] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#fca61f]" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#3f396d]">
                  Available for Projects
                </span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0f4ff] border border-[#007abe]/20 text-xs font-semibold text-[#007abe]">
                <FaBolt className="text-[#fca61f] text-xs" />
                <span>Full Stack & UI Architect</span>
              </div>
            </div>

            {/* High-Impact Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#3f396d] leading-[1.12] tracking-tight mb-4">
              Building Scalable <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007abe] via-[#3f396d] to-[#007abe]">
                Web Applications
              </span>{" "}
              & Digital Systems.
            </h1>

            {/* Dynamic Interactive Role Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-lg sm:text-2xl font-medium text-[#7d7789] mb-5">
              <span>Hi, I am</span>
              <span className="font-extrabold text-[#3f396d]">
                {portfolioData.personal.name}
              </span>
              <span className="text-[#3f396d]/40">—</span>
              <span className="inline-flex items-center px-3.5 py-1 rounded-xl bg-white/95 backdrop-blur-md shadow-sm border border-[#007abe]/30 text-[#007abe] font-extrabold text-base sm:text-xl">
                <FaCode className="mr-2 text-xs sm:text-sm text-[#fca61f]" />
                <span>{displayText}</span>
                <span className="inline-block w-[2.5px] h-4 sm:h-5 bg-[#fca61f] ml-1.5 animate-pulse rounded-full" />
              </span>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-[#7d7789] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal mb-8">
              {portfolioData.personal.bio}
            </p>

            {/* Modern Action Bar with 1-Click Copy Email */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8">
              <a
                href={portfolioData.personal.resumeUrl || "/assets/Resume .pdf"}
                download="Priyanshu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#fca61f] to-[#f59e0b] hover:from-[#007abe] hover:to-[#00669e] text-white font-bold rounded-full shadow-[0_12px_28px_-6px_rgba(252,166,31,0.45)] hover:shadow-[0_12px_28px_-6px_rgba(0,122,190,0.45)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 inline-flex items-center gap-2.5 cursor-pointer text-sm sm:text-base"
              >
                <FaDownload className="text-sm transition-transform duration-300 group-hover:translate-y-0.5" />
                <span>Download CV</span>
                <span className="text-[11px] bg-white/25 px-2 py-0.5 rounded-full font-semibold">
                  PDF
                </span>
              </a>

              <Link
                href="#portfolio"
                className="group px-7 sm:px-8 py-3.5 sm:py-4 bg-white/80 hover:bg-white text-[#3f396d] font-bold border-2 border-[#3f396d]/20 hover:border-[#3f396d] rounded-full shadow-xs hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 inline-flex items-center gap-2 text-sm sm:text-base"
              >
                <span>View Portfolio</span>
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1 text-[#007abe]" />
              </Link>


            </div>



            {/* Mobile Socials */}
            <div className="flex xl:hidden items-center justify-center lg:justify-start gap-3 mt-6">
              <Link
                href={portfolioData.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#3f396d] hover:bg-[#007abe] hover:text-white transition-all"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href={portfolioData.personal.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#3f396d] hover:bg-black hover:text-white transition-all"
                title="Twitter / X"
              >
                <FaXTwitter />
              </Link>
              <Link
                href={portfolioData.personal.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#3f396d] hover:bg-[#E1306C] hover:text-white transition-all"
                title="Instagram"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Right Column: High-End Visual Composition with Floating Code Terminal */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-md">
              {/* Back Layer Gradient Ring */}
              <div
                className="absolute -inset-3 bg-gradient-to-tr from-[#fca61f]/25 via-[#007abe]/25 to-[#3f396d]/20 rounded-[2.8rem] blur-2xl opacity-75 transform -rotate-3 scale-95 transition-all duration-700"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-white/40 rounded-[2.5rem] transform rotate-1 scale-100 border border-white/70 shadow-sm"
                aria-hidden="true"
              />

              {/* Main Photo Card */}
              <div className="relative z-10 rounded-[2.2rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(63,57,109,0.22)] border-4 border-white bg-gradient-to-b from-white/90 to-[#f0f4ff]/90 backdrop-blur-xs group">
                <Image
                  src="/assets/image/banner-right-img.png"
                  alt={portfolioData.personal.name}
                  unoptimized
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                {/* Edge vignette fade */}
                <div
                  className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#07003b]/20 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Floating Element 1: Top Right Rating & Client Trust Badge */}
              <div className="absolute -top-6 -right-4 sm:-right-6 z-20 bg-white/95 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-white/90 flex items-center gap-3 animate-float hover:scale-105 transition-transform duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#eefcf8] flex items-center justify-center shrink-0 shadow-inner">
                  <Image
                    src="/assets/image/admin-icon.png"
                    alt="Clients"
                    width={26}
                    height={26}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="text-base font-extrabold text-[#3f396d] leading-none">
                      {portfolioData.personal.clientsCount}+
                    </span>
                    <div className="flex text-[#fca61f] text-[10px] ml-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#7d7789]">
                    Clients &amp; Projects
                  </span>
                </div>
              </div>

              {/* Floating Element 2: Modern Interactive Code Terminal Widget */}
              <div className="absolute -bottom-10 -left-4 sm:-left-8 z-20 w-72 sm:w-80 bg-[#07003b]/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_45px_rgba(7,0,59,0.35)] border border-white/20 text-white overflow-hidden animate-float [animation-delay:1.2s] transition-all duration-300 hover:scale-[1.03]">
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-black/30 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block" />
                    <span className="text-[11px] font-mono text-white/70 ml-2">
                      Priyanshu.config.ts
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono">
                    <button
                      onClick={() => setActiveCodeTab("dev")}
                      className={`px-1.5 py-0.5 rounded cursor-pointer ${activeCodeTab === "dev"
                        ? "bg-[#007abe] text-white"
                        : "text-white/50 hover:text-white"
                        }`}
                    >
                      dev
                    </button>
                    <button
                      onClick={() => setActiveCodeTab("stack")}
                      className={`px-1.5 py-0.5 rounded cursor-pointer ${activeCodeTab === "stack"
                        ? "bg-[#007abe] text-white"
                        : "text-white/50 hover:text-white"
                        }`}
                    >
                      stack
                    </button>
                  </div>
                </div>

                {/* Terminal Code Body */}
                <div className="p-3.5 font-mono text-xs leading-relaxed select-none">
                  {activeCodeTab === "dev" ? (
                    <>
                      <p className="text-white/50">{"// Developer profile"}</p>
                      <p>
                        <span className="text-[#fca61f]">const</span>{" "}
                        <span className="text-[#007abe]">engineer</span> = {"{"}
                      </p>
                      <p className="pl-3">
                        <span className="text-white/70">experience:</span>{" "}
                        <span className="text-[#27c93f] font-semibold">
                          &quot;{portfolioData.personal.experienceYears}&quot;
                        </span>
                        ,
                      </p>
                      <p className="pl-3">
                        <span className="text-white/70">focus:</span>{" "}
                        <span className="text-[#27c93f]">
                          &quot;Scale &amp; Performance&quot;
                        </span>
                        ,
                      </p>
                      <p className="pl-3">
                        <span className="text-white/70">status:</span>{" "}
                        <span className="text-[#fca61f]">
                          &quot;Ready to Ship 🚀&quot;
                        </span>
                      </p>
                      <p>{"};"}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-white/50">{"// Primary technology"}</p>
                      <p>
                        <span className="text-[#fca61f]">export default</span>{" "}
                        [
                      </p>
                      <p className="pl-3 text-[#27c93f]">
                        &quot;Angular 19&quot;, &quot;Next.js 16&quot;,
                      </p>
                      <p className="pl-3 text-[#27c93f]">
                        &quot;Node.js&quot;, &quot;PHP 8.4&quot;, &quot;MongoDB&quot;
                      </p>
                      <p>];</p>
                    </>
                  )}
                </div>
              </div>

              {/* Floating Element 3: Experience Trophy Pill */}
              <div className="hidden sm:flex absolute top-1/2 -left-8 z-20 bg-white/95 backdrop-blur-xl px-3.5 py-2.5 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-white/90 items-center gap-2.5 animate-float [animation-delay:2.5s] hover:scale-105 transition-transform duration-300">
                <div className="w-9 h-9 rounded-xl bg-[#f0f4ff] flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/image/cup-img.png"
                    alt="Experience"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#3f396d] leading-tight">
                    {portfolioData.personal.experienceYears}
                  </h4>
                  <span className="text-[10px] text-[#7d7789] block">
                    Proven Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
