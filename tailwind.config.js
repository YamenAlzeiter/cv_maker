/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins'],
        poetsen: ['Poetsen One'],
        fira: ['Fira Sans'],
        roboto: ['Roboto'],
        noto: ['Noto Sans'],
      },
    },
  },
  plugins: [require("daisyui")],
}

