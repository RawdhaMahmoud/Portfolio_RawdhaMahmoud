import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 13%)",
        foreground: "hsl(0 0% 95%)",
        card: {
          DEFAULT: "hsl(0 0% 15%)",
          foreground: "hsl(0 0% 95%)",
        },
        primary: {
          DEFAULT: "hsl(245 80% 65%)",
          foreground: "hsl(0 0% 100%)",
        },
        secondary: "hsl(260 60% 55%)",
        muted: {
          DEFAULT: "hsl(0 0% 18%)",
          foreground: "hsl(0 0% 65%)",
        },
        border: "hsl(0 0% 22%)",
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, hsl(245 80% 65%) 0%, hsl(280 70% 55%) 100%)",
        "gradient-glow": "radial-gradient(ellipse at center, hsl(250 70% 60% / 0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 30px hsl(250 80% 60% / 0.2)",
        "glow-intense": "0 0 60px hsl(250 80% 60% / 0.3)",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(4px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out forwards",
      },
      fontFamily: {
        sans: ["Playfair Display", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
