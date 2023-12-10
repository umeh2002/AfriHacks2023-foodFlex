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
        S900: { max: "900px" },
      },
      backgroundImage: {
        "gradient-blue-pink":
          "linear-gradient(162deg, rgba(146,190,217,1) 43%, rgba(233,119,130,1) 64%)",
      },
    },
  },
  plugins: [],
};
