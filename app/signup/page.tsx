"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Loader2, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { oswald } from "../fonts"; // ← changed to oswald to match login
import { signup } from "../lib/helpers";

export default function SignUpPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<{ type: "success" | "error" | null; message?: string }>({ type: null });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCursorActive, setIsCursorActive] = useState(false);

  const onChange = (k: keyof typeof form, v: string) => setForm((s) => ({ ...s, [k] : v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModal({ type: null });

    if (!form.first_name.trim() || !form.last_name.trim()) {
      return setModal({ type: "error", message: "Please enter your first and last name." });
    }
    if (form.password1 !== form.password2) {
      return setModal({ type: "error", message: "Passwords do not match." });
    }

    setLoading(true);
    const res = await signup(form.email, form.password1, form.password2, form.first_name, form.last_name);
    setLoading(false);

    if (!res.success) {
      const err = res.error;
      const message =
        (err?.email && Array.isArray(err.email) && err.email.join(" ")) ||
        (err?.password1 && Array.isArray(err.password1) && err.password1.join(" ")) ||
        (err?.non_field_errors && Array.isArray(err.non_field_errors) && err.non_field_errors.join(" ")) ||
        "Registration failed. Please try again.";
      return setModal({ type: "error", message });
    }

    setModal({ type: "success", message: "Account created! Check your email for verification." });
  };

  return (
    <>
      {isCursorActive && (
        <motion.div
          className="fixed w-8 h-8 bg-gradient-to-r from-[#E8B85F]/90 to-[#E8B85F] rounded-full pointer-events-none z-50 mix-blend-difference opacity-80"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      )}

      <main
        onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
        className={`${oswald.className} bg-white dark:bg-gradient-to-b dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 min-h-screen overflow-hidden`}
        onMouseEnter={() => setIsCursorActive(true)}
        onMouseLeave={() => setIsCursorActive(false)}
      >
        {/* Background Animated Golden Orbs – same as login */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-r from-[#E8B85F]/90 to-[#E8B85F] rounded-full blur-3xl opacity-20"
            animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/3 -right-40 w-96 h-96 bg-gradient-to-r from-[#E8B85F]/90 to-yellow-400 rounded-full blur-3xl opacity-20"
            animate={{ x: [0, -80, 0], y: [0, 100, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)] pt-40 pb-20 lg:pt-40 lg:pb-20 px-6 sm:px-10 md:px-16 relative">
          {/* Left – Form Section */}
          <div className="flex-1 flex items-center justify-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-md"
            >
              {/* Logo & Title */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8B85F]/90 to-[#E8B85F] bg-clip-text text-transparent">
                    ScholarBrood
                  </h1>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Start your journey to academic excellence
                </p>
              </div>

              {/* Form */}
              <motion.form onSubmit={handleSubmit} className="space-y-6">
                {/* Names */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="First name"
                      value={form.first_name}
                      onChange={(e) => onChange("first_name", e.target.value)}
                      className="block w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E8B85F]/50 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Last name"
                      value={form.last_name}
                      onChange={(e) => onChange("last_name", e.target.value)}
                      className="block w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E8B85F]/50 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => onChange("email", e.target.value)}
                    className="block w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E8B85F]/50 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    value={form.password1}
                    onChange={(e) => onChange("password1", e.target.value)}
                    className="block w-full pl-12 pr-12 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E8B85F]/50 focus:border-transparent transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={form.password2}
                    onChange={(e) => onChange("password2", e.target.value)}
                    className="block w-full pl-12 pr-12 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E8B85F]/50 focus:border-transparent transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                  </button>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#E8B85F]/90 to-[#E8B85F] text-white py-4 px-6 font-semibold shadow-lg transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Creating account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </motion.button>
              </motion.form>

              {/* Google */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="mt-6 w-full inline-flex justify-center items-center gap-3 py-3.5 px-4 border border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <FcGoogle className="w-5 h-5" />
                Sign up with Google
              </motion.button>

              <p className="mt-10 text-center text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link href="/login" className="font-semibold text-[#E8B85F] hover:text-[#E8B85F]/90">
                  Sign in now
                </Link>
              </p>
            </motion.div>
          </div>

          {/* Right – Visual Side (matched to login) */}
          <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-[#E8B85F]/10 to-[#E8B85F]/20 dark:from-gray-800 dark:to-gray-900 p-16 rounded-2xl">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-lg relative"
            >
              {/* Floating info cards */}
              <motion.div
                whileHover={{ y: -10, rotateZ: -2 }}
                className="absolute -top-8 -left-8 w-64 p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-20"
              >
                <Mail className="w-8 h-8 text-[#E8B85F] mb-3" />
                <h3 className="text-lg font-bold mb-2">Verified Learning</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Get instant access to premium tutorials
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, rotateZ: 2 }}
                className="absolute top-20 left-32 w-64 p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-10"
              >
                <User className="w-8 h-8 text-[#E8B85F] mb-3" />
                <h3 className="text-lg font-bold mb-2">Personal Progress</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Track your academic growth journey
                </p>
              </motion.div>

              {/* Main welcome card */}
              <motion.div
                whileHover={{ y: -8 }}
                className="relative w-72 p-8 bg-gradient-to-br from-[#E8B85F]/90 to-[#E8B85F] rounded-3xl shadow-2xl text-white mt-32"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">✨</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">Join ScholarBrood!</h2>
                <p className="opacity-90">
                  Unlock expert tutorials, practical exercises, and grow your academic excellence today.
                </p>

                {/* Students avatars – you can replace with real images */}
                <div className="mt-6 flex -space-x-2">
                  {["/student1.jpeg", "/student2.jpeg", "/student3.jpeg"].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Student ${i + 1}`}
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

        {/* Modals – slightly adjusted to golden theme */}
        <AnimatePresence>
          {modal.type && (
            <motion.div
              className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl max-w-sm w-full text-center border border-[#E8B85F]/30"
              >
                {modal.type === "success" ? (
                  <>
                    <CheckCircle className="mx-auto text-[#E8B85F] w-12 h-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Welcome to ScholarBrood!</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{modal.message}</p>
                    <button
                      onClick={() => router.push("/login")}
                      className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#E8B85F]/90 to-[#E8B85F] text-white font-semibold"
                    >
                      Go to Login
                    </button>
                  </>
                ) : (
                  <>
                    <XCircle className="mx-auto text-red-500 w-12 h-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Oops...</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{modal.message}</p>
                    <button
                      onClick={() => setModal({ type: null })}
                      className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#E8B85F]/90 to-[#E8B85F] text-white font-semibold"
                    >
                      Try Again
                    </button>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {loading && (
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div className="flex flex-col items-center gap-4 text-white">
                <Loader2 className="animate-spin w-12 h-12 text-[#E8B85F]" />
                <p className="text-lg font-medium">Creating your account…</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}