/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B",
        secondary: "#64748B",
        lightGray: "#F1F5F9",
        darkGray: "#475569",
        highlight: "#F9FAFB",
      }
    },
  },
  plugins: [],
}