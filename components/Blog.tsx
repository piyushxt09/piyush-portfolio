"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { portfolioData, BlogPost } from "@/data/portfolioData";
import Modal from "./Modal";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#fca61f] font-semibold text-lg uppercase tracking-wider block mb-2">
            Articles & Insights
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3f396d]">
            Latest Tech & Business Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#007abe] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group"
            >
              <div>
                {/* Blog Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 z-10 px-3.5 py-1 bg-[#3f396d]/85 backdrop-blur-md text-white text-xs font-bold rounded-full">
                    {blog.category}
                  </span>
                </div>
                {/* Content */}
                <div className="p-7">
                  <div className="flex items-center justify-between text-xs text-[#7d7789] mb-3">
                    <span className="flex items-center gap-1.5">
                      <FaUser className="text-[#007abe]" /> {blog.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-[#fca61f]" /> {blog.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#3f396d] group-hover:text-[#007abe] transition-colors mb-3 leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-[#7d7789] text-base leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7">
                <button
                  onClick={() => setSelectedPost(blog)}
                  className="text-[#fca61f] hover:text-[#007abe] font-bold text-base inline-flex items-center gap-2 group-hover:translate-x-1 transition-all cursor-pointer"
                >
                  Read More <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Reading Modal */}
      <Modal
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
        title={selectedPost?.title || "Article"}
      >
        {selectedPost && (
          <div className="space-y-6">
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden">
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>

            <div className="flex items-center gap-6 text-sm text-[#7d7789] border-b border-gray-100 pb-3">
              <span className="flex items-center gap-1.5">
                <FaUser className="text-[#007abe]" /> By {selectedPost.author}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCalendarAlt className="text-[#fca61f]" /> {selectedPost.date}
              </span>
              <span className="px-3 py-0.5 bg-[#f0f4ff] text-[#007abe] font-semibold rounded-full text-xs">
                {selectedPost.category}
              </span>
            </div>

            <div className="text-gray-700 text-lg leading-relaxed space-y-4 whitespace-pre-line">
              {selectedPost.content}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
