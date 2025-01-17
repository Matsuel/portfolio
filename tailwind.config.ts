import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        "custom": "var(--border)",
        "cursor": "var(--border-cursor)",
      },
      borderRadius: {
        "custom": "var(--radius)",
      },
      colors: {
        background: "var(--background)",
        backgroundeven: "var(--background-even)",
        color: "var(--color)",
        coloreven: "var(--color-even)",
      },
    },
  },
};
export default config;