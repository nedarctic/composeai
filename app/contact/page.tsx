"use client";

import { motion } from "framer-motion";
import { oswald } from "../fonts";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src="/Rest easy with us in your writing, enjoy your service.jpg"
        alt="Rest easy with us in your writing, enjoy your service"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-[160px] pb-24 flex flex-col items-center">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center text-white"
        >
          <h1
            className={`${oswald.className} text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6`}
          >
            Request Professional Academic, Research & Publication Support
          </h1>

          <p
            className={`${oswald.className} text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90`}
          >
            Tell us what you need help with — our expert team will respond quickly with tailored guidance.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-full bg-white/10 backdrop-blur-xl mt-16 rounded-2xl p-8 sm:p-10 shadow-2xl text-white border border-white/20"
        >
          {/* Service Selector */}
          <div className="mb-8">
            <label className={`${oswald.className} block mb-3 text-lg font-semibold`}>
              Select the type of assistance you need
            </label>
            <select
              className="w-full p-4 rounded-xl bg-white/10 border border-white/30 focus:ring focus:ring-[#E8B85F]/60 outline-none"
            >
              <option>Academic Writing Support</option>
              <option>Research Assistance (Projects, Thesis, Dissertations)</option>
              <option>Publication & Journal Support</option>
              <option>Editing, Review & Proofreading</option>
              <option>General Consultation</option>
            </select>
          </div>

          {/* Name */}
          <div className="mb-6">
            <label className={`${oswald.className} block mb-2 font-semibold`}>
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/30 focus:ring focus:ring-[#E8B85F]/60 outline-none"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className={`${oswald.className} block mb-2 font-semibold`}>
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/30 focus:ring focus:ring-[#E8B85F]/60 outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Details */}
          <div className="mb-8">
            <label className={`${oswald.className} block mb-2 font-semibold`}>
              Describe your project or request
            </label>
            <textarea
              rows={6}
              className="w-full p-4 rounded-xl bg-white/10 border border-white/30 focus:ring focus:ring-[#E8B85F]/60 outline-none"
              placeholder="Provide as much detail as possible…"
            />
          </div>

          {/* Submit Button */}
          <button
            className={`${oswald.className} w-full flex justify-center items-center gap-3 bg-[#E8B85F] text-[#1C1C30] font-bold text-lg py-4 rounded-full hover:bg-[#d4a44e] hover:scale-[1.02] transition-all`}
          >
            Submit Request <ArrowRight className="w-5 h-5" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
