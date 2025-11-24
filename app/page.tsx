"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, PenTool, CheckCircle, Users, Shield, Clock, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { poppins } from "./fonts";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCursorActive, setIsCursorActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom Cursor – adapts to theme */}
      {isCursorActive && (
        <motion.div
          className="fixed w-10 h-10 rounded-full pointer-events-none z-50 mix-blend-difference shadow-2xl transition-colors duration-300
                     bg-[#E8B85F] dark:bg-[#E8B85F] 
                     lg:bg-[#1C1C30] lg:dark:bg-white"
          animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      )}

      <main className={`${poppins.className} min-h-screen overflow-x-hidden font-sans
        bg-white dark:bg-[#1C1C30]
        text-gray-900 dark:text-gray-100
        transition-colors duration-500`}
      >
        {/* ===== Hero Section ===== */}
        <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-24 gap-12 overflow-hidden">
          {/* Animated Orbs – Stunning in both themes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 -left-40 w-96 h-96 rounded-full blur-3xl opacity-30
                         bg-[#E8B85F] dark:bg-[#E8B85F]
                         lg:bg-[#E8B85F]/40 lg:dark:bg-[#E8B85F]/20"
              animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-20 -right-40 w-96 h-96 rounded-full blur-3xl opacity-30
                         bg-[#E8B85F]/60 dark:bg-[#E8B85F]/60
                         lg:bg-[#d4a44e]/30 lg:dark:bg-[#E8B85F]/30"
              animate={{ x: [0, -80, 0], y: [0, 100, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex-1 max-w-xl z-10"
            onMouseEnter={() => setIsCursorActive(true)}
            onMouseLeave={() => setIsCursorActive(false)}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Empowering Students With Expert <span className="text-[#E8B85F]">Academic Writing</span>
              <br />
              <span className="text-gray-700 dark:text-gray-300">& Research Support</span>
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              Trusted by high school, college, and postgraduate students worldwide. Get plagiarism-free essays, theses, dissertations, research guidance, and one-on-one mentorship — delivered on time, every time.
            </p>

            <div className="mt-8 mb-10">
              <p className="text-2xl md:text-3xl font-semibold text-[#E8B85F]">
                Unlock Your Academic Potential — Expert Support Starts Here
              </p>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                Reliable writing, research coaching & mentorship designed to help you excel — from your first assignment to your final dissertation.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-5">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(232, 184, 95, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center rounded-full bg-[#E8B85F] text-[#1C1C30] px-9 py-5 text-lg font-bold shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                Get Expert Help Now <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition" />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full border-2 border-[#E8B85F] px-9 py-5 text-lg font-medium text-[#E8B85F] bg-white/10 dark:bg-transparent backdrop-blur-sm hover:bg-[#E8B85F] hover:text-[#1C1C30] transition-all duration-300"
              >
                <Sparkles className="mr-3 w-5 h-5" /> Free Consultation
              </motion.a>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm">
              <div className="flex -space-x-2">
                {["/student1.jpeg", "/student2.jpeg", "/student3.jpeg", "/student4.jpeg"].map((src, i) => (
                  <img key={i} src={src} alt="Student" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#1C1C30] object-cover shadow-md" />
                ))}
              </div>
              <p><strong className="font-bold">10,000+</strong> students trusted worldwide</p>
            </div>
          </motion.div>

          {/* Floating 3D Card – Now gorgeous in light theme too */}
          <motion.div
            style={{ y }}
            className="flex-1 relative hidden lg:block"
            initial={{ opacity: 0, rotateY: 15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="relative perspective-1000">
              <motion.div
                whileHover={{ rotateY: 12, rotateX: -8, scale: 1.03 }}
                className="relative w-full max-w-md mx-auto p-10 bg-white dark:bg-[#1C1C30]/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700
                           ring-1 ring-[#E8B85F]/20 dark:ring-[#E8B85F]/10"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E8B85F]/10 to-transparent blur-xl -z-10" />
                <PenTool className="w-16 h-16 text-[#E8B85F] mb-6" />
                <h3 className="text-2xl font-bold mb-4">We Support Every Academic Need</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  From essays to PhD dissertations — original, on-time, and backed by real experts.
                </p>
                <div className="space-y-4">
                  {["Essays & Term Papers", "Theses & Dissertations", "Research Proposals", "Literature Reviews", "Capstone Projects"].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <CheckCircle className="w-5 h-5 text-[#E8B85F] flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ===== Why Choose Us ===== */}
        <section className="py-32 px-6 lg:px-12 bg-gray-50 dark:bg-[#1C1C30]/50">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Why Students Trust <span className="text-[#E8B85F]">ScholarBrood</span>
            </motion.h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">
              Professional support that delivers real results — with confidentiality, quality, and your success as our top priority.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: <Users className="w-12 h-12" />, title: "Expert Writers & Researchers", desc: "Qualified academics with advanced degrees" },
                { icon: <Shield className="w-12 h-12" />, title: "100% Plagiarism-Free", desc: "Every paper passes Turnitin & Copyscape" },
                { icon: <Clock className="w-12 h-12" />, title: "Always On Time", desc: "Even 3-hour urgent deadlines available" },
                { icon: <Zap className="w-12 h-12" />, title: "24/7 Support", desc: "Live chat, email, and phone assistance" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -12, scale: 1.05 }}
                  className="p-10 bg-white dark:bg-[#1C1C30]/80 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700
                             hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#E8B85F]/10 dark:bg-[#E8B85F]/10 flex items-center justify-center text-[#E8B85F] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Final CTA ===== */}
        {/* FINAL CTA — Mobile-Perfect, Zero Overflow */}
        <section className="py-32 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="relative p-16 sm:p-20 rounded-3xl bg-gradient-to-br from-[#E8B85F] to-[#d4a44e] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black/40 dark:bg-[#1C1C30]/60" />
              <div className="relative z-10">

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-8">
                  Start Your Academic Success Journey With ScholarBrood
                </h2>
                <p className="text-xl sm:text-2xl text-white/90 drop-shadow-lg mb-12 max-w-4xl mx-auto px-4">
                  Achieve more. Stress less. Join thousands of students who’ve already transformed their grades and confidence.
                </p>

                {/* PERFECTLY RESPONSIVE BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full max-w-2xl mx-auto px-4">

                  {/* Primary CTA */}
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-10 py-5 bg-white text-[#1C1C30] text-lg sm:text-xl font-bold rounded-full shadow-2xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap"
                  >
                    Get Expert Help Now <ArrowRight className="w-6 h-6" />
                  </motion.a>

                  {/* Email Button — NO OVERFLOW, EVER */}
                  <motion.a
                    href="mailto:info@scholarbrood.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto 
                       px-6 py-5 
                       min-w-0 
                       border-4 border-white 
                       text-white 
                       text-base sm:text-lg lg:text-xl 
                       font-bold 
                       rounded-full 
                       hover:bg-white hover:text-[#1C1C30] 
                       transition-all duration-300 
                       backdrop-blur-sm 
                       shadow-xl 
                       flex items-center justify-center 
                       gap-2 
                       overflow-hidden"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span className="truncate">info@scholarbrood.com</span>
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