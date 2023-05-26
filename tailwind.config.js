/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/backg.jpg')",
      }
    },
    fontFamily: {
      signature: ["Roboto Mono"],
      flashy: ["Great Vibes"],
      base: ["Ubuntu"],
    },
    
  },
  plugins: [],
}