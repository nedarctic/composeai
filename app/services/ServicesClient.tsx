'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, PenTool, FileSearch, Edit3, GraduationCap, ArrowRight } from "lucide-react";
import { poppins } from "../fonts";

export default function Services() {
  return (
    <main className={`${poppins.className} min-h-screen bg-[#1C1C30] text-gray-100`}>
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E8B85F] rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E8B85F] rounded-full blur-3xl opacity-10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative max-w-6xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            Achieve Academic Excellence With Expert Writing & Research Support
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From academic papers to full research projects and journal publication — ScholarBrood gives you the professional support you need to succeed.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-[#E8B85F] text-[#1C1C30] font-bold text-lg rounded-full hover:bg-[#d4a44e] hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-3"
            >
              Get Academic Help Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 border-2 border-[#E8B85F] text-[#E8B85F] font-bold text-lg rounded-full hover:bg-[#E8B85F]/10 transition-all duration-300"
            >
              Request Research Support
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Sections */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-32">

          {/* 1. Academic Writing Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              1. Academic Writing Services
            </h2>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  We deliver clear, original, and well-structured academic papers for high school, undergraduate, master’s, and doctoral students.
                </p>
                <ul className="space-y-4">
                  {[
                    "Essays, term papers, and reports",
                    "Coursework and assignments",
                    "Case studies and literature reviews",
                    "Thesis chapters & dissertation sections",
                    "Capstone and final-year project writing"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#E8B85F] flex-shrink-0 mt-1" />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {["Plagiarism-free content", "Accurate referencing (APA, MLA, Chicago, Harvard)", "Timely delivery for urgent work", "Personalized writing based on your instructions"].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E8B85F]" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-10 bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl flex items-center justify-center">
                <PenTool className="w-32 h-32 text-[#E8B85F] opacity-70" />
              </div>
            </div>
          </motion.div>

          {/* 2. Research Writing & Support */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              2. Research Writing & Scholarly Support
            </h2>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 p-10 bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl flex items-center justify-center">
                <FileSearch className="w-32 h-32 text-[#E8B85F] opacity-70" />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  We offer expert guidance throughout the research process, ensuring your work is academically strong, well-designed, and professionally presented.
                </p>
                <ul className="space-y-4">
                  {[
                    "Topic selection & refinement",
                    "Proposal development",
                    "Methodology design (qualitative, quantitative, mixed methods)",
                    "Data collection guidance",
                    "Data analysis (SPSS, STATA, R, NVivo, Excel)",
                    "Thesis & dissertation support",
                    "Research coaching and concept clarification"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#E8B85F] flex-shrink-0 mt-1" />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 3. Publication Processing Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              3. Publication Processing Services
            </h2>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <ul className="space-y-4 mb-8">
                  {[
                    "Manuscript development & formatting",
                    "Journal selection guidance",
                    "Compliance with journal submission guidelines",
                    "Editing for clarity, structure, and flow",
                    "Response to reviewer comments",
                    "Final submission preparation"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#E8B85F] flex-shrink-0 mt-1" />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {["Professional-quality manuscripts", "Correct formatting and referencing", "Improved acceptance chances"].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E8B85F]" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-10 bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl flex items-center justify-center">
                <GraduationCap className="w-32 h-32 text-[#E8B85F] opacity-70" />
              </div>
            </div>
          </motion.div>

          {/* 4. Editing, Proofreading & Rewriting */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              4. Editing, Proofreading & Rewriting
            </h2>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 p-10 bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl flex items-center justify-center">
                <Edit3 className="w-32 h-32 text-[#E8B85F] opacity-70" />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  We refine your document to meet academic standards by improving clarity, logic, structure, grammar, and academic tone.
                </p>
                <ul className="space-y-4">
                  {[
                    "Proofreading",
                    "Substantive editing",
                    "Rewriting to improve originality and coherence",
                    "Reference checks and citation accuracy",
                    "Turnitin-safe content improvement"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#E8B85F] flex-shrink-0 mt-1" />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Why Choose ScholarBrood */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-20 px-12 bg-gradient-to-br from-[#E8B85F]/10 to-transparent rounded-3xl border border-[#E8B85F]/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Why Choose ScholarBrood?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                "Experienced academic and research experts",
                "High-quality, confidential, plagiarism-free work",
                "Affordable student-friendly pricing",
                "Fast delivery with dedicated support",
                "Humanized writing that passes AI detection"
              ].map((item) => (
                <div key={item} className="flex items-start gap-5">
                  <CheckCircle2 className="w-8 h-8 text-[#E8B85F] flex-shrink-0" />
                  <p className="text-xl text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="relative p-16 rounded-3xl bg-gradient-to-br from-[#E8B85F] to-[#d4a44e] shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[#1C1C30] opacity-40" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C30] mb-6">
                Start Your Academic Journey With Confidence
              </h2>
              <p className="text-xl md:text-2xl text-[#1C1C30]/90 mb-10 max-w-3xl mx-auto">
                Whether you need academic writing, research support, or publication processing, ScholarBrood is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="https://www.scholarbrood.com"
                  className="inline-flex items-center justify-center px-12 py-5 bg-[#1C1C30] text-[#E8B85F] text-xl font-bold rounded-full hover:bg-[#1C1C30]/90 hover:scale-105 shadow-2xl transition-all duration-300"
                >
                  Request Expert Help Today
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-12 py-5 border-2 border-[#1C1C30] text-[#1C1C30] text-xl font-bold rounded-full hover:bg-[#1C1C30] hover:text-[#E8B85F] transition-all duration-300"
                >
                  Start Publication Processing
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}