/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: false, // 🔒 disables dark mode classes like `dark:bg-black`
  plugins: [],
  presets: [require("nativewind/preset")],
};
