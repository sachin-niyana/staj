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
        xxl: "64px",
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
      colors: {
        golden: "rgba(216,171,78)",
        darkblue: "rgba(55,63,76)",
        orange: "rgba(255,87,51)",
        "bg-grey": "rgba(249,248,253)",
        "bg-golden": "rgba(216,171,78)",
        "bg-orange": "rgba(255,87,51)",
        "bg-pink": "rgba(250,229,229)",
        "bg-blue": "rgba(55,63,76)",
        "bg-darkgrey": "rgba(103,109,109)",
      },
    },
  },
  plugins: [],
};
