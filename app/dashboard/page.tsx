"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BarChart, Brain, CheckCircle, Clock, Edit, FileText, PlayCircle, Sparkles, Star, Target, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { poppins } from "../fonts";
import Image from "next/image";

interface UserProgress {
    completedCourses: number;
    totalCourses: number;
    hoursSpent: number;
    achievements: number;
    streak: number;
}

interface EnrolledCourse {
    id: number;
    title: string;
    format: "video" | "text";
    progress: number;
    thumbnail: string;
    duration: string;
    lessons: number;
}

const mockUser = {
    name: "Amara Simone",
    avatar: "/student1.jpeg",
    level: "Intermediate Writer",
    points: 1450,
};

const mockProgress: UserProgress = {
    completedCourses: 4,
    totalCourses: 12,
    hoursSpent: 28,
    achievements: 15,
    streak: 7,
};

const mockEnrolledCourses: EnrolledCourse[] = [
    {
        id: 1,
        title: "Professional Business Writing Mastery",
        format: "video",
        progress: 65,
        thumbnail: "/video1.jpeg",
        duration: "5h 30m",
        lessons: 28,
    },
    {
        id: 2,
        title: "AI-Powered Content Creation",
        format: "video",
        progress: 40,
        thumbnail: "/video2.jpeg",
        duration: "4h 15m",
        lessons: 22,
    },
    {
        id: 3,
        title: "The Ultimate Editing Checklist",
        format: "text",
        progress: 85,
        thumbnail: "/video3.jpeg",
        duration: "2h read",
        lessons: 12,
    },
    {
        id: 4,
        title: "Copywriting That Converts",
        format: "video",
        progress: 20,
        thumbnail: "/video4.jpeg",
        duration: "7h 10m",
        lessons: 38,
    },
];

const mockRecommendedCourses = mockEnrolledCourses.slice(0, 3);

export default function DashboardPage() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isCursorActive, setIsCursorActive] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            {/* Custom Cursor */}
            {isCursorActive && (
                <motion.div
                    className="fixed w-8 h-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference opacity-80"
                    animate={{
                        x: mousePosition.x - 16,
                        y: mousePosition.y - 16,
                    }}
                    transition={{ type: "spring", damping: 30, stiffness: 200 }}
                />
            )}
            <main className={`${poppins.className} font-sans bg-white dark:bg-linear-to-b dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 min-h-screen overflow-x-hidden`}>
                {/* Background Animated Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute top-10 -left-40 w-96 h-96 bg-linear-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30"
                        animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute bottom-10 -right-40 w-96 h-96 bg-linear-to-r from-pink-400 to-yellow-400 rounded-full blur-3xl opacity-30"
                        animate={{ x: [0, -80, 0], y: [0, 100, 0] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* Hero Greeting Section */}
                <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
                    <motion.div
                        style={{ y }}
                        className="max-w-7xl mx-auto text-center relative z-10"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        onMouseEnter={() => setIsCursorActive(true)}
                        onMouseLeave={() => setIsCursorActive(false)}
                    >
                        <div className="flex flex-col items-center justify-center gap-6 mb-8">
                            <Image
                                src={mockUser.avatar}
                                alt="User Avatar"
                                width={80}
                                height={80}
                                className="w-20 h-20 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
                            />
                            <div className="text-center">
                                <h1 className="text-4xl md:text-5xl font-bold">
                                    Welcome Back, <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">{mockUser.name}</span>
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">{mockUser.level} • {mockUser.points} Points</p>
                            </div>
                        </div>

                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
                            Keep up the great work! Your current streak is <strong>{mockProgress.streak} days</strong>. Let's continue mastering professional writing.
                        </p>
                        <motion.a
                            href="/courses"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white px-10 py-4 text-lg font-semibold shadow-lg transition-all"
                        >
                            Explore New Tutorials <ArrowRight className="ml-2 w-5 h-5" />
                        </motion.a>
                    </motion.div>
                </section>

                {/* Progress Overview Section */}
                <section id="progress" className="py-20 px-6 lg:px-12 relative">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-center mb-16"
                        >
                            Your <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Writing Progress</span>
                        </motion.h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: <CheckCircle className="w-10 h-10" />, title: "Completed Courses", value: `${mockProgress.completedCourses}/${mockProgress.totalCourses}`, gradient: "from-blue-500 to-cyan-500" },
                                { icon: <Clock className="w-10 h-10" />, title: "Hours Spent", value: `${mockProgress.hoursSpent}h`, gradient: "from-purple-500 to-pink-500" },
                                { icon: <Star className="w-10 h-10" />, title: "Achievements", value: mockProgress.achievements, gradient: "from-yellow-400 to-orange-500" },
                                { icon: <Target className="w-10 h-10" />, title: "Current Streak", value: `${mockProgress.streak} days`, gradient: "from-green-500 to-teal-500" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    whileHover={{ scale: 1.05, rotateY: 5 }}
                                    className="group relative p-8 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <div className={`absolute inset-0 bg-linear-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                                    <div className="relative z-10">
                                        <div className={`w-20 h-20 rounded-2xl bg-linear-to-br ${stat.gradient} flex items-center justify-center text-white mb-4`}>
                                            {stat.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
                                        <p className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">{stat.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Enrolled Courses Section */}
                <section id="enrolled" className="py-20 px-6 lg:px-12 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-center mb-16"
                        >
                            Your <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Enrolled Tutorials</span>
                        </motion.h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {mockEnrolledCourses.map((course, i) => (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    whileHover={{ y: -12, rotateX: 5 }}
                                    className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden cursor-pointer"
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <div className="absolute inset-0 bg-linear-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/20 transition-all duration-500 z-10" />
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={course.thumbnail}
                                            alt={course.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
                                        <div className="absolute top-3 right-3 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                                            {course.progress}% Complete
                                        </div>
                                    </div>
                                    <div className="p-6 relative z-20">
                                        <h3 className="text-xl font-bold mb-2 line-clamp-1">{course.title}</h3>
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
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                                            <motion.div
                                                className="bg-linear-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${course.progress}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                            />
                                        </div>
                                        <motion.a
                                            href={`/courses/${course.id}`}
                                            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg group-hover:shadow-xl transition-all"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Continue Learning <PlayCircle className="w-4 h-4" />
                                        </motion.a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Recommended Courses Section */}
                <section id="recommended" className="py-20 px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-center mb-16"
                        >
                            Recommended for <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">You</span>
                        </motion.h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {mockRecommendedCourses.map((course, i) => (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                                    <div className="relative z-10">
                                        <Image
                                            src={course.thumbnail}
                                            alt={course.title}
                                            width={400}
                                            height={200}
                                            className="w-full h-40 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform"
                                        />
                                        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Enhance your skills with this {course.format} tutorial.</p>
                                        <motion.a
                                            href={`/courses/${course.id}`}
                                            className="inline-flex items-center font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 group-hover:pr-2 transition-all"
                                            whileHover={{ x: 4 }}
                                        >
                                            Start Now <Sparkles className="ml-1 w-4 h-4" />
                                        </motion.a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-28 px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="p-16 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl text-white">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Level Up Your Writing Today</h2>
                            <p className="text-xl mb-10 opacity-90">Unlock more tutorials and track your progress with premium access.</p>
                            <motion.a
                                href="/pricing"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-12 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
                            >
                                Upgrade Now <Zap className="ml-2 w-6 h-6" />
                            </motion.a>
                        </div>
                    </motion.div>
                </section>
            </main>
        </>
    );
}