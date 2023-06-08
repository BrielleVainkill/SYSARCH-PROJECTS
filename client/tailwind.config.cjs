/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      minHeight: {
        '85': '85%',
        '1/2': '50%'
      }
    }
  },
  plugins: [],
};
