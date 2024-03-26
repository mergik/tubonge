/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      dark: 'var(--color-dark)',
      light: 'var(--color-light)',
      primary: 'var(--color-primary)',
      orange: 'var(--color-orange)'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      grotesk: ['Space Grotesk', 'sans-serif'],
    },
    extend: {
      // backgroundImage: {
      //   'hero-pattern': "url('/assets/groovy.svg')",
      // }
    },
  },
  plugins: [require("daisyui")],
}
