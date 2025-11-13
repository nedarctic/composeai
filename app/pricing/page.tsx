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
    gradient: string;
    icon: React.ReactNode;
}

const pricingTiers: PricingTier[] = [
    {
        name: "Free",
        price: 0,
        billing: "forever",
        description: "Perfect for trying out ComposeAI and learning the basics.",
        features: [
            "Access to 3 beginner tutorials",
            "Text-based guides only",
            "Community support",
            "Progress tracking",
            "Certificates of completion",
        ],
        notIncluded: [
            "Video courses",
            "AI writing feedback",
            "Premium templates",
            "1-on-1 mentoring",
            "Offline access",
        ],
        gradient: "from-gray-400 to-gray-600",
        icon: <Sparkles className="w-8 h-8" />,
    },
    {
        name: "Pro",
        price: 19,
        billing: "/month",
        description: "Ideal for serious writers ready to level up fast.",
        features: [
            "Unlimited video & text tutorials",
            "AI-powered writing feedback",
            "Downloadable worksheets & templates",
            "Priority email support",
            "Weekly live Q&A sessions",
            "Certificates + LinkedIn badges",
            "Offline access",
        ],
        popular: true,
        gradient: "from-blue-600 via-purple-600 to-pink-600",
        icon: <Brain className="w-8 h-8" />,
    },
    {
        name: "Team",
        price: 49,
        billing: "/user/month",
        description: "Empower your entire team with professional writing skills.",
        features: [
            "Everything in Pro",
            "Team progress dashboard",
            "Custom style guide builder",
            "Bulk user management",
            "Dedicated account manager",
            "Custom onboarding & training",
            "API access for integrations",
        ],
        gradient: "from-indigo-600 to-purple-700",
        icon: <Users className="w-8 h-8" />,
    },
];

