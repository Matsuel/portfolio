import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        "custom" : "var(--border)",
        "cursor" : "var(--border-cursor)",
      },
      borderRadius: {
        "custom" : "var(--radius)",
      },
      colors: {
        background: "var(--background)",
        backgroundinverted: "var(--background-invert)",
        text: "var(--color)",
        colorinverted: "var(--color-invert)",
      },
    },
  },
  plugins: [],
};
export default config;
