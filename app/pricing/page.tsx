"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, X, Zap, Sparkles, Brain, Shield, Users, Star, ArrowRight, Crown } from "lucide-react";
import { useEffect, useState } from "react";
import { poppins } from "../fonts";

interface PricingTier {
    name: string;
    price: number;
    billing: string;
    description: string;
    features: string[];
    notIncluded?: string[];
    popular?: boolean;
    icon: React.ReactNode;
}

const pricingTiers: PricingTier[] = [
    {
        name: "Free",
        price: 0,
        billing: "forever",
        description: "Perfect for exploring ScholarBrood and getting started.",
        features: [
            "Access to 5 beginner tutorials",
            "Text-based guides & resources",
            "Community forum access",
            "Progress tracking",
            "Certificates of completion",
        ],
        notIncluded: [
            "Full video library",
            "AI writing feedback",
            "Premium templates & checklists",
            "1-on-1 mentorship",
            "Offline access",
        ],
        icon: <Sparkles className="w-9 h-9" />,
    },
    {
        name: "Scholar Pro",
        price: 29,
        billing: "/month",
        description: "The complete academic writing & research mastery package.",
        features: [
            "Unlimited video + text tutorials",
            "AI-powered writing feedback",
            "All premium templates & worksheets",
            "Priority email support",
            "Weekly live mentorship sessions",
            "Verified certificates + LinkedIn badges",
            "Offline access & downloads",
        ],
        popular: true,
        icon: <Brain className="w-9 h-9" />,
    },
    {
        name: "Institution",
        price: 79,
        billing: "/user/month",
        description: "Built for universities, departments, and research teams.",
        features: [
            "Everything in Scholar Pro",
            "Team & student progress dashboard",
            "Custom branding & style guides",
            "Bulk licensing & user management",
            "Dedicated success manager",
            "Onboarding workshops",
            "API & LMS integration",
        ],
        icon: <Users className="w-9 h-9" />,
    },
];

