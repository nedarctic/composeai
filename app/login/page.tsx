"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { poppins } from "../fonts";
import { login } from "../lib/helpers";

export default function ComposeLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await login(formData.email, formData.password);

    if (!res) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    const { access, refresh } = res;

    try {
      if (formData.remember) {
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
      } else {
        sessionStorage.setItem("access", access);
        sessionStorage.setItem("refresh", refresh);
      }
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      setError("Unexpected error while saving session.");
    }

    setLoading(false);
  };

  return (
    <main className={`${poppins.className} flex min-h-screen bg-white dark:bg-gray-900`}>
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 lg:px-32 py-24 lg:py-32">
        <div className="w-full max-w-md space-y-8 relative">
          {/* Optional linear Accent Background */}
          <div className="absolute inset-0 bg-linear-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-10 blur-3xl -z-10 rounded-3xl"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Welcome Back
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Continue mastering writing with ComposeAI
            </p>
          </motion.div>

          {/* Google login */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <button
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={() => console.log("Google login")}
            >
              <FcGoogle className="text-xl" />
              <span>Continue with Google</span>
            </button>
          </motion.div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-900 text-gray-500">or</span>
            </div>
          </div>

          {/* Login Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {error && (
              <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 transition"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 transition"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  checked={formData.remember}
                  onChange={(e) =>
                    setFormData({ ...formData, remember: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-gray-300 dark:border-gray-700 text-black dark:text-white focus:ring-black dark:focus:ring-white"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  Remember me
                </label>
              </div>

              <Link href="/reset" className="text-sm text-gray-900 dark:text-white hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-3 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </motion.form>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-600 dark:text-purple-500 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:block lg:w-1/2 bg-linear-to-tr from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950">
        <div className="h-full flex items-center justify-center p-12">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Master Professional Writing
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Join thousands of learners improving business, creative, and academic writing with ComposeAI tutorials and guides.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
