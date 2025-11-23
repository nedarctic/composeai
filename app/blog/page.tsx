'use client';

import { motion } from "framer-motion";
import { poppins } from "../fonts";
import Link from "next/link";

export default function Blog() {
  const featuredPosts = [
    {
      title: "Mastering Academic Writing: Key Strategies",
      excerpt: "Proven techniques to plan, structure, edit, and polish essays, theses, and research papers with confidence.",
      image: "/blog1.jpeg",
      link: "/blog/mastering-academic-writing",
      category: "Writing Tips",
    },
    {
      title: "How to Write a Compelling Introduction",
      excerpt: "Hook your reader from the first sentence and set up a powerful argument — with real examples that work.",
      image: "/blog2.jpeg",
      link: "/blog/compelling-introductions",
      category: "Writing Craft",
    },
  ];

  const blogPosts = [
    {
      title: "Effective Citation Methods",
      excerpt: "Master APA, MLA, Chicago, and Harvard styles to cite flawlessly and strengthen academic credibility.",
      image: "/blog3.jpeg",
      link: "/blog/effective-citation-methods",
      category: "Writing Tips",
    },
    {
      title: "Organizing Your Thesis Like a Pro",
      excerpt: "Step-by-step framework to build a clear, logical, and impactful thesis structure from outline to final draft.",
      image: "/blog4.jpeg",
      link: "/blog/organizing-your-thesis",
      category: "Academic Writing",
    },
    {
      title: "Clarity & Concision: Editing Secrets",
      excerpt: "Learn professional editing techniques to eliminate wordiness and make every sentence count.",
      image: "/blog5.jpeg",
      link: "/blog/clarity-and-concision",
      category: "Editing",
    },
    {
      title: "Crafting Strong Arguments",
      excerpt: "Build persuasive, evidence-based arguments that reviewers and professors can’t ignore.",
      image: "/blog6.jpeg",
      link: "/blog/crafting-strong-arguments",
      category: "Writing Craft",
    },
    {
      title: "Overcoming Writer’s Block Forever",
      excerpt: "Practical strategies used by published academics to start writing — even when motivation is low.",
      image: "/blog7.jpeg",
      link: "/blog/overcoming-writers-block",
      category: "Productivity",
    },
    {
      title: "Writing Literature Reviews That Stand Out",
      excerpt: "Go beyond summary: synthesize sources critically and position your work in the field.",
      image: "/blog8.jpeg",
      link: "/blog/writing-literature-reviews",
      category: "Academic Writing",
    },
  ];

  return (
    <main className={`${poppins.className} min-h-screen bg-[#1C1C30] text-gray-100 overflow-x-hidden`}>
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#E8B85F] rounded-full blur-3xl opacity-10"
            animate={{ y: [0, -60, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
        >
          Blog & <span className="text-[#E8B85F]">Insights</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          Expert advice, proven techniques, and in-depth guides to help you write clearer, stronger, and more impactful academic and professional work.
        </motion.p>
      </section>

      {/* Featured Posts – Large Hero Cards */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {featuredPosts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer border border-gray-800 hover:border-[#E8B85F]/30 transition-all duration-500"
            >
              <img
                src={post.image}
                alt={post.title}
                width={800}
                height={600}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C30]/90 via-[#1C1C30]/30 to-transparent" />

              {/* Gold glow on hover */}
              <div className="absolute inset-0 bg-[#E8B85F] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />

              <div className="absolute bottom-8 left-8 right-8 z-10">
                <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#E8B85F]/20 text-[#E8B85F] rounded-full backdrop-blur-sm border border-[#E8B85F]/30">
                  {post.category}
                </span>
                <h3 className="mt-4 text-3xl font-bold text-white">{post.title}</h3>
                <p className="mt-2 text-gray-200 text-lg">{post.excerpt}</p>
                <Link
                  href={post.link}
                  className="mt-6 inline-flex items-center text-[#E8B85F] font-bold hover:gap-3 transition-all duration-300"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            All <span className="text-[#E8B85F]">Posts</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-800 hover:border-[#E8B85F]/30 transition-all duration-500 shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1C1C30]/80 to-transparent" />
                </div>

                <div className="p-6 space-y-4">
                  <span className="text-xs font-semibold text-[#E8B85F] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-white line-clamp-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={post.link}
                    className="inline-flex items-center text-[#E8B85F] font-medium hover:gap-2 transition-all duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.article>
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
          transition={{ duration: 0.9 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="relative p-16 rounded-3xl bg-linear-to-br from-[#E8B85F] to-[#d4a44e] shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[#1C1C30] opacity-40" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C30] mb-6">
                Never Miss a Writing Tip
              </h2>
              <p className="text-xl md:text-2xl text-[#1C1C30]/90 mb-10 max-w-3xl mx-auto">
                Subscribe to get weekly insights, templates, and expert writing advice delivered straight to your inbox.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-12 py-6 bg-[#1C1C30] text-[#E8B85F] text-xl font-bold rounded-full hover:bg-[#1C1C30]/90 hover:scale-105 shadow-2xl transition-all duration-300"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}