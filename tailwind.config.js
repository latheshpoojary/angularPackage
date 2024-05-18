/** @type {import('tailwindcss').Config} */
const { palette } = require('./palette');
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" 
  ],
  theme: {
    extend: {
      colors:palette
    },
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}

