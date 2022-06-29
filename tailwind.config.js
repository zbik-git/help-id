/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "JIT",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}