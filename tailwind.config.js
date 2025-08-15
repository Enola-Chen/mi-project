/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 小米品牌色
        orange: '#ff6a00',
        'gray-text': '#8a8a8a',
        'gray-light': '#fafafa',
        'background-gray': '#f7f7f7',
        'footer-gray': '#191919',
        'cheaper-gray': '#5e5e5e',
      },
    },
  },
  plugins: [],
}
