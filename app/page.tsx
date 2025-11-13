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
      {/* Custom Cursor */}
      {isCursorActive && (
        <motion.div
          className="fixed w-8 h-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference opacity-80"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      )}

      <main className={`${poppins.className} font-sans bg-white dark:bg-linear-to-b dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 min-h-screen overflow-x-hidden`}>
        {/* ===== Hero Section ===== */}
        <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-24 gap-12 overflow-hidden">
          {/* Background linear Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 -left-40 w-96 h-96 bg-linear-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30"
              animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-20 -right-40 w-96 h-96 bg-linear-to-r from-pink-400 to-yellow-400 rounded-full blur-3xl opacity-30"
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
              Master Professional <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Writing</span>
              <br />
              <span className="text-gray-700 dark:text-gray-300">with Expert Tutorials</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
              Access curated video tutorials and written guides to improve business, creative, and academic writing. Learn techniques that professional writers rely on.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="#courses"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300"
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
                {[
                  "/student1.jpeg",
                  "/student2.jpeg",
                  "/student3.jpeg",
                  "/student4.jpeg",
                ].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Learner ${i + 1}`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 object-cover"
                  />
                ))}
              </div>
              <p>
                <strong className="text-gray-900 dark:text-white">12,000+</strong> learners served
              </p>
            </div>

          </motion.div>

          {/* 3D Floating Hero Card */}
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
                className="relative w-full max-w-md mx-auto p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
                <Brain className="w-16 h-16 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Step-by-Step Tutorials</h3>
                <p className="text-gray-600 dark:text-gray-300">Structured lessons with examples and exercises for real-world writing improvement.</p>
                <div className="mt-6 flex gap-2">
                  {["Articles", "Emails", "Reports"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ===== Why ComposeAI ===== */}
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
                Learn Writing That Works with <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">ComposeAI</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Tutorials, guides, and practical exercises designed to make you a confident, skilled writer in any professional context.
              </p>
              <MousePointer2 className="mx-auto mt-4 w-8 h-8 text-purple-600 animate-bounce" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Learn Quickly",
                  desc: "Concise tutorials with practical exercises you can apply immediately.",
                  gradient: "from-yellow-400 to-orange-500",
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Expert Techniques",
                  desc: "Proven strategies for business, creative, and academic writing.",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Structured Learning",
                  desc: "Follow organized lessons, practice exercises, and examples step by step.",
                  gradient: "from-purple-500 to-pink-500",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-8 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
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
        <section id="courses" className="py-32 px-6 lg:px-12 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Tutorials That Improve Your Writing</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Step-by-step lessons and exercises for writers of all levels.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Professional Writing Basics",
                  level: "Beginner",
                  duration: "4 hours",
                  students: "2,500+",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Editing & Style Techniques",
                  level: "Intermediate",
                  duration: "6 hours",
                  students: "2,100+",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  title: "Advanced Writing Projects",
                  level: "Advanced",
                  duration: "8 hours",
                  students: "1,400+",
                  color: "from-orange-500 to-red-500",
                },
              ].map((course, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -12, rotateX: 5 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${course.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                        {course.level}
                      </span>
                      <span className="text-2xl">⭐</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Learn through detailed tutorials, examples, and exercises to strengthen your writing skills.
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                      <span>{course.duration}</span>
                      <span>{course.students} enrolled</span>
                    </div>
                    <motion.a
                      href="#"
                      className="mt-6 inline-flex items-center font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 group-hover:pr-2 transition-all"
                      whileHover={{ x: 4 }}
                    >
                      Enroll Now <ArrowRight className="ml-1 w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <div className="p-12 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Learning Today</h2>
              <p className="text-xl mb-8 opacity-90">Join thousands of learners. Access tutorials, written guides, and exercises instantly.</p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-10 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
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
