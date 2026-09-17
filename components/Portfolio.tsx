"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import Modal from "./Modal";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<"all" | "crm" | "web" | "travel">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterButtons = [
    { label: "All", value: "all" },
    { label: "CRM Systems", value: "crm" },
    { label: "Web Development", value: "web" },
    { label: "Travel Tech", value: "travel" },
  ] as const;

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="portfolio" className="relative">
      {/* Portfolio Header Bar */}
      <div className="bg-[#007abe] pt-20 pb-44 text-center px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-white/80 font-semibold text-lg uppercase tracking-wider block mb-2">
            Creative Works
          </span>
          <div className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Check My Recent Projects
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setActiveFilter(btn.value)}
                className={`px-6 py-2.5 rounded-full text-base font-bold transition-all cursor-pointer ${activeFilter === btn.value
                  ? "bg-white text-[#007abe] shadow-lg scale-105"
                  : "bg-white/10 text-white hover:bg-white/20"
                  }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Cards Grid Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative h-[320px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl bg-[#07003b] transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image with uniform dimensions and zoom */}
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Floating Tags */}
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#07003b]/80 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Dark Gradient Overlay & Text */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#07003b] via-[#07003b]/50 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/80 line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="w-11 h-11 rounded-full bg-[#fca61f] group-hover:bg-[#007abe] text-white flex items-center justify-center shrink-0 shadow-lg transform group-hover:rotate-[-45deg] transition-all duration-300"
                    aria-label={`View ${project.title}`}
                  >
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || "Project Details"}
      >
        {selectedProject && (
          <div className="space-y-6">
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h4 className="text-2xl font-bold text-[#3f396d] mb-2">
                {selectedProject.title}
              </h4>
              <p className="text-[#7d7789] text-base leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <h5 className="text-lg font-bold text-[#3f396d] mb-3">
                Key Features & Technologies
              </h5>
              <ul className="space-y-2.5">
                {selectedProject.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-base">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedProject.liveUrl && (
              <div className="pt-2">
                <Link
                  href={selectedProject.liveUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#007abe] hover:bg-[#3f396d] text-white font-bold rounded-full shadow-md transition-all"
                >
                  Visit Live Project <FaExternalLinkAlt className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
