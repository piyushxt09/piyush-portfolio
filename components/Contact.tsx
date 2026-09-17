"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const { contact, socials } = portfolioData.personal;

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
      className="w-full py-24 bg-banner-gradient relative overflow-hidden"
    >
      {/* Subtle ambient decorative accents */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#007abe]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#fca61f]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#fca61f] font-semibold text-lg uppercase tracking-wider block mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3f396d] leading-tight">
            Let&apos;s Work Together!<br />
            <span className="text-[#007abe]">Send a Message</span>
          </h2>
          <p className="text-[#7d7789] text-base sm:text-lg mt-4 max-w-xl mx-auto">
            Have a project in mind, need consultation, or want to explore collaboration opportunities? Feel free to reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#3f396d] mb-2">
                Contact Details
              </h3>
              <p className="text-[#7d7789] text-sm mb-8">
                Reach out directly via email, phone, or find me on social platforms.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-13 h-13 rounded-2xl bg-[#007abe]/10 border border-[#007abe]/20 flex items-center justify-center text-[#007abe] text-xl flex-shrink-0 shadow-sm">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#3f396d] text-sm tracking-wide">
                      Address
                    </h5>
                    <p className="text-[#7d7789] text-sm mt-1 leading-relaxed">
                      {contact.address}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-13 h-13 rounded-2xl bg-[#007abe]/10 border border-[#007abe]/20 flex items-center justify-center text-[#007abe] text-xl flex-shrink-0 shadow-sm">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#3f396d] text-sm tracking-wide">
                      Email
                    </h5>
                    <p className="text-[#7d7789] text-sm mt-1 font-medium">
                      <a
                        href={`mailto:${contact.email}`}
                        className="hover:text-[#007abe] transition-colors break-all"
                      >
                        {contact.email}
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-13 h-13 rounded-2xl bg-[#007abe]/10 border border-[#007abe]/20 flex items-center justify-center text-[#007abe] text-xl flex-shrink-0 shadow-sm">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#3f396d] text-sm tracking-wide">
                      Phone
                    </h5>
                    <p className="text-[#7d7789] text-sm mt-1 font-medium">
                      <a
                        href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                        className="hover:text-[#007abe] transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <span className="text-xs text-[#7d7789] block mb-3 uppercase tracking-wider font-semibold">
                Availability
              </span>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open for Projects & Freelance
              </div>

              {/* Social Quick Links */}
              <div className="mt-6 flex items-center gap-3">
                <Link
                  href={socials.linkedin}
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-[#f0f4ff] hover:bg-[#007abe] text-[#3f396d] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                  title="LinkedIn"
                >
                  <FaLinkedinIn className="text-base" />
                </Link>
                <Link
                  href={socials.twitter}
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-[#f0f4ff] hover:bg-black text-[#3f396d] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                  title="Twitter / X"
                >
                  <FaXTwitter className="text-base" />
                </Link>
                <Link
                  href={socials.instagram}
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-[#f0f4ff] hover:bg-[#E1306C] text-[#3f396d] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                  title="Instagram"
                >
                  <FaInstagram className="text-base" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[#3f396d] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-[#7d7789] text-sm mb-8">
              Fill out the form below and I&apos;ll respond within 24 hours.
            </p>

            {status === "success" && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                <FaCheckCircle className="text-emerald-600 text-xl flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">
                    Thank you! Your message has been sent successfully.
                  </p>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    I will get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-sm font-semibold">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs uppercase tracking-wider text-[#3f396d] mb-2 font-bold"
                  >
                    First Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="e.g. John"
                    required
                    className="w-full bg-[#f8faff] border border-gray-200 rounded-xl px-4 py-3.5 text-[#3f396d] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#007abe] focus:bg-white focus:ring-4 focus:ring-[#007abe]/10 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs uppercase tracking-wider text-[#3f396d] mb-2 font-bold"
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
                    className="w-full bg-[#f8faff] border border-gray-200 rounded-xl px-4 py-3.5 text-[#3f396d] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#007abe] focus:bg-white focus:ring-4 focus:ring-[#007abe]/10 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider text-[#3f396d] mb-2 font-bold"
                  >
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-[#f8faff] border border-gray-200 rounded-xl px-4 py-3.5 text-[#3f396d] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#007abe] focus:bg-white focus:ring-4 focus:ring-[#007abe]/10 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-wider text-[#3f396d] mb-2 font-bold"
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
                    className="w-full bg-[#f8faff] border border-gray-200 rounded-xl px-4 py-3.5 text-[#3f396d] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#007abe] focus:bg-white focus:ring-4 focus:ring-[#007abe]/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="comments"
                  className="block text-xs uppercase tracking-wider text-[#3f396d] mb-2 font-bold"
                >
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  className="w-full bg-[#f8faff] border border-gray-200 rounded-xl px-4 py-3.5 text-[#3f396d] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#007abe] focus:bg-white focus:ring-4 focus:ring-[#007abe]/10 transition-all resize-y"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#007abe] hover:bg-[#3f396d] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#007abe]/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
                >
                  {status === "sending" ? (
                    "Sending Message..."
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
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
