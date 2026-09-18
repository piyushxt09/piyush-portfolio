"use client";

import React, { useState } from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaFigma,
  FaTools,
  FaTerminal,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { portfolioData, ServiceItem } from "@/data/portfolioData";
import Modal from "./Modal";

const SERVICE_NUMBERS = ["01", "02", "03", "04", "05", "06"];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "code": return <FaCode className="w-7 h-7" />;
      case "server": return <FaServer className="w-7 h-7" />;
      case "database": return <FaDatabase className="w-7 h-7" />;
      case "layout": return <FaFigma className="w-7 h-7" />;
      case "tools": return <FaTools className="w-7 h-7" />;
      case "terminal": return <FaTerminal className="w-7 h-7" />;
      default: return <FaCode className="w-7 h-7" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-bold text-sm tracking-wider uppercase mb-4 border border-[var(--accent)]/20">
            My Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--primary-color)] tracking-tight">
            Comprehensive Full Stack Development Services
          </h2>
          <p className="mt-4 text-[var(--text-color)] text-base sm:text-lg">
            Scroll down to see each specialized service stack on top as you explore my full engineering capabilities.
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative ">
          {portfolioData.services.map((service, index) => {
            const topOffset = 85 + index * 22;
            const zIndex = 10 + index;

            return (
              <div
                key={service.id}
                style={{ top: `${topOffset}px`, zIndex }}
                className="sticky mb-20 sm:mb-28 last:mb-0"
              >
                <div className="group relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_-8px_30px_rgba(0,0,0,0.06),0_25px_50px_rgba(0,0,0,0.12)] border border-gray-100 hover:border-[var(--light-purple-color)]/40 transition-all duration-300 overflow-hidden">

                  {/* Gradient top stripe */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--light-purple-color)]" />


                  {/* Landscape 2-column grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

                    {/* Left — icon, title, description, CTA */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border border-[var(--light-purple-color)]/20 bg-[var(--off-white-color)] text-[var(--light-purple-color)] shadow-sm transition-transform duration-300 group-hover:scale-110">
                            {getServiceIcon(service.icon)}
                          </div>

                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--primary-color)] group-hover:text-[var(--light-purple-color)] transition-colors mb-3">
                          {service.title}
                        </h3>

                        <p className="text-[var(--text-color)] text-base leading-relaxed mb-6">
                          {service.shortDesc}
                        </p>
                      </div>

                      <button
                        onClick={() => setSelectedService(service)}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-white font-semibold text-sm shadow-md transition-all duration-300 cursor-pointer bg-[var(--light-purple-color)] hover:bg-[var(--primary-color)] hover:gap-4 hover:shadow-lg active:scale-95"
                      >
                        <span>Explore Full Capabilities</span>
                        <FaArrowRight className="text-xs" />
                      </button>
                    </div>

                    {/* Right — features highlights */}
                    <div className="lg:col-span-6 bg-[var(--off-white-color)] rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-inner">
                      <div className="flex items-center justify-between border-b border-gray-200/70 pb-3 mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary-color)]/80">
                          Key Deliverables &amp; Expertise
                        </span>
                        <span className="text-xs font-semibold text-[var(--light-purple-color)] bg-[var(--light-purple-color)]/10 px-2.5 py-0.5 rounded-full border border-[var(--light-purple-color)]/20">
                          {service.features.length} Highlights
                        </span>
                      </div>

                      <ul className="space-y-3">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <FaCheckCircle className="w-4 h-4 text-[var(--accent)] shrink-0 mt-1" />
                            <span className="text-sm sm:text-base text-[var(--primary-color)] font-medium leading-snug">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 pt-3 border-t border-gray-200/50 flex items-center justify-between text-xs text-[var(--text-color)]">
                        <span className="flex items-center gap-1.5 font-medium text-[var(--light-purple-color)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--light-purple-color)] animate-ping" />
                          Production-Ready Solutions
                        </span>
                        <span
                          onClick={() => setSelectedService(service)}
                          className="font-bold text-[var(--accent)] hover:underline cursor-pointer"
                        >
                          View complete breakdown &rarr;
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || "Service Details"}
      >
        {selectedService && (
          <div className="space-y-6">
            <div className="p-4 bg-[var(--off-white-color)] rounded-2xl border border-[var(--light-purple-color)]/20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[var(--light-purple-color)] shadow-sm">
                {getServiceIcon(selectedService.icon)}
              </div>
              <div>
                <h4 className="font-bold text-lg text-[var(--primary-color)]">
                  {selectedService.title}
                </h4>
                <p className="text-xs text-[var(--text-color)]">
                  Comprehensive scope, technologies &amp; architectural standards
                </p>
              </div>
            </div>

            <div>
              <h5 className="text-sm uppercase tracking-wider font-bold text-[var(--primary-color)] mb-2">
                Overview
              </h5>
              <p className="text-[var(--text-color)] text-base leading-relaxed">
                {selectedService.fullDesc}
              </p>
            </div>

            <div>
              <h5 className="text-sm uppercase tracking-wider font-bold text-[var(--primary-color)] border-b border-gray-100 pb-2 mb-4">
                Core Deliverables &amp; Technical Expertise
              </h5>
              <ul className="space-y-3">
                {selectedService.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="text-[var(--primary-color)] text-sm sm:text-base leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}