/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#FB8500',
        'orange-secondary': '#FFB703',
        'blue-dark': '#023047',
        'blue-dark-light': '#219EBC',
        'blue-light': '#8ECAE6',
      },
    },
  },
  plugins: [require("daisyui")],
}

