"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 bg-banner-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 4 Circular Progress Skill Indicators */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
              {portfolioData.circularSkills.map((item, index) => {
                const radius = 50;
                const circumference = 2 * Math.PI * radius;
                const strokeDashoffset = circumference - (item.percentage / 100) * circumference;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-center justify-center"
                  >
                    <div className="relative w-28 h-28 flex items-center justify-center mb-3">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                        {/* Background track */}
                        <circle
                          cx="60"
                          cy="60"
                          r={radius}
                          stroke="#eef6ff"
                          strokeWidth="8"
                          fill="transparent"
                        />
                        {/* Progress bar */}
                        <circle
                          cx="60"
                          cy="60"
                          r={radius}
                          stroke={item.color}
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold" style={{ color: item.color }}>
                          {item.percentage}%
                        </span>
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-[#3f396d]">{item.name}</h4>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Bio Narrative & CTA */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <span className="text-[#fca61f] font-semibold text-lg uppercase tracking-wider block mb-2">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3f396d] mb-1">
              {portfolioData.personal.aboutHeading}
            </h2>
            <h3 className="text-xl font-semibold text-[#007abe] mb-6">
              {portfolioData.personal.aboutSubheading}
            </h3>

            <p className="text-[#7d7789] text-base sm:text-lg leading-relaxed mb-4">
              {portfolioData.personal.aboutBio1}
            </p>
            <p className="text-[#7d7789] text-base sm:text-lg leading-relaxed mb-8">
              {portfolioData.personal.aboutBio2}
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-[#007abe] hover:bg-[#3f396d] text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Hire Me Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
