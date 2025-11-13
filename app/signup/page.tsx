"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { poppins } from "../fonts";
import { signup } from "../lib/helpers";

export default function ComposeSignUp() {
  const router = useRouter();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<{ type: "success" | "error" | null; message?: string }>({ type: null });

  const onChange = (k: keyof typeof form, v: string) => setForm((s) => ({ ...s, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModal({ type: null });

    // Basic client validation
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
      // Build friendly message from dj-rest-auth error shape
      const message =
        (err?.email && Array.isArray(err.email) && err.email.join(" ")) ||
        (err?.password1 && Array.isArray(err.password1) && err.password1.join(" ")) ||
        (err?.password2 && Array.isArray(err.password2) && err.password2.join(" ")) ||
        (err?.non_field_errors && Array.isArray(err.non_field_errors) && err.non_field_errors.join(" ")) ||
        JSON.stringify(err) ||
        "Registration failed. Please try again.";
      return setModal({ type: "error", message });
    }

    setModal({ type: "success", message: "Account created successfully! Check your email for verification if required." });
  };

  return (
    <main className={`${poppins.className} min-h-screen bg-white dark:bg-linear-to-b dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden`}>
      {/* Loading overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="flex flex-col items-center gap-4 text-white">
              <Loader2 className="animate-spin w-12 h-12" />
              <p className="text-lg font-medium">Creating your account…</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success / Error modal */}
      <AnimatePresence>
        {modal.type && (
          <motion.div
            className="absolute inset-0 bg-black/40 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl max-w-sm w-full text-center"
            >
              {modal.type === "success" ? (
                <>
                  <CheckCircle className="mx-auto text-green-500 w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Registration successful</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{modal.message}</p>
                  <button
                    onClick={() => router.push("/login")}
                    className="px-6 py-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium"
                  >
                    Go to Login
                  </button>
                </>
              ) : (
                <>
                  <XCircle className="mx-auto text-red-500 w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Registration failed</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{modal.message}</p>
                  <button onClick={() => setModal({ type: null })} className="px-6 py-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium">
                    Dismiss
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page body */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)] py-20 lg:py-24 px-6 sm:px-10 md:px-16">
        {/* Left: Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-lg">
            <div className="mb-10 text-center">
              <h1 className="text-3xl lg:text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Create your ComposeAI account</h1>
              <p className="mt-3 text-gray-600 dark:text-gray-400">Join thousands mastering professional writing with expert tutorials.</p>
            </div>

            {/* Google */}
            <div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => console.log("Google signup")}
                className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium"
              >
                <FcGoogle className="w-5 h-5" /> Sign up with Google
              </motion.button>
            </div>

            {/* divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-white dark:bg-gray-900 text-sm text-gray-500">or sign up with email</span>
              </div>
            </div>

            {/* form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">First name</label>
                  <input
                    id="first_name"
                    value={form.first_name}
                    onChange={(e) => onChange("first_name", e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Last name</label>
                  <input
                    id="last_name"
                    value={form.last_name}
                    onChange={(e) => onChange("last_name", e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => onChange("email", e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password1" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Password</label>
                  <input
                    id="password1"
                    type="password"
                    value={form.password1}
                    onChange={(e) => onChange("password1", e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="password2" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Confirm password</label>
                  <input
                    id="password2"
                    type="password"
                    value={form.password2}
                    onChange={(e) => onChange("password2", e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:opacity-95 disabled:opacity-60"
                >
                  {loading ? "Creating account..." : "Create account"}
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-blue-600 dark:text-purple-400">Sign in</Link>
            </p>
          </motion.div>
        </div>

        {/* Right: Visuals */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center relative overflow-hidden">
          {/* animated orbs */}
          <motion.div
            className="absolute -left-24 top-20 w-80 h-80 rounded-full bg-linear-to-r from-blue-400/30 to-purple-500/30 blur-3xl"
            animate={{ x: [0, 40, -20, 0], y: [0, -20, 10, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-10 bottom-10 w-72 h-72 rounded-full bg-linear-to-r from-pink-400/20 to-yellow-400/20 blur-3xl"
            animate={{ x: [0, -40, 20, 0], y: [0, 30, -10, 0] }}
            transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
          />

          {/* Floating cards */}
          <div className="relative z-10 grid gap-6">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} whileHover={{ y: -6 }} className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 max-w-xs">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Professional Content Writing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Master business, marketing and editorial writing that engages and converts.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} whileHover={{ y: -6 }} className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 max-w-xs">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI-Powered Writing Tutorials</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Practical lessons on using AI tools to draft, edit, and scale high-quality content.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} whileHover={{ y: -6 }} className="bg-linear-to-br from-blue-600 to-purple-600 text-white p-6 rounded-3xl shadow-2xl max-w-xs">
              <h3 className="text-xl font-bold mb-2">Projects & Editing Workshops</h3>
              <p className="text-sm opacity-90">Hands-on projects, editing practice, and feedback to build real-world writing skills.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
