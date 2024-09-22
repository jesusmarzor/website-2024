import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      light: {
        default: "var(--light-default)"
      },
      black: {
        default: "var(--black-default)",
        extra: {
          light: "var(--black-extra-light)"
        },
        light: "var(--black-light)"
      },
      main: "var(--main)",
      white: {
        default: "var(--white)"
      }
    },
  },
  plugins: [],
};
export default config;
