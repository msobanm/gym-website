/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2E0014",
        "primary-2": "#442220",
        secondary: "#809848",
        "secondary-2": "#B0CA87",
        "secondary-3": "#B5DEAD",
      },
      boxShadow: {
        all: "0px 0px 50px 5px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
}
