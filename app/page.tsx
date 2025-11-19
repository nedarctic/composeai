"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Brain, MousePointer2 } from "lucide-react";
import { useEffect, useState } from "react";
import { poppins } from "./fonts";
import Image from "next/image";

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
      {/* Custom Cursor – Gold accent */}
      {isCursorActive && (
        <motion.div
          className="fixed w-8 h-8 bg-[#E8B85F] rounded-full pointer-events-none z-50 mix-blend-difference opacity-80 shadow-2xl"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      )}

      <main className={`${poppins.className} font-sans bg-white dark:bg-[#1C1C30] text-gray-900 dark:text-gray-100 min-h-screen overflow-x-hidden`}>
        {/* ===== Hero Section ===== */}
        <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-24 gap-12 overflow-hidden">
          {/* Background Orbs – Warm gold/orange glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 -left-40 w-96 h-96 bg-[#E8B85F] rounded-full blur-3xl opacity-20"
              animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-20 -right-40 w-96 h-96 bg-[#E8B85F]/60 rounded-full blur-3xl opacity-20"
              animate={{ x: [0, -80, 0], y: [0, 100, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex-1 max-w-xl z-10"
            onMouseEnter={() => setIsCursorActive(true)}
            onMouseLeave={() => setIsCursorActive(false)}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Master Academic & Professional <span className="text-[#E8B85F]">Writing</span>
              <br />
              <span className="text-gray-700 dark:text-gray-300">with ScholarBrood</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
              Unlock your potential with curated tutorials, research mentorship, and AI-enhanced learning tools. Build skills for academic writing, research, and online professional growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="#courses"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(232, 184, 95, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center rounded-full bg-[#E8B85F] text-[#1C1C30] px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Browse Tutorials <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-300 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <Sparkles className="mr-2 w-5 h-5" /> Explore Content
              </motion.a>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex -space-x-2">
                {["/student1.jpeg", "/student2.jpeg", "/student3.jpeg", "/student4.jpeg"].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Learner ${i + 1}`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-[#1C1C30] object-cover"
                  />
                ))}
              </div>
              <p>
                <strong className="text-gray-900 dark:text-white">12,000+</strong> learners empowered
              </p>
            </div>
          </motion.div>

          {/* 3D Floating Hero Card – Gold theme */}
          <motion.div
            style={{ y }}
            className="flex-1 relative hidden lg:block"
            initial={{ opacity: 0, rotateY: 15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="relative perspective-1000">
              <motion.div
                whileHover={{ rotateY: 10, rotateX: -5 }}
                className="relative w-full max-w-md mx-auto p-8 bg-white/90 dark:bg-[#1C1C30]/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 rounded-3xl bg-[#E8B85F]/20 blur-xl" />
                <Brain className="w-16 h-16 text-[#E8B85F] mb-4" />
                <h3 className="text-2xl font-bold mb-2">Structured Learning Paths</h3>
                <p className="text-gray-600 dark:text-gray-300">Follow tutorials, practical exercises, and examples designed to improve academic and professional writing.</p>
                <div className="mt-6 flex gap-2">
                  {["Essays", "Research Papers", "Reports"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-[#E8B85F]/20 text-[#E8B85F] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ===== Why ScholarBrood ===== */}
        <section id="about" className="py-32 px-6 lg:px-12 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Learn, Research, and Excel with <span className="text-[#E8B85F]">ScholarBrood</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive tutorials, mentorship, and AI-guided exercises to help you become a confident academic writer and professional researcher.
              </p>
              <MousePointer2 className="mx-auto mt-4 w-8 h-8 text-[#E8B85F] animate-bounce" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Zap className="w-8 h-8" />, title: "Learn Quickly", desc: "Short, actionable lessons with exercises you can implement immediately." },
                { icon: <Brain className="w-8 h-8" />, title: "Expert Mentorship", desc: "Personalized guidance in academic writing, research methods, and skill-building." },
                { icon: <Sparkles className="w-8 h-8" />, title: "Structured Growth", desc: "Organized learning paths with step-by-step tutorials and practical exercises." },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-8 bg-white dark:bg-[#1C1C30]/80 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-[#E8B85F] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-[#E8B85F]/20 flex items-center justify-center text-[#E8B85F] mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Top Courses ===== */}
        <section id="courses" className="py-32 px-6 lg:px-12 bg-gray-50 dark:bg-[#1C1C30]/50">
          <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Hands-On Tutorials to Boost Your Skills</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Step-by-step lessons and exercises for academic writing, research projects, and AI-enabled learning.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Foundations of Academic Writing", level: "Beginner", duration: "4 hours", students: "2,500+" },
                { title: "Research Methods & Mentorship", level: "Intermediate", duration: "6 hours", students: "2,100+" },
                { title: "AI & Digital Skills Training", level: "Advanced", duration: "8 hours", students: "1,400+" },
              ].map((course, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -12, rotateX: 5 }}
                  className="group relative bg-white dark:bg-[#1C1C30]/80 rounded-2xl shadow-xl overflow-hidden cursor-pointer backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 bg-[#E8B85F] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                        {course.level}
                      </span>
                      <span className="text-2xl">⭐</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Comprehensive lessons, exercises, and mentorship for practical skill building.
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                      <span>{course.duration}</span>
                      <span>{course.students} learners</span>
                    </div>
                    <motion.a
                      href="#"
                      className="mt-6 inline-flex items-center font-semibold text-[#E8B85F] group-hover:pr-2 transition-all"
                      whileHover={{ x: 4 }}
                    >
                      Enroll Now <ArrowRight className="ml-1 w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/courses"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(232, 184, 95, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="group mt-16 inline-flex items-center justify-center rounded-full bg-[#E8B85F] text-[#1C1C30] px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Browse More Tutorials <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
            </motion.a>
          </div>
        </section>

        {/* ===== CTA Section ===== */}
        <section className="py-32 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="p-12 bg-[#E8B85F] rounded-3xl shadow-2xl text-[#1C1C30]">
              <h2 className="text-2xl md:text-5xl font-bold mb-6">Join ScholarBrood Today</h2>
              <p className="text-xl mb-8 opacity-90">Access tutorials, mentorship, and AI tools to accelerate your academic and professional growth.</p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full bg-[#1C1C30] text-white px-10 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
              >
                Start Learning Free <Sparkles className="ml-2 w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}