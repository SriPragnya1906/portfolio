import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0f",
          secondary: "#111118",
          elevated: "#18181f",
          card: "#141419",
        },
        accent: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dim: "rgba(99,102,241,0.15)",
          glow: "rgba(99,102,241,0.35)",
        },
        gray: {
          100: "#e4e4e7",
          300: "#a1a1aa",
          500: "#71717a",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
      },
      fontFamily: {
        heading: ["var(--font-cormorant)"],
        body: ["var(--font-dm-sans)"],
        mono: ["var(--font-jetbrains)"],
      },
      animation: {
        "float": "float-y 5s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "marquee": "marquee-scroll 30s linear infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
