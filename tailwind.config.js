/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c66de",
        headingColor: "#303030",
        textColor: "#707070",
      },
      screens: {
        xsm: { max: "570px" },
        sm: { max: "768px" },
        md: { max: "991px" },
      },
    },
  },
  plugins: [],
};
