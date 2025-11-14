'use client';

import { motion } from "framer-motion";
import { poppins } from "../fonts";
import Image from "next/image";
import { Users, Award, BookOpen } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Expert Mentors",
      desc: "Learn from experienced academics and professional writers who guide you step by step.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Award className="w-10 h-10 text-purple-600" />,
      title: "Proven Success",
      desc: "Thousands of learners have improved their writing and research skills through ScholarBrood.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-yellow-500" />,
      title: "Structured Learning",
      desc: "Curated tutorials, guides, and exercises designed to help you learn efficiently and effectively.",
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <main className={`${poppins.className} min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600"
        >
          About ScholarBrood
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          ScholarBrood is a digital learning platform dedicated to helping students, researchers, and professionals master academic writing, research mentorship, and online skills. We combine expert guidance, practical tutorials, and AI-driven tools to accelerate your learning journey.
        </motion.p>
      </section>

      {/* Image & Mission Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/about-hero.jpeg"
              alt="ScholarBrood Team"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              We aim to empower learners with practical knowledge and skills that transform their writing and research capabilities. Through structured tutorials, personalized mentorship, and hands-on exercises, we help you achieve academic and professional excellence.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At ScholarBrood, we believe learning should be accessible, effective, and engaging. Our platform blends traditional academic methods with modern digital tools to make learning smarter, faster, and impactful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why Choose ScholarBrood
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We combine expertise, practical guidance, and structured learning experiences to ensure you gain confidence, skills, and results.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800">{feature.icon}</div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="p-12 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Learning Community</h2>
            <p className="text-xl mb-8 opacity-90">Explore our services, access valuable resources, and take your writing and research skills to the next level.</p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-10 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
