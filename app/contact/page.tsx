'use client';

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react";
import { poppins } from "../fonts";
import Link from "next/link";

export default function Contact() {
  return (
    <main className={`${poppins.className} min-h-screen bg-white dark:bg-[#1C1C30] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-x-hidden`}>
      
      {/* Hero Section */}
      <section className="mt-20 relative py-20 sm:py-32 px-6 lg:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <motion.div
            className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 sm:w-[800px] sm:h-[800px] bg-[#E8B85F] rounded-full blur-3xl"
            animate={{ y: [0, -60, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
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
            Get in <span className="text-[#E8B85F]">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Have questions, feedback, or need personalized guidance? Reach out to ScholarBrood, we’re here to help you succeed.
          </p>
        </motion.div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 sm:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-10 sm:space-y-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E8B85F] leading-tight">
              Contact Information
            </h2>

            <div className="space-y-8 text-base sm:text-lg">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-[#E8B85F]/10 text-[#E8B85F] flex-shrink-0">
                  <MapPin className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">Myrtle Beach, SC, USA</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-[#E8B85F]/10 text-[#E8B85F] flex-shrink-0">
                  <Phone className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">+1 (843) 555-0192</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-[#E8B85F]/10 text-[#E8B85F] flex-shrink-0">
                  <Mail className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <Link 
                    href="mailto:hello@scholarbrood.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#E8B85F] transition mt-1 block"
                  >
                    hello@scholarbrood.com
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form — NOW 100% RESPONSIVE */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-gray-50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-2xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="absolute -inset-1 bg-[#E8B85F] blur-3xl opacity-10 -z-10" />

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-6 py-5 rounded-2xl bg-white dark:bg-[#1C1C30]/70 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:border-[#E8B85F] focus:outline-none focus:ring-4 focus:ring-[#E8B85F]/20 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-6 py-5 rounded-2xl bg-white dark:bg-[#1C1C30]/70 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:border-[#E8B85F] focus:outline-none focus:ring-4 focus:ring-[#E8B85F]/20 transition"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                required
                className="w-full px-6 py-5 rounded-2xl bg-white dark:bg-[#1C1C30]/70 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:border-[#E8B85F] focus:outline-none focus:ring-4 focus:ring-[#E8B85F]/20 transition resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 rounded-2xl bg-[#E8B85F] text-[#1C1C30] font-bold text-lg sm:text-xl shadow-2xl hover:bg-[#d4a44e] transition-all duration-300 flex items-center justify-center gap-3"
              >
                Send Message <Send className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 sm:py-24 px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10564.5344310645!2d-78.901645!3d33.687847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89007a3c6a7b3e8d%3A0x7b3e8d6a7b3e8d6a!2sMyrtle%20Beach%2C%20SC!5e0!3m2!1sen!2sus!4v1699999999999"
            width="100%"
            height="480"
            className="border-0 w-full grayscale contrast-125 opacity-90"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ScholarBrood Location - Myrtle Beach, SC"
          />
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="relative p-12 sm:p-20 rounded-3xl bg-gradient-to-br from-[#E8B85F] to-[#d4a44e] shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/40 dark:bg-[#1C1C30]/60" />
            <div className="relative z-10 flex flex-col items-center gap-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl leading-tight px-4">
                Ready to Transform Your Writing?
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow-lg max-w-3xl mx-auto px-6">
                Whether you're a student, researcher, or professor — we’re here to help you write with confidence and clarity.
              </p>
              <Link
                href="/services"
                className="w-full sm:w-auto max-w-md mx-auto px-10 sm:px-12 py-5 sm:py-6 bg-white text-[#1C1C30] text-base sm:text-lg lg:text-xl font-bold rounded-full shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap"
              >
                Explore Our Services <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}