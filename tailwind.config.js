/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custumGreen: "#32BB78",
        GenerateRevenueButtonBg: "#061A370A",
      },
    },
  },
  plugins: [require("daisyui")],
};
