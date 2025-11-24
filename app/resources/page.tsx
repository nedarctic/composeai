'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, ClipboardList, PenTool, Download, FileCheck, BookOpenText, ArrowRight } from "lucide-react";
import { poppins } from "../fonts";

export default function Resources() {
  const resources = [
    {
      title: "Academic Essay & Thesis Templates",
      desc: "Ready-to-use Word & LaTeX templates for essays, dissertations, research papers, and journal articles — perfectly formatted and citation-ready.",
      icon: <FileText className="w-12 h-12" />,
      type: "Downloadable",
      link: "/resources/academic-essay-templates.zip",
    },
    {
      title: "Ultimate Writing Checklists",
      desc: "Pro-level editing, structure, and style checklists used by published academics to polish drafts into A-grade work.",
      icon: <ClipboardList className="w-12 h-12" />,
      type: "Downloadable",
      link: "/resources/writing-checklists.pdf",
    },
    {
      title: "Argument & Structure Blueprint",
      desc: "Visual frameworks and sentence starters to build rock-solid arguments, compelling intros, and logical flow.",
      icon: <PenTool className="w-12 h-12" />,
      type: "Guide",
      link: "/resources/argument-blueprint.pdf",
    },
    {
      title: "Citation Style Quick-Reference Pack",
      desc: "One-page cheat sheets for APA 7, MLA 9, Chicago, Harvard, and IEEE — with examples and tricky cases solved.",
      icon: <FileCheck className="w-12 h-12" />,
      type: "Downloadable",
      link: "/resources/citation-cheat-sheets.pdf",
    },
    {
      title: "Literature Review Template Kit",
      desc: "Synthesis matrix, thematic outlines, and phrasing banks to write reviews that impress supervisors and reviewers.",
      icon: <BookOpenText className="w-12 h-12" />,
      type: "Downloadable",
      link: "/resources/literature-review-kit.zip",
    },
    {
      title: "Professional Email & Proposal Templates",
      desc: "Polished templates for grant applications, supervisor emails, conference submissions, and cover letters.",
      icon: <Download className="w-12 h-12" />,
      type: "Downloadable",
      link: "/resources/professional-templates.zip",
    },
  ];

  return (
    <main className={`${poppins.className} min-h-screen bg-white dark:bg-[#1C1C30] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-x-hidden`}>

      {/* Hero Section */}
      <section className="mt-20 relative py-20 sm:py-32 px-6 lg:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <motion.div
            className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 sm:w-[700px] sm:h-[700px] bg-[#E8B85F] rounded-full blur-3xl"
            animate={{ y: [0, -50, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-6xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Free <span className="text-[#E8B85F]">Writing Resources</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Expert-crafted templates, checklists, and guides used by thousands of students and academics to write faster, clearer, and at a higher level — completely free.
          </p>
        </motion.div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 sm:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {resources.map((resource, i) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.8 }}
              whileHover={{ y: -12, scale: 1.04 }}
              className="group relative p-8 sm:p-10 rounded-3xl bg-gray-50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-gray-800 hover:border-[#E8B85F]/40 overflow-hidden transition-all duration-500 shadow-xl"
            >
              {/* Gold glow */}
              <div className="absolute inset-0 bg-[#E8B85F] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
              <div className="absolute -inset-1 bg-[#E8B85F] rounded-3xl blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10" />

              <div className="relative z-10 flex flex-col items-start gap-6">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#E8B85F]/10 text-[#E8B85F] group-hover:bg-[#E8B85F]/20 transition-all duration-300">
                  {resource.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                    {resource.title}
                  </h3>
                  <span className="inline-block px-4 py-2 text-xs sm:text-sm font-bold bg-[#E8B85F]/20 text-[#E8B85F] rounded-full border border-[#E8B85F]/30">
                    {resource.type}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                  {resource.desc}
                </p>

                <Link
                  href={resource.link}
                  target="_blank"
                  className="mt-4 inline-flex items-center text-[#E8B85F] text-lg font-bold hover:gap-4 transition-all duration-300"
                >
                  {resource.type === "Downloadable" ? "Download Free" : "View Guide"} <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA — NOW 100% RESPONSIVE & FLAWLESS */}
      <section className="py-20 sm:py-28 lg:py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="relative p-10 sm:p-16 lg:p-20 rounded-3xl bg-gradient-to-br from-[#E8B85F] to-[#d4a44e] shadow-2xl overflow-hidden">
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/40 dark:bg-[#1C1C30]/60" />

            <div className="relative z-10 flex flex-col items-center gap-8">
              {/* Responsive Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl leading-tight px-4">
                Want Custom Templates?
              </h2>

              {/* Responsive Paragraph */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow-lg max-w-3xl mx-auto px-6 leading-relaxed">
                Need a specific template, checklist, or guide that doesn’t exist yet? Tell us — we’ll build it for you.
              </p>

              {/* THE UNBREAKABLE BUTTON */}
              <Link
                href="/contact"
                className="w-full sm:w-auto max-w-md mx-auto px-8 sm:px-12 py-5 sm:py-6 
                     bg-white text-[#1C1C30] 
                     text-base sm:text-lg lg:text-xl font-bold 
                     rounded-full 
                     shadow-2xl 
                     hover:bg-gray-100 hover:scale-105 
                     transition-all duration-300 
                     flex items-center justify-center 
                     gap-3 
                     whitespace-nowrap 
                     overflow-hidden"
              >
                <span className="truncate">Request Custom Resource</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}