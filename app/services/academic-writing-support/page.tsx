'use client';

import { motion } from "framer-motion";
import { poppins } from "../../fonts";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Mock JSON content
const tutorials = [
    {
        id: 1,
        title: "Essay Writing Fundamentals",
        description: "Learn the essentials of crafting strong, persuasive essays with proper structure and flow.",
        duration: "2 hours",
        level: "Beginner",
        price: "$29",
        paymentLink: "/checkout/essay-writing-fundamentals",
    },
    {
        id: 2,
        title: "Thesis & Dissertation Support",
        description: "Step-by-step guidance on writing complex academic documents with confidence.",
        duration: "6 hours",
        level: "Advanced",
        price: "$79",
        paymentLink: "/checkout/thesis-dissertation-support",
    },
    {
        id: 3,
        title: "Research Paper Structuring",
        description: "Organize your research effectively and present findings clearly.",
        duration: "4 hours",
        level: "Intermediate",
        price: "$49",
        paymentLink: "/checkout/research-paper-structuring",
    },
    {
        id: 4,
        title: "Critical Analysis Techniques",
        description: "Learn how to critically evaluate sources and build strong arguments in your writing.",
        duration: "3 hours",
        level: "Intermediate",
        price: "$39",
        paymentLink: "/checkout/critical-analysis-techniques",
    },
    {
        id: 5,
        title: "Academic Citation & Referencing",
        description: "Master APA, MLA, Chicago, and Harvard referencing styles with clear examples.",
        duration: "2 hours",
        level: "Beginner",
        price: "$25",
        paymentLink: "/checkout/academic-citation-referencing",
    },
    {
        id: 6,
        title: "Literature Review Mastery",
        description: "Step-by-step guide to conducting and writing comprehensive literature reviews.",
        duration: "5 hours",
        level: "Advanced",
        price: "$69",
        paymentLink: "/checkout/literature-review-mastery",
    },
    {
        id: 7,
        title: "Editing & Proofreading Skills",
        description: "Improve clarity, coherence, and grammatical accuracy in academic documents.",
        duration: "3 hours",
        level: "Beginner",
        price: "$35",
        paymentLink: "/checkout/editing-proofreading-skills",
    },
    {
        id: 8,
        title: "Data Interpretation for Research",
        description: "Learn how to analyze and present research data effectively in written reports.",
        duration: "4 hours",
        level: "Intermediate",
        price: "$45",
        paymentLink: "/checkout/data-interpretation-research",
    },
    {
        id: 9,
        title: "Advanced Argumentation Strategies",
        description: "Develop sophisticated argument structures and persuasive writing techniques.",
        duration: "5 hours",
        level: "Advanced",
        price: "$69",
        paymentLink: "/checkout/advanced-argumentation-strategies",
    },
    {
        id: 10,
        title: "Academic Blogging & Outreach",
        description: "Learn how to write for academic blogs, journals, and professional platforms.",
        duration: "3 hours",
        level: "Beginner",
        price: "$29",
        paymentLink: "/checkout/academic-blogging-outreach",
    },
    {
        id: 11,
        title: "Research Ethics & Integrity",
        description: "Understand ethical considerations and maintain integrity in your academic work.",
        duration: "2 hours",
        level: "Intermediate",
        price: "$39",
        paymentLink: "/checkout/research-ethics-integrity",
    },
    {
        id: 12,
        title: "Presentation & Academic Communication",
        description: "Learn to present research findings clearly in presentations and seminars.",
        duration: "3 hours",
        level: "Beginner",
        price: "$35",
        paymentLink: "/checkout/presentation-academic-communication",
    },
    {
        id: 13,
        title: "Advanced Thesis Writing Workshop",
        description: "Hands-on tutorial for producing high-quality, publication-ready thesis content.",
        duration: "6 hours",
        level: "Advanced",
        price: "$89",
        paymentLink: "/checkout/advanced-thesis-writing-workshop",
    },
];


export default function AcademicWritingSupport() {
    const router = useRouter();

    return (
        <main className={`${poppins.className} min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>

            {/* Back Button */}
            <div className="px-6 lg:px-12 pt-24"> {/* pt-24 ensures it's below the fixed header */}
                <button
                    onClick={() => router.back()}
                    className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400 font-semibold bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow hover:shadow-lg transition-all"
                >
                    <ArrowLeft className="w-5 h-5" /> Back
                </button>
            </div>


            {/* Hero Section */}
            <section className="py-24 px-6 lg:px-12 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600"
                >
                    Academic Writing Support
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                    These expert-led tutorials are <strong>paid services</strong> designed to improve your essays, reports, theses, and academic papers. Gain immediate access upon purchase and elevate your writing skills.
                </motion.p>
            </section>

            {/* Tutorials Grid */}
            <section className="py-16 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                    {tutorials.map((tut) => (
                        <motion.div
                            key={tut.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden cursor-pointer"
                        >
                            <h3 className="text-2xl font-bold mb-2">{tut.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{tut.description}</p>
                            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                                <span>{tut.level}</span>
                                <span>{tut.duration}</span>
                                <span className="font-semibold text-gray-900 dark:text-gray-100">{tut.price}</span>
                            </div>
                            <Link
                                href={tut.paymentLink}
                                className="mt-4 inline-flex items-center font-semibold bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all"
                            >
                                Purchase Access <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Purchase a Tutorial?</h2>
                        <p className="text-xl mb-8 opacity-90">Select your preferred course and gain instant access to expert guidance and exercises.</p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-10 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
                        >
                            Request Custom Support
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
