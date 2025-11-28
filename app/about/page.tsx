'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Award, PenTool, ArrowRight } from "lucide-react";
import { oswald } from "../fonts";

export default function About() {
  const features = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Writing Coaches",
      desc: "Work directly with published academics and professional editors who provide clear, actionable feedback on your writing.",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Proven Results",
      desc: "Over 12,000 students and professionals have dramatically improved their academic and professional writing with our methods.",
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Structured Writing Programs",
      desc: "Carefully designed tutorials, templates, exercises, and progressive pathways that turn beginners into confident, polished writers.",
    },
  ];

  return (
    <main className={`${oswald.className} min-h-screen bg-white dark:bg-[#1C1C30] text-gray-900 dark:text-gray-100 transition-colors duration-500`}>
      
      {/* Hero with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 overflow-hidden">
        <img
          src="/8.jpg"
          alt="ScholarBrood Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-0" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-center max-w-5xl mx-auto text-white flex flex-col items-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            About <span className="text-[#E8B85F]">ScholarBrood</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 px-4">
            ScholarBrood is a premium learning platform dedicated to helping students, academics, and professionals master academic and professional writing.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#E8B85F] text-[#1C1C30] font-bold text-lg rounded-full hover:bg-[#d4a44e] hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-3"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* Mission + Image Section */}
      <section className="py-20 sm:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
          >
            <img
              src="/9.jpg"
              alt="ScholarBrood Team"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#E8B85F]">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              We transform the way people write — from struggling with structure and clarity to producing compelling, publication-ready work with confidence.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Through tutorials, templates, exercises, and one-on-one editorial feedback, we help writers at every level achieve clarity, precision, and impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Why Choose <span className="text-[#E8B85F]">ScholarBrood</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            We deliver human-centered writing education — proven by thousands of transformed writers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ y: -12, scale: 1.04 }}
              className="group relative p-8 sm:p-10 rounded-3xl bg-gray-50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-gray-800 hover:border-[#E8B85F]/40 overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[#E8B85F] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
              <div className="absolute -inset-1 bg-[#E8B85F] rounded-3xl blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10" />

              <div className="relative z-10 flex flex-col items-start gap-6">
                <div className="p-4 rounded-2xl bg-[#E8B85F]/10 text-[#E8B85F] group-hover:bg-[#E8B85F]/20 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 sm:py-32 px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="relative p-10 sm:p-16 rounded-3xl bg-[#E8B85F] shadow-2xl overflow-hidden text-center">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-6">
                Start Writing at a Higher Level
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 drop-shadow-lg mb-10 max-w-3xl mx-auto px-4">
                Join thousands of writers who have elevated their craft with ScholarBrood’s expert-led programs and personal feedback.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 sm:px-12 py-5 sm:py-6 bg-white text-[#1C1C30] text-lg sm:text-xl font-bold rounded-full shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 gap-3 whitespace-nowrap"
              >
                Get in Touch <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
