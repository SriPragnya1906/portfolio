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
        background: "#050810",
        surface: "#0b0f1e",
        elevated: "#101526",
        gold: {
          DEFAULT: "#c9a84c",
          hover: "#e8c97e",
          tint: "rgba(201,168,76,0.18)",
        },
        cyan: {
          DEFAULT: "#00d4ff",
          hover: "#7eeeff",
        },
        text: {
          primary: "#e8e4d8",
          muted: "#7a7a94",
        },
        glass: "rgba(255,255,255,0.03)",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)"],
        body: ["var(--font-dm-sans)"],
        mono: ["var(--font-jetbrains)"],
      },
    },
  },
  plugins: [],
};

export default config;
