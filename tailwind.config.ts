import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Deep teal/green similar to Housing Agency
          dark: "#004539",
          darkAlt: "#006154",
          light: "#E0F2F1",
          accent: "#FFB347"
        }
      },
      boxShadow: {
        subtle: "0 10px 30px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
