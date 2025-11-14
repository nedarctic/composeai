'use client';

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { poppins } from "../fonts";

export default function Contact() {
  return (
    <main className={`${poppins.className} min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Have questions, feedback, or need assistance? Reach out to ScholarBrood and we’ll help you elevate your writing, research, and digital skills.
        </motion.p>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <p>Myrtle Beach, SC, USA</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-green-600" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-purple-600" />
              <p>info@scholarbrood.com</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.123456789!2d-78.885!3d33.689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabcdef!2sMyrtle%20Beach%2C%20SC!5e0!3m2!1sen!2sus!4v1699999999999"
            width="100%"
            height="450"
            className="border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>
    </main>
  );
}
