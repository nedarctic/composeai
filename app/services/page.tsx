'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Brain, Zap } from "lucide-react";
import { poppins } from "../fonts";

export default function Services() {
  const services = [
    {
      title: "Academic Writing Support",
      desc: "Comprehensive tutorials and guidance to improve essays, reports, theses, and academic papers for students and professionals.",
      icon: <BookOpen className="w-12 h-12" />,
      href: "/services/academic-writing-support",
    },
    {
      title: "Research Mentorship",
      desc: "Personalized guidance from experienced researchers to help you navigate research projects, publications, and methodologies.",
      icon: <Brain className="w-12 h-12" />,
      href: "/services/research-mentorship",
    },
    {
      title: "AI & Online Skills Training",
      desc: "Learn how to leverage AI tools, digital platforms, and online productivity techniques to enhance your writing and research workflow.",
      icon: <Zap className="w-12 h-12" />,
      href: "/services/ai-online-skills-training",
    },
  ];

  return (
    <main className={`${poppins.className} min-h-screen bg-[#1C1C30] text-gray-100`}>
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E8B85F] rounded-full blur-3xl opacity-10" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
        >
          Our <span className="text-[#E8B85F]">Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          ScholarBrood provides expert-led tutorials, mentorship, and digital skills training to help students and professionals achieve excellence in writing and research.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 lg:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-gray-800 hover:border-[#E8B85F]/30 overflow-hidden transition-all duration-500"
            >
              {/* Gold glow on hover */}
              <div className="absolute inset-0 bg-[#E8B85F] opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
              <div className="absolute -inset-1 bg-[#E8B85F] rounded-3xl blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10" />

              <div className="relative z-10 flex flex-col items-start gap-6">
                <div className="p-4 rounded-2xl bg-[#E8B85F]/10 text-[#E8B85F] group-hover:bg-[#E8B85F]/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>

                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center text-[#E8B85F] font-semibold hover:gap-3 transition-all duration-300"
                >
                  Learn More → 
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
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="relative p-16 rounded-3xl bg-gradient-to-br from-[#E8B85F] to-[#d4a44e] shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[#1C1C30] opacity-30" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C30] mb-6">
                Ready to Elevate Your Writing?
              </h2>
              <p className="text-xl md:text-2xl text-[#1C1C30]/90 mb-10 max-w-3xl mx-auto">
                Explore our services and start mastering academic writing, research, and digital skills today.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-12 py-5 bg-[#1C1C30] text-[#E8B85F] text-xl font-bold rounded-full hover:bg-[#1C1C30]/90 hover:scale-105 shadow-2xl transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}