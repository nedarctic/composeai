"use client";

import { FaPaypal } from "react-icons/fa";
import { motion } from "framer-motion";
import { oswald } from "../fonts";
import { ArrowRight, Paperclip, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

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
              className={`${oswald.className} text-gray-100 w-full p-4 rounded-xl bg-white/10 border border-white/30 focus:ring focus:ring-[#E8B85F]/60 outline-none`}
            >
              <option>Academic Writing Support</option>
              <option className="text-black">Research Assistance (Projects, Thesis, Dissertations)</option>
              <option className="text-black">Publication & Journal Support</option>
              <option className="text-black">Editing, Review & Proofreading</option>
              <option className="text-black">General Consultation</option>
            </select>
          </div>

          {/* Name */}
          <div className="mb-6">
            <label className={`${oswald.className} block mb-2 font-semibold`}>
              Full Name
            </label>
            <input
              type="text"
              className={`${oswald.className} w-full p-4 rounded-xl bg-white/10 border border-white/30 focus:ring focus:ring-[#E8B85F]/60 outline-none`}
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
              className={`${oswald.className} w-full p-4 rounded-xl bg-white/10 border border-white/30 focus:ring focus:ring-[#E8B85F]/60 outline-none`}
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
              className={`${oswald.className} w-full p-4 rounded-xl bg-white/10 border border-white/30 focus:ring focus:ring-[#E8B85F]/60 outline-none`}
              placeholder="Provide as much detail as possible…"
            />
          </div>

          {/* Attachments & Links */}
          <div className="mb-10 space-y-6">

            {/* File Upload */}
            <div>
              <label className={`${oswald.className} block mb-2 font-semibold`}>
                Attach files (optional)
              </label>

              <label className="flex items-center justify-center gap-3 w-full p-4 rounded-xl bg-white/10 border border-dashed border-white/40 cursor-pointer hover:bg-white/20 transition">
                <Paperclip className="w-5 h-5 opacity-80" />
                <span className={`${oswald.className} text-sm opacity-90`}>
                  Upload documents (PDF, DOCX, ZIP)
                </span>
                <input
                  type="file"
                  multiple
                  className="hidden"
                />
              </label>
            </div>

            {/* External Links */}
            <div>
              <label className={`${oswald.className} block mb-2 font-semibold`}>
                External links (optional)
              </label>

              <div className="relative">
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70" />
                <input
                  type="url"
                  className={`${oswald.className} w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/30 focus:ring focus:ring-[#E8B85F]/60 outline-none`}
                  placeholder="Paste Google Docs, Drive, Dropbox, GitHub, etc."
                />
              </div>
            </div>

          </div>


          {/* Submit Button */}
          <button
            className={`${oswald.className} w-full flex justify-center items-center gap-3 bg-[#E8B85F] text-[#1C1C30] font-bold text-lg py-4 rounded-full hover:bg-[#d4a44e] hover:scale-[1.02] transition-all`}
          >
            Submit Request <ArrowRight className="w-5 h-5" />
          </button>
          {/* PayPal Payment Option */}
          <div className="mt-10 pt-6 border-t border-white/20 text-center space-y-3">

            <p className={`${oswald.className} text-sm opacity-80`}>
              Prefer to make a payment or consultation deposit?
            </p>

            <Link
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=scholarbrood1@gmail.com&item_name=Academic+Consultation&amount=50&currency_code=USD"
              target="_blank"
              rel="noopener noreferrer"
              className={`${oswald.className} inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 text-[#003087] font-semibold hover:scale-105 transition`}
            >
              <FaPaypal className="w-5 h-5" />
              Pay with PayPal
            </Link>

            <p className={`${oswald.className} text-xs opacity-60`}>
              PayPal: scholarbrood1@gmail.com
            </p>
          </div>

        </motion.form>
      </div>
    </section>
  );
}
