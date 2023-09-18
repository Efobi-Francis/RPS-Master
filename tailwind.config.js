/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Barlow': ['Barlow Semi Condensed', 'system-ui']
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 576px) { ... }
      'lg': '1366px',
      // => @media (min-width: 1366px) { ... }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
      
      },
    },
    extend: {},
  },
  plugins: [],
}

