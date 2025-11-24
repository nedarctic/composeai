'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Twitter, Linkedin, Instagram, MapPin, Mail } from "lucide-react";
import { poppins } from "../fonts";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 dark:bg-[#1C1C30] pt-24 pb-12 px-6 overflow-hidden">
      {/* Animated Gold Orbs – Subtle & Elegant */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <motion.div
          className="absolute top-20 -left-48 w-96 h-96 bg-[#E8B85F]/40 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -80, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 -right-48 w-80 h-80 bg-[#E8B85F]/30 rounded-full blur-3xl"
          animate={{ x: [0, -90, 0], y: [0, 70, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-16 z-10">

        {/* LEFT: Brand Identity – Your Full Logo is now HERE */}
        <div className="flex flex-col items-start space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Golden Glow Halo */}
            <div className="absolute -inset-8 bg-[#E8B85F] rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />

            {/* Your Full SVG Logo – Beautifully Placed */}
            <div className="relative">
              <img
                src="/logo/scholarbrood-logo.svg"
                alt="ScholarBrood"
                className="w-auto h-56 md:h-64 drop-shadow-2xl 
                           transition-all duration-700 group-hover:scale-105"
              />
            </div>

            {/* Elegant Slogan */}
            <p className="mt-6 text-sm tracking-widest text-gray-600 dark:text-gray-400 uppercase font-medium">
              Academic Excellence Redefined
            </p>
          </motion.div>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
            Expert academic writing support, research guidance, and publication services trusted by students and researchers worldwide.
          </p>

          {/* Location & Contact */}
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#E8B85F]" />
              <span>Myrtle Beach, SC, USA</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#E8B85F]" />
              <a href="mailto:info@scholarbrood.com" className="hover:text-[#E8B85F] transition">
                info@scholarbrood.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            {[
              { Icon: Twitter, href: "https://twitter.com/scholarbrood" },
              { Icon: Linkedin, href: "https://linkedin.com/company/scholarbrood" },
              { Icon: Instagram, href: "https://instagram.com/scholarbrood" },
            ].map(({ Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.2 }}
                className="text-gray-600 dark:text-gray-400 hover:text-[#E8B85F] transition-all duration-300"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links Columns – Unchanged & Perfect */}
        {[
          {
            title: "Services",
            links: [
              "Academic Writing Help",
              "Thesis & Dissertation",
              "Research Support",
              "Publication Processing",
              "Editing & Proofreading",
            ],
            hrefs: ["/services", "/services", "/services", "/services", "/services"]
          },
          {
            title: "Company",
            links: ["About Us", "Blog", "Resources", "Testimonials", "Contact"],
            hrefs: ["/about", "/blog", "/resources", "/testimonials", "/contact"]
          },
          {
            title: "Support",
            links: ["Help Center", "Privacy Policy", "Terms of Service", "Refund Policy", "FAQs"],
            hrefs: ["/help", "/privacy-policy", "/terms", "/refund", "/faqs"]
          },
        ].map((column, i) => (
          <motion.div
            key={column.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="space-y-6"
          >
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">
              {column.title}
            </h3>
            <ul className="space-y-3">
              {column.links.map((text, idx) => (
                <li key={text}>
                  <Link
                    href={column.hrefs[idx]}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#E8B85F] transition-colors duration-200 text-sm leading-relaxed"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Newsletter – Clean & Elegant */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get academic tips, writing guides, and exclusive offers.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-2xl bg-white dark:bg-[#1C1C30]/70 border border-gray-300 dark:border-gray-700
                       text-gray-900 dark:text-gray-100 placeholder-gray-500
                       focus:outline-none focus:ring-2 focus:ring-[#E8B85F] focus:border-transparent
                       transition-all duration-300"
            />
            <button className="px-7 py-4 rounded-2xl bg-[#E8B85F] text-[#1C1C30] font-bold hover:bg-[#d4a44e] hover:scale-105 transition-all duration-300 shadow-xl">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-20 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {currentYear} ScholarBrood. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                className="hover:text-[#E8B85F] transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}