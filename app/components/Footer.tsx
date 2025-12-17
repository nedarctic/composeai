'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaReddit, FaTumblr } from "react-icons/fa";
import { oswald } from "../fonts";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 dark:bg-[#1C1C30] pt-12 overflow-hidden">

      <div className="px-8 relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 z-10">

        {/* ABOUT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          className="space-y-6"
        >
          <h3 className={`${oswald.className} font-bold text-lg text-gray-900 dark:text-white`}>
            About ScholarBrood
          </h3>

          <p className={`${oswald.className} text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-sm`}>
            ScholarBrood provides professional academic writing, editing, research support,
            and publication processing for students and researchers worldwide. Our goal is
            to help you produce high-quality, original, and academically sound work.
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <h3 className={`${oswald.className} font-bold text-lg text-gray-900 dark:text-white`}>
            Quick Links
          </h3>

          <ul className="space-y-3">
            {[
              { label: "About Us", href: "/about" },
              { label: "Our Services", href: "/services" },
              { label: "Order Request Form", href: "/order" },
              { label: "Resources", href: "/resources" },
              { label: "Contact Us", href: "/contact" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={`${oswald.className} text-sm text-gray-600 dark:text-gray-400 hover:text-[#E8B85F] transition-colors duration-200`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT & SOCIALS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className={`${oswald.className} font-bold text-lg text-gray-900 dark:text-white`}>
            Contact Us
          </h3>

          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#E8B85F]" />
              <a href="mailto:info@scholarbrood.com" className={`${oswald.className} hover:text-[#E8B85F] transition`}>
                info@scholarbrood.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#E8B85F]" />
              <span className={`${oswald.className}`}>+1 (843) 699-6020</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#E8B85F]" />
              <span className={`${oswald.className}`}>Myrtle Beach, SC, USA</span>
            </div>
          </div>

          <h3 className={`${oswald.className} font-bold text-lg text-gray-900 dark:text-white mt-8`}>
            Follow Us
          </h3>

          <div className="flex gap-5">
            {[
              { Icon: FaFacebook, href: "https://facebook.com/scholarbrood" }, // left as-is
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/nicholas-otieno-28a25939a/" },
              { Icon: FaInstagram, href: "https://www.instagram.com/scholarbrood/" },
              { Icon: FaYoutube, href: "https://www.youtube.com/@ScholarBrood" },
              { Icon: FaReddit, href: "https://www.reddit.com/user/scholarbrood/" },
              { Icon: FaTumblr, href: "https://scholarbrood.tumblr.com/" },
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
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 mt-16 px-6 py-12 bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-[#E8B85F] dark:text-gray-400">
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
