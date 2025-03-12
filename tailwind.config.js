/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      customFont: ['Inter'],
    },
    extend: {
      colors: {
        orange: '#E4721B',
        'dark-200': '#19191B',
        'dark-300': '#2B2B2D',
        'dark-400': '#616161',
        'white-100': '#fffffff',
        'white-200': '#D1D1D1',
        'white-300': '#808081',
        'red-100': '#DE2C2C',
      },
      backgroundImage: {
        ActiveGradient:
          'radial-gradient(circle, rgba(230, 91, 28, .2), rgba(229, 129, 31, 0) 70%)',
        ButtonGradient:
          'linear-gradient(89.08deg, #E65B1C 0.38%, #E5811F 99.82%)',
        ButtonPressedGradient:
          'linear-gradient(89.08deg, #C9490F 0.38%, #D36900 99.82%)',
      },
    },
  },
  plugins: [],
};
