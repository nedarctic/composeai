'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaReddit, FaTumblr } from "react-icons/fa";
import { oswald } from "../fonts";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative bg-gray-50 dark:bg-[#1C1C30] pt-12 pb-12 px-6 overflow-hidden`}>
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-16 z-10">

        {/* LEFT: Brand Identity – Only location & social icons now */}
        <div className="flex flex-col items-start space-y-8">
          <p className={`${oswald.className} text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs`}>
            Expert academic writing support, research guidance, and publication services trusted by students and researchers worldwide.
          </p>

          {/* Location */}
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#E8B85F]" />
              <span className={`${oswald.className}`}>Myrtle Beach, SC, USA</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#E8B85F]" />
              <a href="mailto:info@scholarbrood.com" className={`${oswald.className} hover:text-[#E8B85F] transition`}>
                info@scholarbrood.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            {[
              { Icon: FaTwitter, href: "https://twitter.com/scholarbrood" },
              { Icon: FaLinkedin, href: "https://linkedin.com/company/scholarbrood" },
              { Icon: FaInstagram, href: "https://instagram.com/scholarbrood" },
              { Icon: FaFacebook, href: "https://facebook.com/scholarbrood" },
              { Icon: FaReddit, href: "https://reddit.com/user/scholarbrood" },
              { Icon: FaTumblr, href: "https://scholarbrood.tumblr.com" },
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#E8B85F] transition-all duration-300"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Columns */}
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
            <h3 className={`${oswald.className} font-bold text-lg text-gray-900 dark:text-white`}>
              {column.title}
            </h3>
            <ul className="space-y-3">
              {column.links.map((text, idx) => (
                <li key={text}>
                  <Link
                    href={column.hrefs[idx]}
                    className={`${oswald.className} text-gray-600 dark:text-gray-400 hover:text-[#E8B85F] transition-colors duration-200 text-sm leading-relaxed`}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p className={`${oswald.className}`}>© {currentYear} ScholarBrood. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                className={`${oswald.className} hover:text-[#E8B85F] transition-colors duration-200`}
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
