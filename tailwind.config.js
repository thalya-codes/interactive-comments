/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          'moderate-blue': 'hsl(238, 40%, 52%)',
          'soft-red': 'hsl(358, 79%, 66%)',
          'light-grayish-blue': 'hsl(239, 57%, 85%)',
          'extra-light-grayish-blue': 'hsl(240, 57%, 93%)',
          'pale-red': 'hsl(357, 100%, 86%)',
        },
        neutral: {
          'dark-blue': 'hsl(212, 24%, 26%)',
          'dark-blue-opacity-04': 'hsl(212, 24%, 26%, 0.4)',
          'grayish-blue': 'hsl(211, 10%, 45%)',
          'light-gray': 'hsl(223, 19%, 93%)',
          'very-light-gray': 'hsl(228, 33%, 97%)',
          white: 'hsl(0, 0%, 100%)',
        },
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      screens: {
        lg: '1024px',
        
        sm: { max: '640px' },
        xs: { max: '490px' },
      },
    },
  },
  plugins: [],
};
