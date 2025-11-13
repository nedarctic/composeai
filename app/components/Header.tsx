"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { poppins } from "../fonts";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "About", href: "/about" },
  ];

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-950/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`${poppins.className} text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600`}
        >
          ComposeAI
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ y: -2, scale: 1.05 }}>
              <Link
                href={item.href}
                className={`${poppins.className} text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-purple-400 transition-colors`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            href="/login"
            whileHover={{ scale: 1.05 }}
            className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Log in
          </motion.a>
          <motion.a
            href="/signup"
            whileHover={{ scale: 1.05 }}
            className="px-5 py-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition"
          >
            Sign up
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 w-full shadow-lg"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 4, scale: 1.05 }}
                  className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-purple-400 transition"
                >
                  {item.name}
                </motion.a>
              ))}

              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                <motion.a
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 py-2 px-6 rounded-full text-center hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  Log in
                </motion.a>
                <motion.a
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-6 rounded-full text-center transition"
                >
                  Sign up
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