export default function PricingPage() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    const getPrice = (tier: PricingTier) => {
        if (tier.name === "Free") return { monthly: 0, yearly: 0 };
        if (tier.name === "Scholar Pro") return { monthly: 29, yearly: 23 };
        if (tier.name === "Institution") return { monthly: 79, yearly: 63 };
        return { monthly: tier.price, yearly: tier.price };
    };

    return (
        <main className={`${poppins.className} min-h-screen bg-[#1C1C30] text-gray-100 overflow-x-hidden`}>
            {/* Subtle Gold Orbs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-20 -left-48 w-[800px] h-[800px] bg-[#E8B85F] rounded-full blur-3xl opacity-10"
                    animate={{ x: [0, 120, 0], y: [0, -120, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-20 -right-48 w-[700px] h-[700px] bg-[#E8B85F]/70 rounded-full blur-3xl opacity-10"
                    animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Hero */}
            <section className="relative pt-32 pb-20 px-6 lg:px-12 text-center">
                <motion.div
                    style={{ y }}
                    className="max-w-7xl mx-auto relative z-10"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
                        Simple, Transparent <span className="text-[#E8B85F]">Pricing</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
                        Choose the plan that matches your academic journey. Upgrade, downgrade, or cancel anytime.
                    </p>

                    {/* FIXED Billing Toggle */}
                    <div className="flex items-center justify-center gap-8 mb-16">
                        <span className={`text-lg font-medium transition ${billingCycle === "monthly" ? "text-white" : "text-gray-500"}`}>
                            Monthly
                        </span>

                        <button
                            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                            className="relative w-20 h-11 rounded-full bg-[#E8B85F] p-1.5 shadow-lg cursor-pointer"
                            aria-label="Toggle billing cycle"
                        >
                            <motion.div
                                className="absolute top-1/2 -translate-y-1/2 left-1.5 w-8 h-8 bg-[#1C1C30] rounded-full shadow-xl"
                                animate={{ x: billingCycle === "monthly" ? 0 : 36 }}
                                transition={{ type: "spring", stiffness: 320, damping: 30 }}
                            />
                        </button>

                        <div className="flex items-center gap-3">
                            <span className={`text-lg font-medium transition ${billingCycle === "yearly" ? "text-white" : "text-gray-500"}`}>
                                Yearly
                            </span>
                            <span className="px-3 py-1.5 text-sm font-bold text-[#1C1C30] bg-[#E8B85F] rounded-full">
                                Save 20%
                            </span>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Pricing Cards */}
            <section className="relative py-20 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
                    {pricingTiers.map((tier, i) => {
                        const prices = getPrice(tier);
                        const displayPrice = billingCycle === "monthly" ? prices.monthly : prices.yearly;

                        return (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                whileHover={{ y: -16, scale: 1.03 }}
                                className={`relative group ${tier.popular ? "lg:scale-110 z-10" : ""}`}
                            >
                                {/* Popular Crown Badge */}
                                {tier.popular && (
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                                        <div className="px-6 py-2 bg-[#E8B85F] text-[#1C1C30] font-bold rounded-full flex items-center gap-2 shadow-2xl">
                                            <Crown className="w-5 h-5 fill-current" />
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="h-full p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-gray-800 hover:border-[#E8B85F]/50 transition-all duration-500 shadow-2xl">
                                    {/* Gold glow on hover */}
                                    <div className="absolute inset-0 bg-[#E8B85F] opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-700" />
                                    <div className="absolute -inset-1 bg-[#E8B85F] blur-3xl opacity-0 group-hover:opacity-20 rounded-3xl -z-10 transition-opacity" />

                                    <div className="relative z-10 space-y-8">
                                        <div className="w-20 h-20 rounded-2xl bg-[#E8B85F]/20 text-[#E8B85F] flex items-center justify-center group-hover:bg-[#E8B85F]/30 transition">
                                            {tier.icon}
                                        </div>

                                        <div>
                                            <h3 className="text-3xl font-bold mb-3">{tier.name}</h3>
                                            <div className="flex items-end gap-2">
                                                <span className="text-6xl font-bold">${displayPrice}</span>
                                                <span className="text-gray-400 mb-2">{tier.billing}</span>
                                            </div>
                                            {billingCycle === "yearly" && displayPrice !== tier.price && (
                                                <p className="text-[#E8B85F] font-medium mt-2">Billed ${displayPrice * 12}/year</p>
                                            )}
                                        </div>

                                        <p className="text-gray-300 text-lg">{tier.description}</p>

                                        <ul className="space-y-4">
                                            {tier.features.map((f) => (
                                                <li key={f} className="flex items-start gap-4">
                                                    <Check className="w-6 h-6 text-[#E8B85F] shrink-0 mt-0.5" />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                            {tier.notIncluded?.map((f) => (
                                                <li key={f} className="flex items-start gap-4 opacity-40">
                                                    <X className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                                                    <span className="text-gray-500">{f}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`w-full py-5 rounded-2xl font-bold text-lg shadow-xl transition-all ${tier.popular
                                                    ? "bg-[#E8B85F] text-[#1C1C30] hover:bg-[#d4a44e]"
                                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                                }`}
                                        >
                                            {tier.name === "Free" ? "Get Started Free" : "Start Free Trial"}
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <div className="relative p-20 rounded-3xl bg-gradient-to-br from-[#E8B85F] to-[#d4a44e] shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-[#1C1C30] opacity-40" />
                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-6xl font-bold text-[#1C1C30] mb-8">
                                Start Your Journey Today
                            </h2>
                            <p className="text-2xl text-[#1C1C30]/90 mb-12 max-w-3xl mx-auto">
                                Join thousands of students and researchers already mastering academic excellence with ScholarBrood.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <motion.a
                                    href="/signup"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-12 py-6 bg-[#1C1C30] text-[#E8B85F] text-xl font-bold rounded-full hover:bg-[#1C1C30]/90 shadow-2xl transition-all flex items-center justify-center gap-3"
                                >
                                    Start Free Trial <Zap className="w-7 h-7" />
                                </motion.a>
                                <motion.a
                                    href="/contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-12 py-6 border-4 border-[#1C1C30] text-[#1C1C30] text-xl font-bold rounded-full hover:bg-[#1C1C30] hover:text-[#E8B85F] transition-all"
                                >
                                    Contact Sales
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}