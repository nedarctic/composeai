'use client';

import { motion } from "framer-motion";
import { poppins } from "../fonts";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  const featuredPosts = [
    {
      title: "Mastering Academic Writing: Key Strategies",
      excerpt: "Learn techniques to structure, edit, and polish your academic papers efficiently.",
      image: "/blog1.jpeg",
      link: "/blog/mastering-academic-writing",
      category: "Writing Tips",
    },
    {
      title: "AI Tools for Smarter Research",
      excerpt: "Discover AI-powered tools to streamline literature reviews and data analysis.",
      image: "/blog2.jpeg",
      link: "/blog/ai-tools-for-research",
      category: "Research & AI",
    },
  ];

  const blogPosts = [
    {
      title: "Effective Citation Methods",
      excerpt: "Avoid plagiarism and improve credibility with proper citation techniques.",
      image: "/blog3.jpeg",
      link: "/blog/effective-citation-methods",
      category: "Writing Tips",
    },
    {
      title: "Organizing Your Thesis",
      excerpt: "Step-by-step guidance to structure a thesis for clarity and impact.",
      image: "/blog4.jpeg",
      link: "/blog/organizing-your-thesis",
      category: "Academic Writing",
    },
    {
      title: "Time Management for Researchers",
      excerpt: "Maximize productivity with proven strategies tailored to research projects.",
      image: "/blog5.jpeg",
      link: "/blog/time-management-for-researchers",
      category: "Productivity",
    },
    {
      title: "Leveraging Online Learning Platforms",
      excerpt: "Tips for using online courses to supplement your academic skills.",
      image: "/blog6.jpeg",
      link: "/blog/leveraging-online-learning",
      category: "Digital Skills",
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
          Blog & Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Stay updated with the latest tips, tutorials, and insights on academic writing, research mentorship, and AI-driven productivity.
        </motion.p>
      </section>

      {/* Featured Posts */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {featuredPosts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300 rounded-3xl" />
              <div className="absolute bottom-6 left-6 z-10">
                <span className="text-sm text-white bg-blue-600/80 px-3 py-1 rounded-full">{post.category}</span>
                <h3 className="mt-2 text-2xl font-bold text-white">{post.title}</h3>
                <p className="mt-1 text-gray-200">{post.excerpt}</p>
                <Link
                  href={post.link}
                  className="mt-3 inline-block text-white font-semibold bg-linear-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-600 transition"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">All Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col overflow-hidden rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 cursor-pointer"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col gap-4">
                  <span className="text-xs font-semibold text-blue-600">{post.category}</span>
                  <h3 className="text-lg font-bold">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{post.excerpt}</p>
                  <Link
                    href={post.link}
                    className="mt-auto inline-flex items-center font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Never Miss an Insight</h2>
            <p className="text-xl mb-8 opacity-90">Subscribe to our newsletter and get the latest articles on writing, research, and AI productivity.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-10 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              Subscribe
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
