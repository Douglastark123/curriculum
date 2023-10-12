import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        night: '#141414',
        cardBlack: '#18181b',
        antiFlashWhite: '#eef0f2',
        zaffre: '#0d21a1',
        oxfordBlue: '#011638',
      },
      screens: {
        'mobile-sm': '340px',
        'mobile-md': '500px',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
