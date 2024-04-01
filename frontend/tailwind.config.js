/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      dark: 'var(--color-dark)',
      blackish: 'var(--color-blackish)',
      darkish: 'var(--color-darkish)',
      light: 'var(--color-light)',
      whiteish: 'var(--color-whiteish)',
      blueish: 'var(--color-blueish)',
      purpleish: 'var(--color-purpleish)',
      orangeish: 'var(--color-orangeish)'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      grotesk: ['Space Grotesk', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
