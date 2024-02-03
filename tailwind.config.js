/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      mono: ['Roboto Mono, sans-serif']
    }
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "macchiato",
    })
  ],
}