export default function PricingPage() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isCursorActive, setIsCursorActive] = useState(false);
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const getPrice = (tier: PricingTier) => {
        if (tier.name === "Free") return { monthly: 0, yearly: 0 };
        if (tier.name === "Pro") return { monthly: 19, yearly: 15 }; // 20% discount
        if (tier.name === "Team") return { monthly: 49, yearly: 39 };
        return { monthly: tier.price, yearly: tier.price };
    };

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
                <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
                    <motion.div
                        style={{ y }}
                        className="max-w-7xl mx-auto text-center relative z-10"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        onMouseEnter={() => setIsCursorActive(true)}
                        onMouseLeave={() => setIsCursorActive(false)}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Simple, Transparent <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Pricing</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
                            Choose the plan that fits your writing goals. Upgrade, downgrade, or cancel anytime.
                        </p>

                        {/* Billing Toggle */}
                        <div className="flex items-center justify-center gap-4 mb-12">
                            <span className={`text-lg font-medium  ${billingCycle === "monthly" ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>Monthly</span>
                            <button
                                onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                                className="relative w-16 h-9 rounded-full bg-linear-to-r from-blue-600 to-purple-600 p-1 transition-all"
                            >
                                <motion.div
                                    className="absolute top-1/2 w-7 h-7 bg-white rounded-full shadow-md -translate-y-1/2"
                                    animate={{ x: billingCycle === "monthly" ? 4 : 28 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                            </button>

                            <div className="flex items-center gap-2">
                                <span className={`text-lg font-medium ${billingCycle === "yearly" ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>Yearly</span>
                                <span className="px-2 py-1 text-xs font-bold text-green-600 bg-green-100 rounded-full">Save 20%</span>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Pricing Cards */}
                <section className="py-20 px-6 lg:px-12 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            {pricingTiers.map((tier, i) => {
                                const prices = getPrice(tier);
                                const displayPrice = billingCycle === "monthly" ? prices.monthly : prices.yearly;

                                return (
                                    <motion.div
                                        key={tier.name}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.2 }}
                                        whileHover={{ y: -12, scale: 1.02 }}
                                        className={`relative group rounded-3xl ${tier.popular ? "lg:scale-105" : ""}`}
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        {/* Popular Badge */}
                                        {tier.popular && (
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="px-4 py-1 bg-linear-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full flex items-center gap-1 shadow-lg"
                                                >
                                                    <Star className="w-4 h-4 fill-current" />
                                                    Most Popular
                                                </motion.div>
                                            </div>
                                        )}

                                        <div className={`h-full p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border ${tier.popular ? "border-transparent" : "border-gray-200 dark:border-gray-700"} relative overflow-hidden`}>
                                            {/* Gradient Background for Popular */}
                                            {tier.popular && (
                                                <div className="absolute inset-0 opacity-10">
                                                    <div className={`absolute inset-0 bg-linear-to-br ${tier.gradient}`} />
                                                </div>
                                            )}

                                            <div className="relative z-10">
                                                {/* Icon */}
                                                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${tier.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}>
                                                    {tier.icon}
                                                </div>

                                                {/* Plan Name & Price */}
                                                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                                <div className="mb-6">
                                                    <span className="text-5xl font-bold">${displayPrice}</span>
                                                    <span className="text-gray-500 dark:text-gray-400"> {tier.billing}</span>
                                                    {billingCycle === "yearly" && displayPrice !== tier.price && (
                                                        <p className="text-sm text-green-600 font-medium mt-1">Billed ${displayPrice * 12}/year</p>
                                                    )}
                                                </div>

                                                <p className="text-gray-600 dark:text-gray-300 mb-8">{tier.description}</p>

                                                {/* Features */}
                                                <ul className="space-y-4 mb-8">
                                                    {tier.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                                        </li>
                                                    ))}
                                                    {tier.notIncluded?.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 opacity-50">
                                                            <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                                            <span className="text-gray-500 dark:text-gray-600">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* CTA Button */}
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className={`w-full py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all ${tier.popular
                                                            ? "bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-xl"
                                                            : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                                                        }`}
                                                >
                                                    {tier.name === "Free" ? "Get Started Free" : "Start Free Trial"}
                                                    {tier.popular && <Crown className="inline ml-2 w-5 h-5" />}
                                                </motion.button>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Feature Comparison Table */}
                <section className="py-20 px-6 lg:px-12 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-center mb-16"
                        >
                            Compare All <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Features</span>
                        </motion.h2>

                        <div className="overflow-x-auto rounded-2xl shadow-xl bg-white dark:bg-gray-800">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th className="text-left p-6 font-semibold text-gray-900 dark:text-white">Feature</th>
                                        <th className="text-center p-6">
                                            <div className="text-sm font-medium text-gray-500">Free</div>
                                        </th>
                                        <th className="text-center p-6">
                                            <div className="text-sm font-medium bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pro</div>
                                        </th>
                                        <th className="text-center p-6">
                                            <div className="text-sm font-medium text-indigo-600">Team</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {[
                                        { feature: "Video & Text Tutorials", free: "3", pro: "Unlimited", team: "Unlimited" },
                                        { feature: "AI Writing Feedback", free: <X className="w-5 h-5 text-red-500 mx-auto" />, pro: <Check className="w-5 h-5 text-green-500 mx-auto" />, team: <Check className="w-5 h-5 text-green-500 mx-auto" /> },
                                        { feature: "Downloadable Resources", free: <X className="w-5 h-5 text-red-500 mx-auto" />, pro: <Check className="w-5 h-5 text-green-500 mx-auto" />, team: <Check className="w-5 h-5 text-green-500 mx-auto" /> },
                                        { feature: "Live Q&A Sessions", free: <X className="w-5 h-5 text-red-500 mx-auto" />, pro: <Check className="w-5 h-5 text-green-500 mx-auto" />, team: <Check className="w-5 h-5 text-green-500 mx-auto" /> },
                                        { feature: "Team Dashboard", free: <X className="w-5 h-5 text-red-500 mx-auto" />, pro: <X className="w-5 h-5 text-red-500 mx-auto" />, team: <Check className="w-5 h-5 text-green-500 mx-auto" /> },
                                        { feature: "Custom Style Guides", free: <X className="w-5 h-5 text-red-500 mx-auto" />, pro: <X className="w-5 h-5 text-red-500 mx-auto" />, team: <Check className="w-5 h-5 text-green-500 mx-auto" /> },
                                        { feature: "Priority Support", free: "Community", pro: "Email", team: "Dedicated" },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                                            <td className="p-6 text-gray-700 dark:text-gray-300">{row.feature}</td>
                                            <td className="p-6 text-center">{row.free}</td>
                                            <td className="p-6 text-center font-medium">{row.pro}</td>
                                            <td className="p-6 text-center font-medium">{row.team}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-center mb-16"
                        >
                            Frequently Asked <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
                        </motion.h2>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "Can I cancel my subscription anytime?",
                                    a: "Yes! You can cancel anytime from your account settings. No questions asked.",
                                },
                                {
                                    q: "Is there a free trial?",
                                    a: "Pro and Team plans come with a 7-day free trial. No credit card required.",
                                },
                                {
                                    q: "Do you offer discounts for students or nonprofits?",
                                    a: "Absolutely! Contact us at support@composeai.com with proof for a special rate.",
                                },
                                {
                                    q: "Can I switch plans later?",
                                    a: "Yes, upgrade or downgrade anytime. You'll be prorated automatically.",
                                },
                            ].map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                                >
                                    <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-28 px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="p-16 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl text-white">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Writing Like a Pro Today</h2>
                            <p className="text-xl mb-10 opacity-90">Join 12,000+ writers improving their craft with ComposeAI.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.a
                                    href="/signup"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-10 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
                                >
                                    Start Free Trial <Zap className="ml-2 w-6 h-6" />
                                </motion.a>
                                <motion.a
                                    href="/courses"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center justify-center rounded-full border-2 border-white/50 px-10 py-5 text-lg font-bold backdrop-blur-sm hover:bg-white/10 transition-all"
                                >
                                    Browse Tutorials <ArrowRight className="ml-2 w-5 h-5" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>
        </>
    );
}