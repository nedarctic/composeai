"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Filter, Play, FileText, Star, Clock, User, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { poppins } from "../fonts";

interface Course {
    id: number;
    title: string;
    instructor: string;
    category: string;
    format: "video" | "text";
    duration: string;
    lessons: number;
    price: number;
    rating: number;
    students: string;
    description: string;
    thumbnail: string;
    level: "Beginner" | "Intermediate" | "Advanced";
}

const mockCourses: Course[] = [
    // === Video Courses (10) ===
    {
        id: 1,
        title: "Professional Business Writing Mastery",
        instructor: "Nicholas Ogot",
        category: "Business",
        format: "video",
        duration: "5h 30m",
        lessons: 28,
        price: 79,
        rating: 4.9,
        students: "3,200+",
        description: "Craft compelling reports, emails, and proposals that get results.",
        thumbnail: "/video1.jpeg",
        level: "Intermediate",
    },
    {
        id: 2,
        title: "AI-Powered Content Creation",
        instructor: "Nicholas Ogot",
        category: "AI Tools",
        format: "video",
        duration: "4h 15m",
        lessons: 22,
        price: 69,
        rating: 4.8,
        students: "2,800+",
        description: "Use AI to draft, refine, and scale high-quality content fast.",
        thumbnail: "/video2.jpeg",
        level: "Beginner",
    },
    {
        id: 3,
        title: "Technical Writing for Engineers",
        instructor: "Nicholas Ogot",
        category: "Technical",
        format: "video",
        duration: "6h 45m",
        lessons: 32,
        price: 89,
        rating: 4.9,
        students: "1,900+",
        description: "Write clear documentation, manuals, and specs with precision.",
        thumbnail: "/video3.jpeg",
        level: "Advanced",
    },
    {
        id: 4,
        title: "Copywriting That Converts",
        instructor: "Nicholas Ogot",
        category: "Marketing",
        format: "video",
        duration: "7h 10m",
        lessons: 38,
        price: 99,
        rating: 5.0,
        students: "4,100+",
        description: "Write persuasive ads, landing pages, and email campaigns.",
        thumbnail: "/video4.jpeg",
        level: "Intermediate",
    },
    {
        id: 5,
        title: "Creative Storytelling for Brands",
        instructor: "Nicholas Ogot",
        category: "Creative",
        format: "video",
        duration: "5h 00m",
        lessons: 25,
        price: 75,
        rating: 4.7,
        students: "2,300+",
        description: "Build emotional narratives that captivate and convert.",
        thumbnail: "/video5.jpeg",
        level: "Intermediate",
    },
    {
        id: 6,
        title: "Academic Writing & Research Papers",
        instructor: "Nicholas Ogot",
        category: "Academic",
        format: "video",
        duration: "8h 20m",
        lessons: 42,
        price: 85,
        rating: 4.9,
        students: "1,700+",
        description: "Structure essays and papers with academic rigor.",
        thumbnail: "/video6.jpeg",
        level: "Advanced",
    },
    {
        id: 7,
        title: "Email Writing for Professionals",
        instructor: "Nicholas Ogot",
        category: "Business",
        format: "video",
        duration: "3h 45m",
        lessons: 18,
        price: 49,
        rating: 4.8,
        students: "5,200+",
        description: "Write concise, professional emails that get responses.",
        thumbnail: "/video7.jpeg",
        level: "Beginner",
    },
    {
        id: 8,
        title: "SEO Writing Fundamentals",
        instructor: "Nicholas Ogot",
        category: "Marketing",
        format: "video",
        duration: "4h 30m",
        lessons: 24,
        price: 65,
        rating: 4.7,
        students: "3,000+",
        description: "Rank higher with keyword-optimized, reader-friendly content.",
        thumbnail: "/video8.jpeg",
        level: "Beginner",
    },
    {
        id: 9,
        title: "Grant & Proposal Writing",
        instructor: "Nicholas Ogot",
        category: "Business",
        format: "video",
        duration: "6h 00m",
        lessons: 30,
        price: 95,
        rating: 4.9,
        students: "1,100+",
        description: "Win funding with structured, persuasive proposals.",
        thumbnail: "/video9.jpeg",
        level: "Advanced",
    },
    {
        id: 10,
        title: "Personal Branding Through Writing",
        instructor: "Nicholas Ogot",
        category: "Creative",
        format: "video",
        duration: "4h 50m",
        lessons: 26,
        price: 69,
        rating: 4.8,
        students: "2,600+",
        description: "Build authority with blogs, LinkedIn, and thought leadership.",
        thumbnail: "/video10.jpeg",
        level: "Intermediate",
    },

    // === Text-Based Tutorials (10) ===
    {
        id: 11,
        title: "The Ultimate Editing Checklist",
        instructor: "Nicholas Ogot",
        category: "Editing",
        format: "text",
        duration: "2h read",
        lessons: 12,
        price: 39,
        rating: 4.9,
        students: "4,800+",
        description: "Step-by-step guide to self-edit like a pro editor.",
        thumbnail: "/video1.jpeg", // Reuse thumbnails for visual consistency
        level: "Beginner",
    },
    {
        id: 12,
        title: "Writing Style Guides for Teams",
        instructor: "Nicholas Ogot",
        category: "Business",
        format: "text",
        duration: "1h 30m read",
        lessons: 8,
        price: 29,
        rating: 4.7,
        students: "3,100+",
        description: "Create consistent brand voice across all content.",
        thumbnail: "/video2.jpeg",
        level: "Intermediate",
    },
    {
        id: 13,
        title: "Active vs Passive Voice Mastery",
        instructor: "Nicholas Ogot",
        category: "Grammar",
        format: "text",
        duration: "1h read",
        lessons: 6,
        price: 19,
        rating: 4.8,
        students: "6,200+",
        description: "Know when and how to use each for maximum impact.",
        thumbnail: "/video3.jpeg",
        level: "Beginner",
    },
    {
        id: 14,
        title: "Writing High-Converting Sales Pages",
        instructor: "Nicholas Ogot",
        category: "Marketing",
        format: "text",
        duration: "3h read",
        lessons: 15,
        price: 59,
        rating: 5.0,
        students: "2,900+",
        description: "Templates and frameworks used by top copywriters.",
        thumbnail: "/video4.jpeg",
        level: "Intermediate",
    },
    {
        id: 15,
        title: "Clarity in Complex Writing",
        instructor: "Nicholas Ogot",
        category: "Technical",
        format: "text",
        duration: "2h 30m read",
        lessons: 10,
        price: 45,
        rating: 4.9,
        students: "1,800+",
        description: "Simplify jargon without losing meaning.",
        thumbnail: "/video5.jpeg",
        level: "Advanced",
    },
    {
        id: 16,
        title: "Writing for Social Media Impact",
        instructor: "Nicholas Ogot",
        category: "Marketing",
        format: "text",
        duration: "1h 45m read",
        lessons: 9,
        price: 35,
        rating: 4.6,
        students: "7,100+",
        description: "Short-form content that stops the scroll.",
        thumbnail: "/video6.jpeg",
        level: "Beginner",
    },
    {
        id: 17,
        title: "Tone & Voice in Professional Writing",
        instructor: "Nicholas Ogot",
        category: "Creative",
        format: "text",
        duration: "2h read",
        lessons: 11,
        price: 39,
        rating: 4.8,
        students: "3,400+",
        description: "Match tone to audience and purpose perfectly.",
        thumbnail: "/video7.jpeg",
        level: "Intermediate",
    },
    {
        id: 18,
        title: "Writing Case Studies That Sell",
        instructor: "Nicholas Ogot",
        category: "Business",
        format: "text",
        duration: "2h 15m read",
        lessons: 10,
        price: 49,
        rating: 4.9,
        students: "2,200+",
        description: "Structure success stories that build trust.",
        thumbnail: "/video8.jpeg",
        level: "Intermediate",
    },
    {
        id: 19,
        title: "Punctuation for Professionals",
        instructor: "Nicholas Ogot",
        category: "Grammar",
        format: "text",
        duration: "1h 30m read",
        lessons: 7,
        price: 25,
        rating: 4.7,
        students: "5,500+",
        description: "Master commas, dashes, and colons like a pro.",
        thumbnail: "/video9.jpeg",
        level: "Beginner",
    },
    {
        id: 20,
        title: "Writing White Papers That Convert",
        instructor: "Nicholas Ogot",
        category: "Business",
        format: "text",
        duration: "4h read",
        lessons: 18,
        price: 69,
        rating: 5.0,
        students: "1,300+",
        description: "In-depth guides that position you as an expert.",
        thumbnail: "/video10.jpeg",
        level: "Advanced",
    },
];

