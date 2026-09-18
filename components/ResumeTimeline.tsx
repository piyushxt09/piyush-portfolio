"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaRoute,
  FaCalendarDays,
  FaLocationDot,
} from "react-icons/fa6";
import { portfolioData } from "@/data/portfolioData";

interface RoadmapItem {
  id: string;
  period: string;
  title: string;
  institution: string;
  description: string;
  type: "experience" | "education";
  isCurrent: boolean;
  tags: string[];
}

export default function ResumeTimeline() {
  const [activeExpCount, setActiveExpCount] = useState(0);
  const [activeEduCount, setActiveEduCount] = useState(0);

  const expLaneRef = useRef<HTMLDivElement>(null);
  const eduLaneRef = useRef<HTMLDivElement>(null);
  const expFillRef = useRef<HTMLDivElement>(null);
  const eduFillRef = useRef<HTMLDivElement>(null);
  const expPointRef = useRef<HTMLDivElement>(null);
  const eduPointRef = useRef<HTMLDivElement>(null);
  const expCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const eduCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const educationItems: RoadmapItem[] = portfolioData.education.map((item, idx) => ({
    id: `edu-${idx}`,
    period: item.period,
    title: item.title,
    institution: item.institution,
    description: item.description,
    type: "education",
    isCurrent: item.period.toLowerCase().includes("present"),
    tags:
      idx === 0
        ? ["Advanced Computing", "Cloud Architecture", "Software Engineering"]
        : idx === 1
          ? ["Core CS", "Database Systems", "Software Engineering", "Full-Stack Dev"]
          : idx === 2
            ? ["IBM Certified", "React & Node.js", "MongoDB", "Corporate Accounting"]
            : ["Accountancy", "Business Studies", "Analytical Thinking"],
  }));

  const experienceItems: RoadmapItem[] = portfolioData.experience.map((item, idx) => ({
    id: `exp-${idx}`,
    period: item.period,
    title: item.title,
    institution: item.institution,
    description: item.description,
    type: "experience",
    isCurrent: item.period.toLowerCase().includes("present"),
    tags:
      idx === 0
        ? ["Angular 19", "B2B CRM", "Booking Workflows", "Payment Gateways"]
        : idx === 1
          ? ["Next.js 16", "React.js", "Node.js", "MongoDB", "Clean Architecture"]
          : idx === 2
            ? ["Enterprise CRMs", "PHP 8.4", "MySQL", "REST APIs", "Team Collaboration"]
            : ["Custom Admin Panels", "PHP & React", "Client Delivery", "End-to-End"],
  }));

  // Highly-optimized, zero-lag scroll engine using direct DOM manipulation
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const triggerY = window.innerHeight * 0.65;

          // Experience track update
          if (expLaneRef.current && expFillRef.current && expPointRef.current) {
            const rect = expLaneRef.current.getBoundingClientRect();
            const maxScrollable = rect.height - 40;
            const currentDist = triggerY - (rect.top + 24);
            const pct = Math.min(Math.max((currentDist / maxScrollable) * 100, 0), 100);

            // Direct DOM update (butter-smooth 120fps with zero React re-render lag)
            expFillRef.current.style.height = `${pct}%`;
            expPointRef.current.style.top = `calc(${pct}% + 24px)`;
            expPointRef.current.style.opacity = pct > 0.5 ? "1" : "0";

            // Count reached milestone cards
            let reached = 0;
            expCardRefs.current.forEach((el) => {
              if (el) {
                const cardTop = el.getBoundingClientRect().top;
                if (cardTop <= triggerY) reached++;
              }
            });
            setActiveExpCount((prev) => (prev !== reached ? reached : prev));
          }

          // Education track update
          if (eduLaneRef.current && eduFillRef.current && eduPointRef.current) {
            const rect = eduLaneRef.current.getBoundingClientRect();
            const maxScrollable = rect.height - 40;
            const currentDist = triggerY - (rect.top + 24);
            const pct = Math.min(Math.max((currentDist / maxScrollable) * 100, 0), 100);

            // Direct DOM update (butter-smooth 120fps with zero React re-render lag)
            eduFillRef.current.style.height = `${pct}%`;
            eduPointRef.current.style.top = `calc(${pct}% + 24px)`;
            eduPointRef.current.style.opacity = pct > 0.5 ? "1" : "0";

            // Count reached milestone cards
            let reached = 0;
            eduCardRefs.current.forEach((el) => {
              if (el) {
                const cardTop = el.getBoundingClientRect().top;
                if (cardTop <= triggerY) reached++;
              }
            });
            setActiveEduCount((prev) => (prev !== reached ? reached : prev));
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="resume"
      className="py-20 bg-banner-gradient relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div
        className="absolute top-1/4 -right-24 w-96 h-96 bg-[#007abe]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -left-24 w-96 h-96 bg-[#fca61f]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(#3f396d_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.025] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#007abe]/25 shadow-xs mb-3">
            <FaRoute className="text-[#fca61f] text-sm" />
            <span className="text-xs sm:text-sm font-bold text-[#007abe] uppercase tracking-wider">
              Career &amp; Academic Roadmap
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3f396d] tracking-tight leading-tight mb-3">
            Milestones Along My Tech Journey
          </h2>
          <p className="text-sm sm:text-base text-[#7d7789] leading-relaxed">
            Hands-on enterprise software development, production CRM platforms, and academic specialization.
          </p>
        </div>

        {/* Both Tracks Displayed Side-By-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* TRACK 1: Professional Experience */}
          <div className="relative">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-gray-100">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-sm bg-gradient-to-br from-[#007abe] to-[#3f396d]">
                <FaBriefcase className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#3f396d] leading-tight">
                  Professional Experience
                </h3>
                <span className="text-xs font-semibold text-[#7d7789]">
                  {experienceItems.length} Milestones Recorded
                </span>
              </div>
            </div>

            {/* Track Lane with Smooth Scroll Traveling Point */}
            <div ref={expLaneRef} className="relative pl-6 sm:pl-8 space-y-4">
              {/* Background Spine (Grey) */}
              <div
                className="absolute left-[11px] sm:left-[15px] top-6 bottom-8 w-[2.5px] bg-gray-200/90 rounded-full"
                aria-hidden="true"
              />

              {/* Active Smoothly Filled Gradient Line (Direct DOM animated) */}
              <div
                ref={expFillRef}
                className="absolute left-[11px] sm:left-[15px] top-6 w-[2.5px] bg-gradient-to-b from-[#007abe] via-[#3f396d] to-[#007abe] rounded-full will-change-[height]"
                style={{ height: "0%" }}
                aria-hidden="true"
              />

              {/* Glowing Traveling Beacon Point (Direct DOM animated) */}
              <div
                ref={expPointRef}
                className="absolute left-[12px] sm:left-[16px] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#007abe] shadow-[0_0_14px_#007abe] ring-2 ring-white z-20 pointer-events-none will-change-transform opacity-0"
                style={{ top: "24px" }}
                aria-hidden="true"
              >
                <span className="absolute -inset-1 rounded-full bg-[#007abe]/50 animate-ping" />
              </div>

              {/* Milestone Cards */}
              {experienceItems.map((item, idx) => {
                const isPassed = idx < activeExpCount;

                return (
                  <div
                    key={item.id}
                    ref={(el) => {
                      expCardRefs.current[idx] = el;
                    }}
                    className="relative group"
                  >
                    {/* Milestone Node on Spine (Smoothly lights up when reached) */}
                    <div className="absolute -left-[23px] sm:-left-[27px] top-4 z-10">
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isPassed
                            ? "bg-[#007abe] text-white ring-4 ring-[#007abe]/25 scale-110 shadow-md"
                            : "bg-white border-2 border-gray-300 text-gray-400 scale-95"
                        }`}
                      >
                        {isPassed ? (
                          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                        )}
                      </div>
                    </div>

                    {/* Card Container */}
                    <div
                      className={`bg-white/95 backdrop-blur-md p-5 rounded-2xl border transition-all duration-300 transform group-hover:-translate-y-0.5 ${
                        isPassed
                          ? "border-[#007abe]/35 shadow-[0_8px_25px_rgba(0,122,190,0.08)]"
                          : "border-gray-100 shadow-[0_4px_18px_rgba(63,57,109,0.04)] opacity-85"
                      }`}
                    >
                      {/* Top Meta Line: Period + Status */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007abe] bg-[#f0f4ff] px-2.5 py-0.5 rounded-md">
                          <FaCalendarDays className="text-[11px]" />
                          <span>{item.period}</span>
                        </div>
                        {item.isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#eefcf8] text-green-700 border border-green-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      {/* Title & Organization */}
                      <h4 className="text-lg font-extrabold text-[#3f396d] tracking-tight mb-1 group-hover:text-[#007abe] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#fca61f] mb-2.5">
                        <FaLocationDot className="text-[10px] text-[#007abe] shrink-0" />
                        <span>{item.institution}</span>
                      </div>

                      {/* Description */}
                      <p className="text-[#7d7789] text-xs sm:text-sm leading-relaxed mb-3">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-gray-100">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#f8faff] text-[#3f396d] border border-gray-200/60"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TRACK 2: Academic & Certifications */}
          <div className="relative">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-gray-100">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-sm bg-gradient-to-br from-[#fca61f] to-[#f59e0b]">
                <FaGraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#3f396d] leading-tight">
                  Academic &amp; Certifications
                </h3>
                <span className="text-xs font-semibold text-[#7d7789]">
                  {educationItems.length} Milestones Recorded
                </span>
              </div>
            </div>

            {/* Track Lane with Smooth Scroll Traveling Point */}
            <div ref={eduLaneRef} className="relative pl-6 sm:pl-8 space-y-4">
              {/* Background Spine (Grey) */}
              <div
                className="absolute left-[11px] sm:left-[15px] top-6 bottom-8 w-[2.5px] bg-gray-200/90 rounded-full"
                aria-hidden="true"
              />

              {/* Active Smoothly Filled Gradient Line (Direct DOM animated) */}
              <div
                ref={eduFillRef}
                className="absolute left-[11px] sm:left-[15px] top-6 w-[2.5px] bg-gradient-to-b from-[#fca61f] via-[#3f396d] to-[#fca61f] rounded-full will-change-[height]"
                style={{ height: "0%" }}
                aria-hidden="true"
              />

              {/* Glowing Traveling Beacon Point (Direct DOM animated) */}
              <div
                ref={eduPointRef}
                className="absolute left-[12px] sm:left-[16px] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#fca61f] shadow-[0_0_14px_#fca61f] ring-2 ring-white z-20 pointer-events-none will-change-transform opacity-0"
                style={{ top: "24px" }}
                aria-hidden="true"
              >
                <span className="absolute -inset-1 rounded-full bg-[#fca61f]/50 animate-ping" />
              </div>

              {/* Milestone Cards */}
              {educationItems.map((item, idx) => {
                const isPassed = idx < activeEduCount;

                return (
                  <div
                    key={item.id}
                    ref={(el) => {
                      eduCardRefs.current[idx] = el;
                    }}
                    className="relative group"
                  >
                    {/* Milestone Node on Spine (Smoothly lights up when reached) */}
                    <div className="absolute -left-[23px] sm:-left-[27px] top-4 z-10">
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isPassed
                            ? "bg-[#fca61f] text-white ring-4 ring-[#fca61f]/25 scale-110 shadow-md"
                            : "bg-white border-2 border-gray-300 text-gray-400 scale-95"
                        }`}
                      >
                        {isPassed ? (
                          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                        )}
                      </div>
                    </div>

                    {/* Card Container */}
                    <div
                      className={`bg-white/95 backdrop-blur-md p-5 rounded-2xl border transition-all duration-300 transform group-hover:-translate-y-0.5 ${
                        isPassed
                          ? "border-[#fca61f]/35 shadow-[0_8px_25px_rgba(252,166,31,0.08)]"
                          : "border-gray-100 shadow-[0_4px_18px_rgba(63,57,109,0.04)] opacity-85"
                      }`}
                    >
                      {/* Top Meta Line: Period + Status */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#fca61f] bg-[#fff8ec] px-2.5 py-0.5 rounded-md">
                          <FaCalendarDays className="text-[11px]" />
                          <span>{item.period}</span>
                        </div>
                        {item.isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#eefcf8] text-green-700 border border-green-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      {/* Title & Organization */}
                      <h4 className="text-lg font-extrabold text-[#3f396d] tracking-tight mb-1 group-hover:text-[#fca61f] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#007abe] mb-2.5">
                        <FaLocationDot className="text-[10px] text-[#fca61f] shrink-0" />
                        <span>{item.institution}</span>
                      </div>

                      {/* Description */}
                      <p className="text-[#7d7789] text-xs sm:text-sm leading-relaxed mb-3">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-gray-100">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#f8faff] text-[#3f396d] border border-gray-200/60"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
