/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '520px',
      'md': '820px',
      'lg': '1120px',
    },
    extend: {},
  },
  plugins: [
    '@tailwindcss/typography',
    daisyui,
  ],
  daisyui: {
    themes: ["light"]
  }
}

