'use client';

import { motion } from "framer-motion";
import { FileText, ClipboardList, PenTool, Download, FileCheck, BookOpenText } from "lucide-react";
import { poppins } from "../fonts";
import Link from "next/link";

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
      desc: "Pro-level editing, structure, and style checklists used by published academics to polish drafts into A-grade (or publication-ready) work.",
      icon: <ClipboardList className="w-12 h-12" />,
      type: "Downloadable",
      link: "/resources/writing-checklists.pdf",
    },
    {
      title: "Argument & Structure Blueprint",
      desc: "Visual frameworks and sentence starters to build rock-solid arguments, compelling introductions, and logical flow in any paper.",
      icon: <PenTool className="w-12 h-12" />,
      type: "Guide",
      link: "/resources/argument-blueprint.pdf",
    },
    {
      title: "Citation Style Quick-Reference Pack",
      desc: "One-page cheat sheets for APA 7, MLA 9, Chicago, Harvard, and IEEE — plus common examples and tricky cases solved.",
      icon: <FileCheck className="w-12 h-12" />,
      type: "Downloadable",
      link: "/resources/citation-cheat-sheets.pdf",
    },
    {
      title: "Literature Review Template Kit",
      desc: "Synthesis matrix, thematic outline templates, and phrasing banks to write reviews that impress supervisors and reviewers.",
      icon: <BookOpenText className="w-12 h-12" />,
      type: "Downloadable",
      link: "/resources/literature-review-kit.zip",
    },
    {
      title: "Professional Email & Proposal Templates",
      desc: "Polished templates for grant applications, supervisor emails, conference submissions, and job/academic cover letters.",
      icon: <Download className="w-12 h-12" />,
      type: "Downloadable",
      link: "/resources/professional-templates.zip",
    },
  ];

  return (
    <main className={`${poppins.className} min-h-screen bg-[#1C1C30] text-gray-100 overflow-x-hidden`}>
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#E8B85F] rounded-full blur-3xl opacity-10"
            animate={{ y: [0, -50, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
        >
          Free <span className="text-[#E8B85F]">Writing Resources</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          Expert-crafted templates, checklists, and guides used by thousands of students and academics to write faster, clearer, and at a higher level — completely free.
        </motion.p>
      </section>

      {/* Resources Grid */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {resources.map((resource, i) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              whileHover={{ y: -16, scale: 1.04 }}
              className="group relative p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-gray-800 hover:border-[#E8B85F]/40 overflow-hidden transition-all duration-500 shadow-2xl"
            >
              {/* Gold glow effect */}
              <div className="absolute inset-0 bg-[#E8B85F] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
              <div className="absolute -inset-1 bg-[#E8B85F] rounded-3xl blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10" />

              <div className="relative z-10 flex flex-col items-start gap-6">
                <div className="p-5 rounded-2xl bg-[#E8B85F]/10 text-[#E8B85F] group-hover:bg-[#E8B85F]/20 transition-all duration-300">
                  {resource.icon}
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {resource.title}
                  </h3>
                  <span className="inline-block px-4 py-1.5 text-sm font-medium bg-[#E8B85F]/20 text-[#E8B85F] rounded-full border border-[#E8B85F]/30">
                    {resource.type}
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed">{resource.desc}</p>

                <Link
                  href={resource.link}
                  target="_blank"
                  className="mt-6 inline-flex items-center text-[#E8B85F] text-lg font-bold hover:gap-4 transition-all duration-300"
                >
                  {resource.type === "Downloadable" ? "Download Free" : "View Guide"} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="relative p-16 rounded-3xl bg-gradient-to-br from-[#E8B85F] to-[#d4a44e] shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[#1C1C30] opacity-40" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C30] mb-6">
                Want Custom Templates?
              </h2>
              <p className="text-xl md:text-2xl text-[#1C1C30]/90 mb-10 max-w-3xl mx-auto">
                Need a specific template, checklist, or guide that doesn’t exist yet? Tell us — we’ll build it for you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-12 py-6 bg-[#1C1C30] text-[#E8B85F] text-xl font-bold rounded-full hover:bg-[#1C1C30]/90 hover:scale-105 shadow-2xl transition-all duration-300"
              >
                Request Custom Resource
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}