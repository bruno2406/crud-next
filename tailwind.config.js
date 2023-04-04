/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    safeList: [
      /^bg-/,
      /^to-/,
      /^from-/
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
