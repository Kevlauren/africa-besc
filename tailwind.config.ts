import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        gold: {
          DEFAULT: "#F2A63B",
          50: "#FDF5E9",
          100: "#FAE8CC",
          200: "#F6D399",
          300: "#F2BE66",
          400: "#F2A63B",
          500: "#E8942A",
          600: "#C9791C",
          700: "#9E5D16",
        },
        navy: {
          DEFAULT: "#152238",
          50: "#EEF1F6",
          100: "#D6DEEA",
          200: "#A9B8D0",
          300: "#7389AE",
          400: "#40567F",
          500: "#22355A",
          600: "#1A2A48",
          700: "#152238",
          800: "#111C2E",
          900: "#0C1421",
        },
        cream: {
          DEFAULT: "#F7F5F1",
          100: "#FBFAF7",
          200: "#F3F0EA",
          300: "#EAE5DB",
        },
        ink: "#1F2A3A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 18px 45px -25px rgba(21, 34, 56, 0.28)",
        "card-hover": "0 28px 60px -25px rgba(21, 34, 56, 0.38)",
        pill: "0 12px 30px -12px rgba(242, 166, 59, 0.55)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
