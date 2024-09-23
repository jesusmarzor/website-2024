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
        50: "#ffffff80",
        default: "var(--white)"
      }
    },
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-pre-bg': "#282c34",
            '--tw-prose-invert-pre-bg': "#282c34"
          },
        },
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
export default config;
