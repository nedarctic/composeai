'use client';

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { poppins } from "../../fonts";

// Mock JSON content for AI & Online Skills Training
const sessions = [
  {
    id: 1,
    title: "AI Writing Assistants",
    description: "Learn how to effectively use AI tools to enhance your writing and productivity.",
    duration: "2 hours",
    level: "Beginner",
    price: "$49",
    paymentLink: "/checkout/ai-writing-assistants",
  },
  {
    id: 2,
    title: "Online Research Efficiency",
    description: "Techniques to quickly find, organize, and synthesize information from online sources.",
    duration: "1.5 hours",
    level: "All levels",
    price: "$39",
    paymentLink: "/checkout/online-research-efficiency",
  },
  {
    id: 3,
    title: "Data Visualization Tools",
    description: "Learn to present your research data clearly using modern visualization tools.",
    duration: "2 hours",
    level: "Intermediate",
    price: "$59",
    paymentLink: "/checkout/data-visualization-tools",
  },
  {
    id: 4,
    title: "AI-Powered Citation Management",
    description: "Manage references efficiently using AI tools and citation software.",
    duration: "1 hour",
    level: "All levels",
    price: "$29",
    paymentLink: "/checkout/ai-citation-management",
  },
  {
    id: 5,
    title: "Time Management for Researchers",
    description: "Digital techniques and tools to optimize workflow and productivity.",
    duration: "1.5 hours",
    level: "All levels",
    price: "$39",
    paymentLink: "/checkout/time-management-researchers",
  },
  {
    id: 6,
    title: "AI for Academic Writing",
    description: "Advanced strategies for integrating AI tools into your academic writing process.",
    duration: "2.5 hours",
    level: "Advanced",
    price: "$69",
    paymentLink: "/checkout/ai-academic-writing",
  },
  {
    id: 7,
    title: "Collaboration Tools & Platforms",
    description: "Learn digital platforms for team-based research and collaborative writing.",
    duration: "1.5 hours",
    level: "All levels",
    price: "$39",
    paymentLink: "/checkout/collaboration-tools-platforms",
  },
  {
    id: 8,
    title: "Online Presentation Skills",
    description: "Tips and tools to deliver professional and engaging online presentations.",
    duration: "1.5 hours",
    level: "All levels",
    price: "$39",
    paymentLink: "/checkout/online-presentation-skills",
  },
  {
    id: 9,
    title: "AI-Assisted Literature Review",
    description: "Use AI to quickly synthesize and analyze academic literature effectively.",
    duration: "2 hours",
    level: "Intermediate",
    price: "$59",
    paymentLink: "/checkout/ai-literature-review",
  },
  {
    id: 10,
    title: "Digital Productivity Hacks",
    description: "Learn shortcuts and tools to maximize productivity in research and writing.",
    duration: "1 hour",
    level: "All levels",
    price: "$29",
    paymentLink: "/checkout/digital-productivity-hacks",
  },
];

export default function AIOnlineSkillsTraining() {
  const router = useRouter();

  return (
    <main className={`${poppins.className} min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
      {/* Back Button */}
      <div className="px-6 lg:px-12 pt-28">
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
          className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-yellow-500 to-orange-500"
        >
          AI & Online Skills Training
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Learn to leverage AI tools, online platforms, and digital productivity techniques to enhance your writing, research, and workflow. All training sessions are paid for expert, focused instruction.
        </motion.p>
      </section>

      {/* Sessions Grid */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {sessions.map((session, i) => (
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
                  className="px-4 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition-all"
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
