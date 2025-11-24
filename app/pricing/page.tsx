'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { Check, X, Zap, Sparkles, PenTool, Shield, Users, Star, ArrowRight, Crown } from "lucide-react";
import { useState } from "react";
import { poppins } from "../fonts";
import Link from "next/link";

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
    description: "Perfect for exploring ScholarBrood and getting started with writing.",
    features: [
      "Access to 8 beginner writing tutorials",
      "All free templates & checklists",
      "Community forum access",
      "Progress tracking",
      "Certificates of completion",
    ],
    notIncluded: [
      "Full video tutorial library",
      "Personalized writing feedback",
      "Advanced & professional templates",
      "1-on-1 editorial coaching",
      "Offline downloads",
    ],
    icon: <Sparkles className="w-10 h-10" />,
  },
  {
    name: "Scholar Pro",
    price: 29,
    billing: "/month",
    description: "The complete academic & professional writing mastery package.",
    features: [
      "Unlimited video + text tutorials (200+ hours)",
      "Detailed, human editorial feedback on your drafts",
      "Every premium template, checklist & worksheet",
      "Priority email + chat support",
      "Weekly live writing workshops",
      "Verified certificates + LinkedIn badges",
      "Offline access & lifetime downloads",
      "New resources added monthly",
    ],
    popular: true,
    icon: <PenTool className="w-10 h-10" />,
  },
  {
    name: "Institution",
    price: 79,
    billing: "/user/month",
    description: "Built for universities, writing centers, and academic departments.",
    features: [
      "Everything in Scholar Pro for all users",
      "Admin dashboard & student progress tracking",
      "Custom branding & institutional style guides",
      "Bulk licensing & SSO integration",
      "Dedicated account manager",
      "Faculty training & onboarding workshops",
      "Unlimited seats + API access",
    ],
    icon: <Users className="w-10 h-10" />,
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
    <main className={`${poppins.className} min-h-screen bg-white dark:bg-[#1C1C30] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-x-hidden`}>
      {/* Subtle Gold Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <motion.div
          className="absolute top-20 -left-48 w-96 h-96 sm:w-[800px] sm:h-[800px] bg-[#E8B85F] rounded-full blur-3xl"
          animate={{ x: [0, 120, 0], y: [0, -120, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 -right-48 w-80 h-80 sm:w-[700px] sm:h-[700px] bg-[#E8B85F]/70 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-6 text-center">
        <motion.div
          style={{ y }}
          className="max-w-7xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Simple, Transparent <span className="text-[#E8B85F]">Pricing</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 px-4">
            Choose the plan that fits your writing goals. Upgrade, downgrade, or cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-16">
            <span className={`text-lg sm:text-xl font-medium ${billingCycle === "monthly" ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
              Monthly
            </span>

            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative w-20 h-11 rounded-full bg-[#E8B85F] p-1.5 shadow-lg"
              aria-label="Toggle billing cycle"
            >
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 left-1.5 w-8 h-8 bg-[#1C1C30] dark:bg-white rounded-full shadow-xl"
                animate={{ x: billingCycle === "monthly" ? 0 : 36 }}
                transition={{ type: "spring", stiffness: 320, damping: 30 }}
              />
            </button>

            <div className="flex items-center gap-3">
              <span className={`text-lg sm:text-xl font-medium ${billingCycle === "yearly" ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
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
      <section className="relative py-16 sm:py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {pricingTiers.map((tier, i) => {
            const prices = getPrice(tier);
            const displayPrice = billingCycle === "monthly" ? prices.monthly : prices.yearly;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className={`relative group ${tier.popular ? "md:scale-105 lg:scale-110 z-10" : ""}`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-5 py-2 bg-[#E8B85F] text-[#1C1C30] font-bold rounded-full flex items-center gap-2 shadow-2xl text-sm sm:text-base">
                      <Crown className="w-5 h-5" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="h-full p-8 sm:p-10 bg-gray-50 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 hover:border-[#E8B85F]/50 transition-all duration-500 shadow-2xl">
                  <div className="absolute inset-0 bg-[#E8B85F] opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity" />
                  <div className="absolute -inset-1 bg-[#E8B85F] blur-3xl opacity-0 group-hover:opacity-20 rounded-3xl -z-10 transition-opacity" />

                  <div className="relative z-10 space-y-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#E8B85F]/20 text-[#E8B85F] flex items-center justify-center group-hover:bg-[#E8B85F]/30 transition">
                      {tier.icon}
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-3">{tier.name}</h3>
                      <div className="flex items-end gap-2">
                        <span className="text-5xl sm:text-6xl font-bold">${displayPrice}</span>
                        <span className="text-gray-600 dark:text-gray-400 mb-2 text-lg">{tier.billing}</span>
                      </div>
                      {billingCycle === "yearly" && displayPrice !== tier.price && (
                        <p className="text-[#E8B85F] font-medium mt-2 text-sm sm:text-base">
                          Billed ${displayPrice * 12}/year
                        </p>
                      )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">{tier.description}</p>

                    <ul className="space-y-4">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-4">
                          <Check className="w-6 h-6 text-[#E8B85F] flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base">{f}</span>
                        </li>
                      ))}
                      {tier.notIncluded?.map((f) => (
                        <li key={f} className="flex items-start gap-4 opacity-50">
                          <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-5 rounded-2xl font-bold text-base sm:text-lg shadow-xl transition-all ${
                        tier.popular
                          ? "bg-[#E8B85F] text-[#1C1C30] hover:bg-[#d4a44e]"
                          : "bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600"
                      }`}
                    >
                      {tier.name === "Free" ? "Get Started Free" : "Start 14-Day Free Trial"}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="relative p-12 sm:p-20 rounded-3xl bg-gradient-to-br from-[#E8B85F] to-[#d4a44e] shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/40 dark:bg-[#1C1C30]/60" />
            <div className="relative z-10 flex flex-col items-center gap-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl leading-tight px-4">
                Start Writing at a Higher Level
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow-lg max-w-3xl mx-auto px-6">
                Join thousands of students, professors, and professionals who have transformed their writing with ScholarBrood.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 w-full max-w-2xl mx-auto px-4">
                <Link
                  href="/signup"
                  className="w-full px-10 py-5 bg-white text-[#1C1C30] text-base sm:text-lg lg:text-xl font-bold rounded-full shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all flex items-center justify-center gap-3 whitespace-nowrap"
                >
                  Start Free Trial <Zap className="w-6 h-6" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full px-10 py-5 border-4 border-white text-white text-base sm:text-lg lg:text-xl font-bold rounded-full hover:bg-white hover:text-[#1C1C30] transition-all backdrop-blur-sm shadow-xl text-center whitespace-nowrap"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}