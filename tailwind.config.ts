import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#111111",
        white: "#FFFFFF",
        rust: {
          DEFAULT: "#C45A3C",
          light: "#E8A393",
          deep: "#8B3A28",
        },
        sand: "#F5F0ED",
        clay: "#7A6B63",
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"Space Mono"', "monospace"],
      },
      fontSize: {
        h1: ["3rem", { lineHeight: "3.5rem", letterSpacing: "-0.02em" }],
        h2: ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.01em" }],
        h3: ["1.75rem", { lineHeight: "2.25rem" }],
        h4: ["1.375rem", { lineHeight: "1.875rem" }],
        h5: [
          "1.125rem",
          {
            lineHeight: "1.625rem",
            letterSpacing: "0.05em",
          },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.875rem" }],
        body: ["1rem", { lineHeight: "1.75rem" }],
        "body-sm": ["0.875rem", { lineHeight: "1.375rem" }],
      },
      borderRadius: {
        card: "12px",
        button: "8px",
        pill: "20px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 4px 16px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
