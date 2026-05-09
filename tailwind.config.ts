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
        background: "#FDFDFD",
        foreground: "#111827",
        primary: {
          DEFAULT: "#064E3B", // Ocean Green
          dark: "#022C22",
        },
        accent: {
          DEFAULT: "#00E5FF", // Aqua
          dark: "#00B8D4",
        },
        lab: {
          bg: "#F8FAFC",
          border: "#E2E8F0",
          text: "#64748B"
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-space-mono)'],
      },
    },
  },
  plugins: [],
};
export default config;
