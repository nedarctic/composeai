'use client';

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { poppins } from "../fonts";

export default function Contact() {
  return (
    <main className={`${poppins.className} min-h-screen bg-[#1C1C30] text-gray-100 overflow-x-hidden`}>
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#E8B85F] rounded-full blur-3xl opacity-10"
            animate={{ y: [0, -60, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
        >
          Get in <span className="text-[#E8B85F]">Touch</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          Have questions, feedback, or need personalized guidance? Reach out to ScholarBrood — we’re here to help you succeed.
        </motion.p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#E8B85F]">
              Contact Information
            </h2>

            <div className="space-y-8 text-lg">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-[#E8B85F]/10 text-[#E8B85F]">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-300">Myrtle Beach, SC, USA</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-[#E8B85F]/10 text-[#E8B85F]">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-300">+1 (843) 555-0192</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-[#E8B85F]/10 text-[#E8B85F]">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">hello@scholarbrood.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative p-10 lg:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-gray-800 shadow-2xl overflow-hidden"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Subtle gold glow */}
            <div className="absolute -inset-1 bg-[#E8B85F] blur-3xl opacity-10 -z-10" />

            <div className="space-y-8">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-6 py-5 rounded-2xl bg-[#1C1C30]/80 border border-gray-700 focus:border-[#E8B85F] text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#E8B85F]/20 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-6 py-5 rounded-2xl bg-[#1C1C30]/80 border border-gray-700 focus:border-[#E8B85F] text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#E8B85F]/20 transition"
              />
              <textarea
                placeholder="Your Message"
                rows={7}
                required
                className="w-full px-6 py-5 rounded-2xl bg-[#1C1C30]/80 border border-gray-700 focus:border-[#E8B85F] text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#E8B85F]/20 transition resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 rounded-2xl bg-[#E8B85F] text-[#1C1C30] font-bold text-xl shadow-2xl hover:bg-[#d4a44e] transition-all duration-300 flex items-center justify-center gap-3"
              >
                Send Message
                <Send className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-800"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10564.5344310645!2d-78.901645!3d33.687847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89007a3c6a7b3e8d%3A0x7b3e8d6a7b3e8d6a!2sMyrtle%20Beach%2C%20SC!5e0!3m2!1sen!2sus!4v1699999999999"
            width="100%"
            height="500"
            className="border-0 grayscale contrast-125 opacity-90"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>
    </main>
  );
}