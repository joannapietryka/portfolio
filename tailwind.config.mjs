import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,scss,html}", 
  ],
  safelist: [
    {
      pattern: /bg-(light-blue|blue|light-orange|orange|light-pink|pink)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Sanchez', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        '40': 'repeat(40, minmax(0, 1fr))',
        '80': 'repeat(80, minmax(0, 1fr))',
      },
      colors: {
        'light-blue': '#96bedc',
        'blue': '#5975C0',
        'light-orange': '#fe793e',
        'orange': '#fb4c1f',
        'light-pink': '#fcc6d0',
        'pink': '#D81159'
      },
    },
    backgroundImage: {
      'profile': "url('../src/assets/photos/profile.png')",
      'shapes': "url('../src/assets/photos/bg-3.jpg')",
      'laptop': "url('../src/assets/photos/laptop.png')",
      'typing': "url('../src/assets/photos/typing.gif')",
    },
    minHeight: {
      'calc-vh-2rem': 'calc(100vh - 2rem)',
      'calc-vh-5rem': 'calc(100vh - 5rem)',
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.shape-outside-circle': {
          'shape-outside': 'circle(50%)',
        },
      });
    }),
  ],
}

