"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Mail, Shield, Clock, Zap, Users } from "lucide-react";
import { poppins } from "./fonts";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <main
        className={`${poppins.className} min-h-screen overflow-x-hidden font-sans
          bg-white dark:bg-[#1C1C30]
          text-gray-900 dark:text-gray-100
          transition-colors duration-500`}
      >
        {/* ================= Hero Section ================= */}
        <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 pt-[110px] overflow-hidden">
          <img
            src="/1.jpg"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/50 z-0" />
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight text-white text-center px-4"
          >
            The Hub of Academic, Research & Publication Professionals
          </motion.h1>
        </section>

        {/* ================= Two-Column Section ================= */}
        <section className="px-5 sm:px-8 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E8B85F] leading-tight">
                Unlock Your Academic Potential — Expert Support Starts Here
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Reliable writing, research coaching & mentorship designed to help you excel — from your first assignment to your final dissertation.
              </p>

              {/* Mobile-first button stack */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#E8B85F] text-[#1C1C30] px-8 py-5 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Expert Help Now
                  <ArrowRight className="ml-3 w-6 h-6" />
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-[#E8B85F] px-8 py-5 text-lg font-medium text-[#E8B85F] hover:bg-[#E8B85F] hover:text-[#1C1C30] transition-all duration-300"
                >
                  <Sparkles className="mr-3 w-5 h-5" />
                  Free Consultation
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full"
            >
              <img
                src="/2.jpg"
                alt="Academic Support"
                className="w-full h-auto object-cover rounded-3xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        {/* ========== WHY CHOOSE US ========== */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 bg-gray-50 dark:bg-[#1C1C30]/50">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              Why Students Trust{" "}
              <span className="text-[#E8B85F]">ScholarBrood</span>
            </motion.h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed px-4">
              Professional support that delivers real results — with confidentiality, quality, and your success as our top priority.
            </p>

            {/* Responsive Grid: 1 on mobile, 2 on sm, 4 on md+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Expert Writers & Researchers",
                  desc: "Qualified academics with advanced degrees",
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "100% Plagiarism-Free",
                  desc: "Every paper passes Turnitin & Copyscape",
                },
                {
                  icon: <Clock className="w-12 h-12" />,
                  title: "Always On Time",
                  desc: "Even 3-hour urgent deadlines available",
                },
                {
                  icon: <Zap className="w-12 h-12" />,
                  title: "24/7 Support",
                  desc: "Live chat, email, and phone assistance",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="p-8 bg-white dark:bg-[#1C1C30]/80 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#E8B85F]/10 flex items-center justify-center text-[#E8B85F] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-base">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========= FINAL CTA ========= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#E8B85F] to-[#d4a44e] shadow-2xl overflow-hidden text-center">
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 px-4">
                  Start Your Academic Success Journey With ScholarBrood
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 max-w-4xl mx-auto px-4 leading-relaxed">
                  Achieve more. Stress less. Join thousands of students who’ve already transformed their grades and confidence.
                </p>

                {/* Full-width buttons on mobile */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center max-w-xl mx-auto">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-10 py-5 bg-white text-[#1C1C30] text-lg font-bold rounded-full shadow-2xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Get Expert Help Now <ArrowRight className="w-6 h-6" />
                  </motion.a>

                  <motion.a
                    href="mailto:info@scholarbrood.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-5 border-4 border-white text-white text-lg font-bold rounded-full hover:bg-white hover:text-[#1C1C30] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    info@scholarbrood.com
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}