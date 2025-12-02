"use client";

import { Check, Zap, Star, Crown } from "lucide-react";
import { oswald, poppins } from "../fonts";
import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <section className="relative min-h-screen px-6 sm:px-10 lg:px-20 py-32 bg-black text-white overflow-hidden">

      {/* Background Image + Overlay */}
      <img
        src="/3.jpg"
        alt="Pricing Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
      />
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Page Heading */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-20">
        <h1
          className={`${oswald.className} text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6`}
        >
          Choose Your Ideal Research & Writing Plan
        </h1>
        <p className={`${oswald.className} text-lg sm:text-xl text-gray-300`}>
          Transparent pricing designed for students and professionals who value 
          expert academic support and premium research quality.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* Left Plan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#111]/60 border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-7 h-7 text-[#E8B85F]" />
            <h2 className={`${oswald.className} text-3xl font-bold`}>
              Starter
            </h2>
          </div>

          <p className={`${oswald.className} text-gray-300 mb-8`}>
            Ideal for short academic tasks and basic writing needs.
          </p>

          <div className="text-5xl font-bold mb-8">
            $29<span className={`${oswald.className} text-lg text-gray-400 font-normal`}>/task</span>
          </div>

          <ul className="space-y-4 text-gray-300 mb-10">
            <li className={`${oswald.className} flex items-center gap-2`}>
              <Check className="text-[#E8B85F]" /> Essays & summaries
            </li>
            <li className={`${oswald.className} flex items-center gap-2`}>
              <Check className="text-[#E8B85F]" /> Basic proofreading
            </li>
            <li className={`${oswald.className} flex items-center gap-2`}>
              <Check className="text-[#E8B85F]" /> APA/MLA formatting
            </li>
          </ul>

          <button className={`${oswald.className} mt-auto w-full py-4 rounded-full bg-white/10 hover:bg-white/20 transition-all font-semibold`}>
            Get Starter
          </button>
        </motion.div>

        {/* PRO — Spotlight Plan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
          className="bg-[#1A1A1A]/80 border border-[#E8B85F]/40 rounded-3xl p-12 shadow-[0_0_60px_-10px_rgba(232,184,95,0.6)] scale-105 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#E8B85F]/10 to-transparent pointer-events-none" />

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <Crown className="w-8 h-8 text-[#E8B85F]" />
            <h2 className={`${oswald.className} text-4xl font-bold`}>
              Pro (Most Popular)
            </h2>
          </div>

          <p className={`${oswald.className} text-gray-200 mb-8 relative z-10`}>
            Best for consistent academic work, research support, and long-form writing.
          </p>

          <div className="text-6xl font-bold mb-8 relative z-10">
            $79<span className={`${oswald.className} text-xl text-gray-400 font-normal`}>/project</span>
          </div>

          <ul className="space-y-4 text-gray-200 mb-10 relative z-10">
            <li className={`${oswald.className} flex items-center gap-2`}>
              <Check className="text-[#E8B85F]"     /> Full academic writing
            </li>
            <li className={`${oswald.className} flex items-center gap-2`}>
              <Check className="text-[#E8B85F]" /> In-depth research synthesis
            </li>
            <li className={`${oswald.className} flex items-center gap-2`}>
              <Check className="text-[#E8B85F]" /> Unlimited revisions
            </li>
            <li className={`${oswald.className} flex items-center gap-2`}>
              <Check className="text-[#E8B85F]" /> Priority delivery
            </li>
          </ul>

          <button className={`${oswald.className} mt-auto w-full py-5 rounded-full bg-[#E8B85F] text-[#1C1C1C] font-bold hover:bg-[#d4a44e] transition-all text-lg`}>
            Choose Pro
          </button>
        </motion.div>

        {/* Right Plan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#111]/60 border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-7 h-7 text-[#E8B85F]" />
            <h2 className={`${oswald.className} text-3xl font-bold`}>
              Elite
            </h2>
          </div>

          <p className={`${oswald.className} text-gray-300 mb-8`}>
            Premium support for publication, theses, and complex research projects.
          </p>

          <div className="text-5xl font-bold mb-8">
            $199<span className={`${oswald.className} text-lg text-gray-400 font-normal`}>/project</span>
          </div>

          <ul className="space-y-4 text-gray-300 mb-10">
            <li className={`${oswald.className} flex items-center gap-2`}>
              <Check className="text-[#E8B85F]" /> Journal-ready formatting
            </li>
            <li className={`${oswald.className} flex items-center gap-2`}>
              <Check className="text-[#E8B85F]" /> Data-driven analysis
            </li>
            <li className={`${oswald.className} flex items-center gap-2`}>
              <Check className="text-[#E8B85F]" /> Plagiarism reporting
            </li>
            <li className={`${oswald.className} flex items-center gap-2`}>
              <Check className="text-[#E8B85F]" /> One-on-one consultations
            </li>
          </ul>

          <button className={`${oswald.className} mt-auto w-full py-4 rounded-full bg-white/10 hover:bg-white/20 transition-all font-semibold`}>
            Go Elite
          </button>
        </motion.div>

      </div>
    </section>
  );
}