const categories = ["All", "Business", "Marketing", "Creative", "Technical", "Academic", "AI Tools", "Editing", "Grammar"];

export default function CoursesPage() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredCourses = mockCourses.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <main
            className={`${poppins.className} font-sans bg-white dark:bg-linear-to-b dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 min-h-screen overflow-x-hidden`}
        >
            {/* Background Orbs */}
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

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto text-center"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        Choose Your <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Writing Journey</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
                        Video lessons, in-depth text guides, and hands-on exercises — all taught by expert writer <strong>Nicholas Ogot</strong>.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search courses by title..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-16 pr-6 py-5 text-lg rounded-full border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </motion.div>
                    </div>

                    {/* Category Filters */}
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <motion.button
                                key={cat}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                                        ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Courses Grid */}
            <section className="py-20 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course, i) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -12, scale: 1.02 }}
                                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden cursor-pointer"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-linear-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/20 transition-all duration-500 z-10" />

                                {/* Thumbnail */}
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
                                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                        {course.format === "video" ? (
                                            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                                                <Play className="w-4 h-4 text-white" />
                                            </div>
                                        ) : (
                                            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                                                <FileText className="w-4 h-4 text-white" />
                                            </div>
                                        )}
                                        <span className="text-xs font-medium text-white">{course.format === "video" ? "Video Course" : "Text Guide"}</span>
                                    </div>
                                    <div className="absolute top-3 right-3 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                                        {course.level}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 relative z-20">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">{course.category}</span>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                            <span className="text-sm font-medium">{course.rating}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{course.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{course.description}</p>

                                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FileText className="w-4 h-4" />
                                            <span>{course.lessons} lessons</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-linear-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                                                N
                                            </div>
                                            <span className="text-sm font-medium">{course.instructor}</span>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                                                ${course.price}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{course.students} students</p>
                                        </div>
                                    </div>

                                    <motion.a
                                        href={`/courses/${course.id}`}
                                        className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg group-hover:shadow-xl transition-all"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Enroll Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredCourses.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <Sparkles className="mx-auto w-16 h-16 text-gray-300 dark:text-gray-700 mb-4" />
                            <p className="text-xl text-gray-500 dark:text-gray-400">No courses found. Try adjusting your search or filters.</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-28 px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="p-16 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Write Like a Pro?</h2>
                        <p className="text-xl mb-10 opacity-90">Join 12,000+ learners improving their writing with ComposeAI.</p>
                        <motion.a
                            href="/signup"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-12 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
                        >
                            Start Free Trial <Sparkles className="ml-2 w-6 h-6" />
                        </motion.a>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}