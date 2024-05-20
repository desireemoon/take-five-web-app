import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        yellow: {
          400: '#FFEB3B',
          500: '#FDD835',
        },
        green: {
          500: '#4CAF50',
          600: '#43A047',
        },
        gray: {
          50: '#FAFAFA',
          800: '#424242',
        },
      },
    },
  },
  plugins: [],
};
export default config;