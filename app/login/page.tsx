"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Brain, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { oswald } from "../fonts";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCursorActive, setIsCursorActive] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <>
      {isCursorActive && (
        <motion.div
          className="fixed w-8 h-8 bg-linear-to-r from-[#E8B85F]/90 to-[#E8B85F] rounded-full pointer-events-none z-50 mix-blend-difference opacity-80"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      )}

      <main
        onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
        className={`${oswald.className} font-sans bg-white dark:bg-linear-to-b dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 min-h-screen overflow-hidden`}
      >
        {/* Background Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/3 -left-40 w-96 h-96 bg-linear-to-r from-[#E8B85F]/90 to-[#E8B85F] rounded-full blur-3xl opacity-20"
            animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/3 -right-40 w-96 h-96 bg-linear-to-r from-[#E8B85F]/90 to-yellow-400 rounded-full blur-3xl opacity-20"
            animate={{ x: [0, -80, 0], y: [0, 100, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)] pt-40 pb-20 lg:pt-40 lg:pb-20 px-6 sm:px-10 md:px-16 relative">
          {/* Left Section */}
          <div className="flex-1 flex flex-col lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onMouseEnter={() => setIsCursorActive(true)}
              onMouseLeave={() => setIsCursorActive(false)}
              className="w-full max-w-md"
            >
              {/* Logo */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <h1 className="text-3xl font-bold bg-linear-to-r from-[#E8B85F]/90 to-[#E8B85F] bg-clip-text text-transparent">
                    ScholarBrood
                  </h1>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Continue your writing journey
                </p>
              </div>

              {/* Login Form */}
              <motion.form
                onSubmit={handleLogin}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={`${oswald.className} block w-full pl-12 pr-3 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    required
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className={`${oswald.className} block w-full pl-12 pr-12 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition" />
                    )}
                  </button>
                </div>

                {/* Remember me + Forgot */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <input type="checkbox" className="w-4 h-4 text-[#E8B85F] rounded" />
                    Remember me
                  </label>
                  <a href="#" className="font-medium text-[#E8B85F] hover:text-[#E8B85F]/90">
                    Forgot password?
                  </a>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${oswald.className} w-full flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-[#E8B85F]/90 to-[#E8B85F] text-white py-4 px-6 font-semibold shadow-lg transition-all duration-300 disabled:opacity-50`}
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className={`${oswald.className} w-5 h-5 border-2 border-white border-t-transparent rounded-full`}
                      />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </motion.form>

              {/* Divider */}
              <div className="mt-10 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#E8B85F]/90 dark:border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-900 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Google Login */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className={`${oswald.className} mt-6 w-full inline-flex justify-center items-center gap-3 py-3 px-4 border border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition`}
              >
                <FcGoogle className="w-5 h-5" />
                Continue with Google
              </motion.button>

              <p className={`${oswald.className} mt-10 text-center text-gray-600 dark:text-gray-400`}>
                Don’t have an account?{" "}
                <a href="/signup" className={`${oswald.className} font-semibold text-[#E8B85F] hover:text-[#E8B85F]/90`}>
                  Sign up now
                </a>
              </p>
            </motion.div>
          </div>

          {/* Right - Visual Side */}
          <div className="hidden lg:flex flex-1 items-center justify-center bg-linear-to-br from-[#E8B85F]/10 to-[#E8B85F]/20 dark:from-gray-800 dark:to-gray-900 p-16 rounded-2xl">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-lg relative"
            >
              <motion.div
                whileHover={{ y: -10, rotateZ: -2 }}
                className="absolute -top-8 -left-8 w-64 p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-20"
              >
                <Zap className="w-8 h-8 text-yellow-500 mb-3" />
                <h3 className="text-lg font-bold mb-2">Learn Quickly</h3>
                <p className={`${oswald.className} text-sm text-gray-600 dark:text-gray-300`}>
                  Concise tutorials with practical exercises
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, rotateZ: 2 }}
                className="absolute top-20 left-32 w-64 p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-10"
              >
                <Brain className="w-8 h-8 text--[#E8B85F] mb-3" />
                <h3 className="text-lg font-bold mb-2">Expert Techniques</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Proven strategies for professional writing
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="relative w-72 p-8 bg-linear-to-br from-[#E8B85F]/90 to-[#E8B85F] rounded-3xl shadow-2xl text-white mt-32"
              >
                <Sparkles className="w-10 h-10 mb-4" />
                <h2 className="text-2xl font-bold mb-3">Welcome Back!</h2>
                <p className="opacity-90">
                  Continue your journey to master professional writing with expert-led tutorials.
                </p>
                <div className="mt-6 flex -space-x-2">
                  {["/student1.jpeg", "/student2.jpeg", "/student3.jpeg"].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Learner ${i + 1}`}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold border-2 border-white">
                    +2.1k
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
