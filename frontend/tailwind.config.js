/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Regular: "Poppins-Regular",
        Bold: "Poppins-Bold",
      },
      screens: {
        S425: { max: "425px" },
        S670: { max: "670px" },
        S500: { max: "500px" },
      },
    },
  },
  plugins: [],
};
