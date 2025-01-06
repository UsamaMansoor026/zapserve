/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c66de",
      },
      screens: {
        sm: { max: "570px" },
        md: { max: "991px" },
      },
    },
  },
  plugins: [],
};
