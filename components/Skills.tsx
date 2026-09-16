"use client";

import React from "react";
import { 
  FaAngular, 
  FaReact, 
  FaJs, 
  FaNodeJs, 
  FaPhp, 
  FaBootstrap, 
  FaFigma,
  FaDatabase 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiExpress, 
  SiMongodb, 
  SiMysql 
} from "react-icons/si";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "angular":
        return <FaAngular className="w-8 h-8 text-[#dd0031]" />;
      case "nextjs":
        return <SiNextdotjs className="w-8 h-8 text-black" />;
      case "react":
        return <FaReact className="w-8 h-8 text-[#61dafb]" />;
      case "javascript":
        return <FaJs className="w-8 h-8 text-[#f7df1e]" />;
      case "typescript":
        return <SiTypescript className="w-8 h-8 text-[#3178c6]" />;
      case "nodejs":
        return <FaNodeJs className="w-8 h-8 text-[#339933]" />;
      case "express":
        return <SiExpress className="w-8 h-8 text-black" />;
      case "php":
        return <FaPhp className="w-8 h-8 text-[#777bb4]" />;
      case "mongodb":
        return <SiMongodb className="w-8 h-8 text-[#47a248]" />;
      case "mysql":
        return <SiMysql className="w-8 h-8 text-[#4479a1]" />;
      case "bootstrap":
        return <FaBootstrap className="w-8 h-8 text-[#7952b3]" />;
      case "figma":
        return <FaFigma className="w-8 h-8 text-[#f24e1e]" />;
      default:
        return <FaDatabase className="w-8 h-8 text-[#007abe]" />;
    }
  };

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#fca61f] font-semibold text-lg uppercase tracking-wider block mb-2">
            Core Competencies
          </span>
          <h2 className="text-3xl font-bold text-[#3f396d]">
            Technical Skills & Frameworks
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {portfolioData.skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-[#fcfdff] hover:bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl border border-gray-100 hover:border-[#007abe] transform hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center group"
            >
              <div className="mb-3 transform group-hover:scale-110 transition-transform">
                {getSkillIcon(skill.icon)}
              </div>
              <h4 className="text-base font-bold text-[#3f396d] mb-1">
                {skill.name}
              </h4>
              <span className="text-sm font-semibold text-[#fca61f]">
                {skill.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
