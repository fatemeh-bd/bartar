import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backDrop: "var(--backDrop)",
        primary: "#1d4ed8",
        secondary: {
          100: "var(--secondary100)",
          200: "var(--secondary200)",
          500: "var(--border)",
          700: "var(--secondary700)",
        },
        black: "var(--black)",
        success: "#22c55e",
      },
      fontSize: {
        lg: "1.125rem",
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
