/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#ED9121",
        "primary-2": "#E56717",
        secondary: "black",
        "secondary-2": "gray",
        "secondary-3": "#B5DEAD",
      },
      boxShadow: {
        all: "0px 0px 50px 5px rgba(0,0,0,0.1)",
      },
      keyframes: {
        "spin-1": {
          "0%": {
            clipPath:
              "polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%)",
          },
          "12.5%": {
            clipPath:
              "polygon(\n      50% 50%,\n      0 0,\n      50% 0%,\n      100% 0%,\n      100% 0%,\n      100% 0%,\n      100% 0%\n    )",
          },
          "25%": {
            clipPath:
              "polygon(\n        50% 50%,\n        0 0,\n        50% 0%,\n        100% 0%,\n        100% 100%,\n        100% 100%,\n        100% 100%\n      )",
          },
          "50%": {
            clipPath:
              "polygon(\n      50% 50%,\n      0 0,\n      50% 0%,\n      100% 0%,\n      100% 100%,\n      50% 100%,\n      0% 100%\n    )",
          },
          "62.5%": {
            clipPath:
              "polygon(\n      50% 50%,\n      100% 0,\n      100% 0%,\n      100% 0%,\n      100% 100%,\n      50% 100%,\n      0% 100%\n    )",
          },
          "75%": {
            clipPath:
              "polygon(\n      50% 50%,\n      100% 100%,\n      100% 100%,\n      100% 100%,\n      100% 100%,\n      50% 100%,\n      0% 100%\n    )",
          },
          "100%": {
            clipPath:
              "polygon(\n      50% 50%,\n      50% 100%,\n      50% 100%,\n      50% 100%,\n      50% 100%,\n      50% 100%,\n      0% 100%\n    )",
          },
        },
        "spin-2": {
          "0%": { transform: "scaleY(1) rotate(0deg)" },
          "49.99%": { transform: "scaleY(1) rotate(135deg)" },
          "50%": { transform: "scaleY(-1) rotate(0deg)" },
          "100%": { transform: "scaleY(-1) rotate(-135deg)" },
        },
      },
    },
  },
  plugins: [],
}
