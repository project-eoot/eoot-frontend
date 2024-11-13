/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Vite와 React 파일 경로
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E85F84',
        secondary: '#FF779D',
        accent: '#7242E0',
        'text-primary': '#0E0F24', 
        'text-secondary': '#98A2B3',
        light: '#FEF7FF'
      }

    },
  },
  plugins: [],
};
