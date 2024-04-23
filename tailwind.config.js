// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: "16px",
        md: "18px",
        lg: "24px",
        xl: "30px",
        xxl: "60px",
      },
      colors: {
        golden: "#D8AB4E",
        darkblue: "#373F4C",
        orange: "#FF5733",
        skyblue: "#F9F8FD",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
