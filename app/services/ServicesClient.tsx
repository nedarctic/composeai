'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, PenTool, FileSearch, Edit3, GraduationCap, ArrowRight } from "lucide-react";
import { poppins } from "../fonts";

export default function ServicesClient() {
  return (
    <main className={`${poppins.className} min-h-screen bg-white dark:bg-[#1C1C30] text-gray-900 dark:text-gray-100 transition-colors duration-500`}>

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-6 lg:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E8B85F] rounded-full blur-3xl opacity-10 dark:opacity-20" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E8B85F] rounded-full blur-3xl opacity-10 dark:opacity-20" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative max-w-6xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Achieve Academic Excellence With Expert Writing & Research Support
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            From academic papers to full research projects and journal publication — ScholarBrood gives you the professional support you need to succeed.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center px-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-[#E8B85F] text-[#1C1C30] font-bold text-lg rounded-full hover:bg-[#d4a44e] hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-3 whitespace-nowrap"
            >
              Get Academic Help Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-5 border-2 border-[#E8B85F] text-[#E8B85F] font-bold text-lg rounded-full hover:bg-[#E8B85F]/10 transition-all duration-300 whitespace-nowrap"
            >
              Request Research Support
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Sections */}
      <section className="py-16 sm:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">

          {/* Reusable Section Component for Clean Code */}
          {[
            {
              title: "1. Academic Writing Services",
              desc: "We deliver clear, original, and well-structured academic papers for high school, undergraduate, master’s, and doctoral students.",
              items: [
                "Essays, term papers, and reports",
                "Coursework and assignments",
                "Case studies and literature reviews",
                "Thesis chapters & dissertation sections",
                "Capstone and final-year project writing"
              ],
              benefits: ["Plagiarism-free content", "Accurate referencing (APA, MLA, Chicago, Harvard)", "Timely delivery for urgent work", "Personalized writing based on your instructions"],
              icon: <PenTool className="w-28 h-28 sm:w-32 sm:h-32 text-[#E8B85F] opacity-70" />,
              reverse: false
            },
            {
              title: "2. Research Writing & Scholarly Support",
              desc: "We offer expert guidance throughout the research process, ensuring your work is academically strong, well-designed, and professionally presented.",
              items: [
                "Topic selection & refinement",
                "Proposal development",
                "Methodology design (qualitative, quantitative, mixed methods)",
                "Data collection guidance",
                "Data analysis (SPSS, STATA, R, NVivo, Excel)",
                "Thesis & dissertation support",
                "Research coaching and concept clarification"
              ],
              icon: <FileSearch className="w-28 h-28 sm:w-32 sm:h-32 text-[#E8B85F] opacity-70" />,
              reverse: true
            },
            {
              title: "3. Publication Processing Services",
              desc: "We help researchers, postgraduate students, and professionals prepare manuscripts for reputable journals and academic platforms.",
              items: [
                "Manuscript development & formatting",
                "Journal selection guidance",
                "Compliance with journal submission guidelines",
                "Editing for clarity, structure, and flow",
                "Response to reviewer comments",
                "Final submission preparation"
              ],
              benefits: ["Professional-quality manuscripts", "Correct formatting and referencing", "Improved acceptance chances"],
              icon: <GraduationCap className="w-28 h-28 sm:w-32 sm:h-32 text-[#E8B85F] opacity-70" />,
              reverse: false
            },
            {
              title: "4. Editing, Proofreading & Rewriting",
              desc: "We refine your document to meet academic standards by improving clarity, logic, structure, grammar, and academic tone.",
              items: [
                "Proofreading",
                "Substantive editing",
                "Rewriting to improve originality and coherence",
                "Reference checks and citation accuracy",
                "Turnitin-safe content improvement"
              ],
              icon: <Edit3 className="w-28 h-28 sm:w-32 sm:h-32 text-[#E8B85F] opacity-70" />,
              reverse: true
            }
          ].map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 px-4">
                {section.title}
              </h2>

              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${section.reverse ? "lg:flex-row-reverse" : ""}`}>
                {/* Text Content */}
                <div className="order-2 lg:order-none px-4 sm:px-0">
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    {section.desc}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-[#E8B85F] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {section.benefits && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {section.benefits.map((b) => (
                        <div key={b} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#E8B85F]" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Icon Card */}
                <div className="order-1 lg:order-none p-8 sm:p-10 bg-gray-100/50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-3xl flex items-center justify-center">
                  {section.icon}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Why Choose Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-16 sm:py-20 px-6 sm:px-12 bg-gradient-to-br from-[#E8B85F]/10 to-transparent dark:from-[#E8B85F]/5 rounded-3xl border border-[#E8B85F]/20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
              Why Choose ScholarBrood?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {[
                "Experienced academic and research experts",
                "High-quality, confidential, plagiarism-free work",
                "Affordable student-friendly pricing",
                "Fast delivery with dedicated support",
                "Humanized writing that passes AI detection"
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#E8B85F] flex-shrink-0" />
                  <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="relative p-8 sm:p-16 md:p-20 rounded-3xl bg-gradient-to-br from-[#E8B85F] to-[#d4a44e] shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[#1C1C30]/40 dark:bg-black/40" />

            <div className="relative z-10">
              {/* Title */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C30] dark:text-white mb-6 leading-tight">
                Start Your Academic Journey With Confidence
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-[#1C1C30]/90 dark:text-white/90 mb-10 max-w-3xl mx-auto px-2 sm:px-4">
                Whether you need academic writing, research support, or publication processing,
                ScholarBrood is here to help you succeed.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-[#1C1C30] text-[#E8B85F] 
                       text-base sm:text-lg md:text-xl font-bold rounded-full hover:bg-[#1C1C30]/90 
                       hover:scale-105 shadow-2xl transition-all duration-300 text-center"
                >
                  Request Expert Help Today
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 border-2 md:border-4 border-[#1C1C30] 
                       text-[#1C1C30] dark:text-white text-base sm:text-lg md:text-xl font-bold rounded-full 
                       hover:bg-[#1C1C30] hover:text-[#E8B85F] transition-all duration-300 text-center"
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