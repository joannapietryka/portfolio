import defaultTheme from 'tailwindcss/defaultTheme';

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
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      colors: {
        'light-blue': '#96bedc',
        'blue': '#5975C0',
        'light-orange': '#fe793e',
        'orange': '#fb4c1f',
        'light-pink': '#fcc6d0',
        'pink': '#D81159'
      },
      shapeOutside: {
        'shape-outside' : 'circle(50%)'
      },
      // colors: {
      //   green: '#c5d4c9',
      //   blue: '#a3b6b7',
      //   yellow: '#f7b847',
      //   orange: '#f5630d',
      //   red: '#ee503a',
      //   pink: '#f68675',
      //   navy: '#264948'
      // }
    },
    backgroundImage: {
      'profile': "url('../src/assets/photos/profile.png')",
      'shapes': "url('../src/assets/photos/bg-3.jpg')",
      'laptop': "url('../src/assets/photos/laptop.png')",
      'experience': "url('../src/assets/photos/experience.jpg')",
      'work': "url('../src/assets/photos/work.jpg')",
      'technologies': "url('../src/assets/photos/technologies.jpg')",
      'typing': "url('../src/assets/photos/typing.gif')",
    },
  },
  plugins: [],
}

