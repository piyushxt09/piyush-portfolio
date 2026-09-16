"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faPaperPlane,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const { contact } = portfolioData.personal;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.comments) {
      setErrorMessage("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    // Simulate submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        comments: "",
      });
      setTimeout(() => setStatus("idle"), 6000);
    }, 1000);
  };

  return (
    <section
      id="Contact"
      className="w-full py-20 bg-[var(--background)] text-white relative overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#7b47fe]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fca61f]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h6 className="text-[var(--accent)] text-lg font-bold uppercase tracking-wider mb-2">
            Get in Touch
          </h6>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Let&apos;s Work Together!<br />
            <span className="text-[var(--light-purple-color)]">Send a Message</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-4 bg-[var(--secondary-color)]/70 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">
              Contact Details
            </h3>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-color)]/20 border border-[var(--primary-color)]/30 flex items-center justify-center text-[var(--accent)] text-xl flex-shrink-0 shadow-md">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <h5 className="font-semibold text-white/90 text-sm tracking-wide">
                    Address
                  </h5>
                  <p className="text-white/70 text-sm mt-1 font-light leading-relaxed">
                    {contact.address}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-color)]/20 border border-[var(--primary-color)]/30 flex items-center justify-center text-[var(--accent)] text-xl flex-shrink-0 shadow-md">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <h5 className="font-semibold text-white/90 text-sm tracking-wide">
                    Email
                  </h5>
                  <p className="text-white/70 text-sm mt-1 font-light">
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:text-[var(--accent)] transition-colors break-all"
                    >
                      {contact.email}
                    </a>
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-color)]/20 border border-[var(--primary-color)]/30 flex items-center justify-center text-[var(--accent)] text-xl flex-shrink-0 shadow-md">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div>
                  <h5 className="font-semibold text-white/90 text-sm tracking-wide">
                    Phone
                  </h5>
                  <p className="text-white/70 text-sm mt-1 font-light">
                    <a
                      href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                      className="hover:text-[var(--accent)] transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs text-white/50 block mb-2 uppercase tracking-wider">
                Availability
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Open for Projects & Collaborations
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8 bg-[var(--secondary-color)]/70 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-10 shadow-xl">
            {status === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3">
                <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
                <div>
                  <p className="font-semibold text-sm">
                    Thank you! Your message has been sent successfully.
                  </p>
                  <p className="text-xs text-emerald-400/80 mt-0.5">
                    I will get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-sm">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium"
                  >
                    First Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="e.g. John"
                    required
                    className="w-full bg-[#120d2b]/80 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[var(--light-purple-color)] focus:ring-1 focus:ring-[var(--light-purple-color)] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="e.g. Doe"
                    className="w-full bg-[#120d2b]/80 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[var(--light-purple-color)] focus:ring-1 focus:ring-[var(--light-purple-color)] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium"
                  >
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-[#120d2b]/80 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[var(--light-purple-color)] focus:ring-1 focus:ring-[var(--light-purple-color)] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#120d2b]/80 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[var(--light-purple-color)] focus:ring-1 focus:ring-[var(--light-purple-color)] transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="comments"
                  className="block text-xs uppercase tracking-wider text-white/70 mb-2 font-medium"
                >
                  Your Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  className="w-full bg-[#120d2b]/80 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[var(--light-purple-color)] focus:ring-1 focus:ring-[var(--light-purple-color)] transition-all resize-y"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--light-purple-color)] to-[var(--primary-color)] text-white font-bold text-sm tracking-wide shadow-lg shadow-[var(--light-purple-color)]/25 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
                >
                  {status === "sending" ? (
                    "Sending Message..."
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} className="text-sm" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
