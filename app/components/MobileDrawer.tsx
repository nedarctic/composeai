"use client";

import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  oswald: {
    className: string;
  };
};

function MobileDrawer({ isOpen, onClose, navItems, oswald }: DrawerProps) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black md:hidden z-[9998]"
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.33, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-3/4 bg-white dark:bg-[#1C1C30] shadow-xl z-[9999] md:hidden border-l border-gray-200 dark:border-gray-800 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* NAV ITEMS */}
            <div className="px-8 py-16 flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`${oswald.className} text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-[#E8B85F] transition-colors duration-300`}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* FOOTER / BRANDING */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="px-8 pb-10 border-t border-gray-200 dark:border-gray-700"
            >
              <p className={`${oswald.className} mt-6 text-xs text-gray-500 dark:text-gray-500`}>
                © {new Date().getFullYear()} ScholarBrood. All Rights Reserved.
              </p>
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default MobileDrawer;
