'use client';

import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 dark:bg-[#1C1C30] pt-20 pb-10 px-6 overflow-hidden">
      {/* Subtle Gold Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <motion.div
          className="absolute top-10 -left-40 w-96 h-96 bg-[#E8B85F] rounded-full blur-3xl"
          animate={{ x: [0, 80, 0], y: [0, -50, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 -right-40 w-80 h-80 bg-[#E8B85F]/70 rounded-full blur-3xl"
          animate={{ x: [0, -70, 0], y: [0, 60, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 z-10">
        {/* Branding & Newsletter */}
        <div className="flex flex-col items-start gap-6 max-w-md">
          {/* Logo */}
          <h3 className="text-3xl font-bold text-[#E8B85F]">
            ScholarBrood
          </h3>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Empower your writing and research. Build skills faster, smarter, and with more impact.
          </p>

          {/* Social Icons – Gold on hover */}
          <div className="flex gap-5">
            {[
              { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
              { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
            ].map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25, color: "#E8B85F" }}
                className="text-gray-600 dark:text-gray-400 transition-colors"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <MapPin className="w-5 h-5 text-[#E8B85F]" />
            <span>Myrtle Beach, SC</span>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-sm">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1C1C30]/80 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E8B85F] focus:border-transparent transition"
              />
              <button className="px-6 py-3 rounded-xl bg-[#E8B85F] text-[#1C1C30] font-bold hover:bg-[#d4a44e] transform hover:scale-105 transition-all duration-200 shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-16">
          {[
            {
              title: "Services",
              links: [
                { name: "Academic Writing Support", href: "/services/academic-writing-support" },
                { name: "Research Mentorship", href: "/services/research-mentorship" },
                { name: "AI & Online Skills Training", href: "/services/ai-online-skills-training" },
                { name: "Pricing / Packages", href: "/pricing" },
              ],
            },
            {
              title: "Company",
              links: [
                { name: "About", href: "/about" },
                { name: "Blog / Insights", href: "/blog" },
                { name: "Resources", href: "/resources" },
                { name: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Legal",
              links: [
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Use", href: "/terms" },
                { name: "Accessibility Statement", href: "/accessibility" },
              ],
            },
          ].map((section) => (
            <div key={section.title} className="flex flex-col">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 6, color: "#E8B85F" }}
                      className="text-gray-600 dark:text-gray-400 transition-all duration-200"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} ScholarBrood. All rights reserved.</p>
        <div className="flex gap-8 mt-4 lg:mt-0">
          {["Privacy Policy", "Terms of Use", "Accessibility Statement"].map((text) => (
            <motion.a
              key={text}
              href={`/${text.toLowerCase().replace(/\s/g, "-")}`}
              whileHover={{ color: "#E8B85F" }}
              className="transition-colors duration-200"
            >
              {text}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}