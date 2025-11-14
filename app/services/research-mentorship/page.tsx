'use client';

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { poppins } from "../../fonts";

// Mock JSON content for mentorship sessions
const mentorships = [
  {
    id: 1,
    title: "One-on-One Research Planning",
    description: "Personalized session to plan your research project from start to finish.",
    duration: "1 hour",
    level: "All levels",
    price: "$79",
    paymentLink: "/checkout/research-planning",
  },
  {
    id: 2,
    title: "Research Proposal Review",
    description: "Get expert feedback and improvement strategies for your proposal.",
    duration: "2 hours",
    level: "Intermediate",
    price: "$99",
    paymentLink: "/checkout/research-proposal-review",
  },
  {
    id: 3,
    title: "Publication Strategy Consultation",
    description: "Learn how to prepare your manuscript and submit to journals efficiently.",
    duration: "2 hours",
    level: "Advanced",
    price: "$129",
    paymentLink: "/checkout/publication-strategy",
  },
  {
    id: 4,
    title: "Methodology Deep Dive",
    description: "In-depth guidance on selecting and applying appropriate research methodologies.",
    duration: "1.5 hours",
    level: "All levels",
    price: "$89",
    paymentLink: "/checkout/methodology-deep-dive",
  },
  {
    id: 5,
    title: "Data Analysis Mentorship",
    description: "Step-by-step mentorship on analyzing research data effectively.",
    duration: "2 hours",
    level: "Intermediate",
    price: "$109",
    paymentLink: "/checkout/data-analysis-mentorship",
  },
  {
    id: 6,
    title: "Grant & Funding Guidance",
    description: "Get advice on writing grant proposals and securing research funding.",
    duration: "1 hour",
    level: "All levels",
    price: "$99",
    paymentLink: "/checkout/grant-funding-guidance",
  },
  {
    id: 7,
    title: "Literature Review Mentorship",
    description: "Hands-on guidance to conduct comprehensive and effective literature reviews.",
    duration: "2 hours",
    level: "Intermediate",
    price: "$89",
    paymentLink: "/checkout/literature-review-mentorship",
  },
  {
    id: 8,
    title: "Advanced Statistical Consultation",
    description: "Expert mentorship on statistical analysis for research projects.",
    duration: "2 hours",
    level: "Advanced",
    price: "$139",
    paymentLink: "/checkout/advanced-statistics",
  },
  {
    id: 9,
    title: "Research Ethics Consultation",
    description: "Ensure your research meets ethical standards and compliance requirements.",
    duration: "1 hour",
    level: "All levels",
    price: "$79",
    paymentLink: "/checkout/research-ethics-consultation",
  },
  {
    id: 10,
    title: "Manuscript Editing Mentorship",
    description: "One-on-one guidance to polish your manuscript for journal submission.",
    duration: "2 hours",
    level: "Advanced",
    price: "$119",
    paymentLink: "/checkout/manuscript-editing",
  },
];

export default function ResearchMentorship() {
  const router = useRouter();

  return (
    <main className={`${poppins.className} min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
      {/* Back Button */}
      <div className="px-6 lg:px-12 pt-28"> {/* pt-28 ensures it's below fixed header */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400 font-semibold bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow hover:shadow-lg transition-all"
        >
          <ArrowLeft className="w-5 h-5" /> Back
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-6 lg:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-pink-600"
        >
          Research Mentorship
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Personalized guidance from experienced researchers to help you navigate projects, publications, methodologies, and more. All mentorship sessions are paid, ensuring you get dedicated expert attention.
        </motion.p>
      </section>

      {/* Mentorship Grid */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {mentorships.map((session, i) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-2">{session.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{session.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>{session.duration}</span>
                <span>{session.level}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{session.price}</span>
                <a
                  href={session.paymentLink}
                  className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all"
                >
                  Purchase Access
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
