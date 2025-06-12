/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'chart-fade': 'chart-fade-in 0.5s ease-out forwards',
        'pie-rotate': 'pie-chart-rotate 1s ease-out forwards'
      },
      boxShadow: {
        'chart': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'chart-gradient-from': '#4f46e5',
        'chart-gradient-to': '#4f46e5',
      }
    },
  },
  plugins: [],
};
