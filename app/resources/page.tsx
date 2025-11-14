'use client';

import { motion } from "framer-motion";
import { FileText, ClipboardList, BookOpen } from "lucide-react";
import { poppins } from "../fonts";
import Link from "next/link";

export default function Resources() {
  const resources = [
    {
      title: "Academic Writing Templates",
      desc: "Pre-formatted essay, report, and thesis templates to streamline your writing workflow.",
      icon: <FileText className="w-10 h-10 text-blue-600" />,
      type: "Downloadable",
      link: "/resources/academic-writing-templates.pdf",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Research Guides",
      desc: "Step-by-step guides on literature reviews, methodology, and citation best practices.",
      icon: <BookOpen className="w-10 h-10 text-purple-600" />,
      type: "Guide",
      link: "/resources/research-guides.pdf",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Checklists & Worksheets",
      desc: "Practical checklists for editing, proofreading, and project planning to improve writing efficiency.",
      icon: <ClipboardList className="w-10 h-10 text-yellow-500" />,
      type: "Downloadable",
      link: "/resources/checklists-worksheets.pdf",
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
          Resources
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          ScholarBrood provides a library of high-quality resources to support your academic writing, research, and digital skills development.
        </motion.p>
      </section>

      {/* Resources Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {resources.map((resource, i) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${resource.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800">{resource.icon}</div>
                <h3 className="text-2xl font-bold">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{resource.desc}</p>
                <Link
                  href={resource.link}
                  target="_blank"
                  className="mt-4 inline-flex items-center font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 hover:underline"
                >
                  {resource.type === "Downloadable" ? "Download" : "View Guide"}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Custom Resources?</h2>
            <p className="text-xl mb-8 opacity-90">Reach out and let us create templates, guides, and checklists tailored to your academic or professional needs.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-10 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
