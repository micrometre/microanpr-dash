const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),

  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
        Lusitana: ["Lusitana", "serif"],
       },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

