/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-brand': "url('/src/assets/images/background-noise.svg')",
      },
    },
    fontFamily: {
      inter: ['Inter'],
      sans: ['ui-sans-seri'],
      helvetica: ['Helvetica'],
    },
  },
  plugins: [],
};
