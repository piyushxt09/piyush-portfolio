"use client";

import React, { useState } from "react";
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaFigma, 
  FaTools, 
  FaTerminal, 
  FaCheckCircle 
} from "react-icons/fa";
import { portfolioData, ServiceItem } from "@/data/portfolioData";
import Modal from "./Modal";

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <FaCode className="w-8 h-8 text-[#007abe]" />;
      case "server":
        return <FaServer className="w-8 h-8 text-[#007abe]" />;
      case "database":
        return <FaDatabase className="w-8 h-8 text-[#007abe]" />;
      case "layout":
        return <FaFigma className="w-8 h-8 text-[#007abe]" />;
      case "tools":
        return <FaTools className="w-8 h-8 text-[#007abe]" />;
      case "terminal":
        return <FaTerminal className="w-8 h-8 text-[#007abe]" />;
      default:
        return <FaCode className="w-8 h-8 text-[#007abe]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#fca61f] font-semibold text-lg uppercase tracking-wider block mb-2">
            My Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3f396d]">
            Comprehensive Full Stack Development Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#007abe] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#f0f4ff] flex items-center justify-center mb-6 group-hover:bg-[#007abe]/10 transition-colors">
                  {getServiceIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-[#3f396d] group-hover:text-[#007abe] transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-[#7d7789] text-base leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              <button
                onClick={() => setSelectedService(service)}
                className="text-[#fca61f] hover:text-[#007abe] font-semibold text-base inline-flex items-center gap-2 group-hover:translate-x-1 transition-all self-start cursor-pointer"
              >
                Read More <span className="text-lg">→</span>
              </button>
            </div>
          ))}
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
            <p className="text-[#7d7789] text-lg leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <h4 className="text-lg font-bold text-[#3f396d] border-b border-gray-100 pb-2">
              Key Capabilities & Expertise
            </h4>

            <ul className="space-y-3">
              {selectedService.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </section>
  );
}
