import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // enables toggling dark mode via 'dark' class
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        stack: ["var(--font-stack-sans)", "sans-serif"], // your global font
      },
      colors: {
        primary: {
          light: "#3B82F6", // blue-500 for light theme
          dark: "#2563EB",  // blue-600 for dark theme
        },
        secondary: {
          light: "#8B5CF6", // purple-500
          dark: "#7C3AED",  // purple-600
        },
        accent: {
          light: "#F9A8D4", // pink-300
          dark: "#DB2777",  // pink-600
        },
        background: {
          light: "#FFFFFF",
          dark: "#111827",
        },
        card: {
          light: "#F3F4F6", // gray-100
          dark: "#1F2937",  // gray-800
        },
        text: {
          light: "#111827",
          dark: "#F9FAFB",
        },
      },
      spacing: {
        112: "28rem", // for hero height
      },
      borderRadius: {
        xl: "1rem",
        "3xl": "2rem",
      },
      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.05)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
