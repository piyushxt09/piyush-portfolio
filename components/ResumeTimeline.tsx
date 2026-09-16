"use client";

import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { portfolioData } from "@/data/portfolioData";

export default function ResumeTimeline() {
  return (
    <section id="resume" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#fca61f] font-semibold text-lg uppercase tracking-wider block mb-2">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3f396d]">
            Education & Professional Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-3 border-b-2 border-[#007abe]/20">
              <div className="w-10 h-10 rounded-full bg-[#f0f4ff] flex items-center justify-center text-[#007abe]">
                <FaGraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-[#3f396d]">Education</h3>
            </div>

            <div className="space-y-6">
              {portfolioData.education.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcfdff] hover:bg-white p-7 rounded-2xl border-l-4 border-[#007abe] hover:border-[#fca61f] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold text-[#007abe] bg-[#f0f4ff] mb-3">
                    {item.period}
                  </span>
                  <h4 className="text-xl font-bold text-[#3f396d] mb-1">
                    {item.title}
                  </h4>
                  <h5 className="text-sm font-semibold text-[#fca61f] mb-3">
                    {item.institution}
                  </h5>
                  <p className="text-[#7d7789] text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-3 border-b-2 border-[#007abe]/20">
              <div className="w-10 h-10 rounded-full bg-[#f0f4ff] flex items-center justify-center text-[#007abe]">
                <FaBriefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-[#3f396d]">Experience</h3>
            </div>

            <div className="space-y-6">
              {portfolioData.experience.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcfdff] hover:bg-white p-7 rounded-2xl border-l-4 border-[#007abe] hover:border-[#fca61f] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold text-[#007abe] bg-[#f0f4ff] mb-3">
                    {item.period}
                  </span>
                  <h4 className="text-xl font-bold text-[#3f396d] mb-1">
                    {item.title}
                  </h4>
                  <h5 className="text-sm font-semibold text-[#fca61f] mb-3">
                    {item.institution}
                  </h5>
                  <p className="text-[#7d7789] text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
