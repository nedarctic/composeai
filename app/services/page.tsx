'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, BookOpen, Brain } from "lucide-react";
import { poppins } from "../fonts";

export default function Services() {
  const services = [
    {
      title: "Academic Writing Support",
      desc: "Comprehensive tutorials and guidance to improve essays, reports, theses, and academic papers for students and professionals.",
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      href: "/services/academic-writing-support",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Research Mentorship",
      desc: "Personalized guidance from experienced researchers to help you navigate research projects, publications, and methodologies.",
      icon: <Brain className="w-10 h-10 text-purple-600" />,
      href: "/services/research-mentorship",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "AI & Online Skills Training",
      desc: "Learn how to leverage AI tools, digital platforms, and online productivity techniques to enhance your writing and research workflow.",
      icon: <Zap className="w-10 h-10 text-yellow-500" />,
      href: "/services/ai-online-skills-training",
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
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          ScholarBrood provides expert-led tutorials, mentorship, and digital skills training to help students and professionals achieve excellence in writing and research.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800">{service.icon}</div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 hover:underline"
                >
                  Learn More
                </Link>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Writing?</h2>
            <p className="text-xl mb-8 opacity-90">Explore our services and start mastering academic writing, research, and digital skills today.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-10 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
