/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures TypeScript files are included
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'gradient-start': '#55C79A',
        'gradient-middle': '#907CFF',
        'gradient-end': '#FC876D',
      },
      fontSize: {
        'xxs': '10px', // Define a custom size smaller than text-xs
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lato: ['Lato', 'sans-serif'],
        haas: ['"Work Sans"', 'sans-serif'],
        'abril': ['"Abril Fatface"', 'sans-serif'],
      },
      height: {
        '210': '210px',
      },
    },
  },
  plugins: [],
}

