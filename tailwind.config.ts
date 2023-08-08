import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          400: "#48B2E2",
          500: "#2873C9",
          600: "#0A316A",
          700: "#0A2041",
          800: "#3F83F8",
          900: "#1C64F2",
        },
        gray: {
          550: "#EFF0F3",
        },
      },

      maxWidth: {
        "3.5xl": "50rem",
      },
    },
  },
  plugins: [],
};
export default config;
