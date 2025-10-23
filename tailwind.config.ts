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
        burgundy: {
          50: '#fdf4f5',
          100: '#fbe8eb',
          200: '#f7d1d7',
          300: '#f0a9b4',
          400: '#e6788b',
          500: '#d74e65',
          600: '#c23049',
          700: '#a3233b',
          800: '#881f35',
          900: '#751d32',
        },
        gold: {
          50: '#fdfbf3',
          100: '#faf6e1',
          200: '#f5ecc2',
          300: '#eedb98',
          400: '#e5c56d',
          500: '#daaa4a',
          600: '#c68b3d',
          700: '#a56a34',
          800: '#875531',
          900: '#70462b',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfbf6',
          200: '#faf7ed',
          300: '#f6f1df',
          400: '#f0e6c8',
          500: '#e7d7aa',
          600: '#d4bd84',
          700: '#c0a15d',
          800: '#a0834a',
          900: '#826b3e',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
