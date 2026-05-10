/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#004242',
          mid: '#1f5e66',
          slate: '#37717c',
          accent: '#4e8096',
          light: '#5d8aa8',
          warm: '#f5f0e8',
          gold: '#c9a84c',
        },
      },
    },
  },
  plugins: [],
};
