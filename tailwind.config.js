// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",   // <- you have src/app
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a03da",
        brandRed: "#c83232",
        neutral: "#F5F5F5",
        dark: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
