"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import Modal from "./Modal";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
                className={`px-6 py-2.5 rounded-full text-base font-bold transition-all cursor-pointer ${
                  activeFilter === btn.value
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

      {/* Portfolio Swiper Slider Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 relative z-20 pb-20">
        {/* Navigation Arrows */}
        <div className="flex items-center justify-end gap-3 mb-4">
          <button
            id="portfolio-swiper-prev"
            className="w-11 h-11 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-[#3f396d] hover:bg-[#007abe] hover:text-white transition-all transform hover:scale-105 cursor-pointer"
            aria-label="Previous Project"
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            id="portfolio-swiper-next"
            className="w-11 h-11 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-[#3f396d] hover:bg-[#007abe] hover:text-white transition-all transform hover:scale-105 cursor-pointer"
            aria-label="Next Project"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>

        <Swiper
          key={activeFilter}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: "#portfolio-swiper-prev",
            nextEl: "#portfolio-swiper-next",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={28}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 28,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="portfolio-swiper"
        >
          {filteredProjects.map((project) => (
            <SwiperSlide key={project.id} className="h-full">
              <div
                className="w-full h-full bg-white rounded-3xl p-5 sm:p-6 shadow-lg hover:shadow-2xl border border-gray-100 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Real Image Container with natural proportions */}
                  <div className="relative w-full rounded-2xl bg-[#f8faff] border border-gray-100 mb-5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      unoptimized
                      className="w-full h-auto object-contain rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#f0f4ff] text-[#007abe] text-xs font-bold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-[#3f396d] hover:text-[#007abe] transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#7d7789] line-clamp-2 mb-4 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#007abe] hover:text-[#3f396d] transition-colors">
                    View Case Study
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="w-10 h-10 rounded-full bg-[#fca61f] hover:bg-[#007abe] text-white flex items-center justify-center shrink-0 shadow-md transform hover:translate-x-1 transition-all duration-300 cursor-pointer"
                    aria-label={`View ${project.title}`}
                  >
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || "Project Details"}
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* Real Screenshot Preview */}
            <div className="relative w-full rounded-2xl bg-gray-50 border border-gray-100 shadow-sm p-1.5 sm:p-2">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1200}
                height={800}
                unoptimized
                className="w-full h-auto object-contain rounded-xl"
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
