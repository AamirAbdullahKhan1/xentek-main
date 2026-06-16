/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        audiowide: ['Audiowide', 'sans-serif'],
        nunitoSans: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        xentek: {
          lightest: '#ffffff',
          light: '#f4f6f8',
          DEFAULT: '#0a3a3a',
          dark: '#052222',
          accent: '#18a087'
        }
      }
    },
  },
  plugins: [],
}
