'use client';

import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pt-16 pb-8 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 -left-32 w-72 h-72 bg-linear-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 -right-32 w-72 h-72 bg-linear-to-r from-pink-400 to-yellow-400 rounded-full blur-3xl opacity-20"
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-0 z-10">
        {/* Branding + tagline */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 mb-2">
            ComposeAI
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
            Empower your writing with AI. Create faster, smarter, and with more impact.
          </p>
          <div className="mt-4 flex gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row gap-12 w-full lg:w-auto">
          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Updates", "Integrations"],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Blog", "Contact"],
            },
            {
              title: "Resources",
              links: ["Guides", "Case Studies", "Support", "Help Center"],
            },
          ].map((section) => (
            <div key={section.title} className="flex flex-col">
              <h4 className="text-gray-900 dark:text-gray-100 font-semibold mb-3">{section.title}</h4>
              <ul className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4, color: "#6366f1" }}
                      className="transition-all duration-200"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} ComposeAI. All rights reserved.</p>
        <div className="flex gap-6 mt-4 lg:mt-0">
          {["Privacy Policy", "Terms of Service", "Cookies"].map((link) => (
            <motion.a
              key={link}
              href="#"
              whileHover={{ color: "#6366f1" }}
              className="transition-colors duration-200"
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
