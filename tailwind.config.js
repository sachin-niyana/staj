/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xxs: "10px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "4xxl": "40px",
      "5xl": "48px",
      "6xl": "60px",
      "6xxl": "64px",
      "7xl": "72px",
      "7xxl": "82px",
      "8xl": "96pxx",
      "8xxl": "118px",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('/assets/images/background/hero-bg.png')",
        "lines-bg": "url('/assets/images/background/lines-bg.png')",
        "map-bg": "url('/assets/images/background/map-bg.png')",
        "anything-bg": "url('/assets/images/background/anything-bg.png')",
      },
      colors: {
        mirage: "#111822",
        shark: "#19191b",
        bombay: "#b8babd",
        zircon: "#f9fbff",
        silver: "#c6c6c6",
        gray: "#6e737a",
        "light-gray": "#4a4f57",
        "tia-maria": "#cd520f",
        "hawaiian-tan": "#954115",
        "red-damask": "#de6f38",
      },
      boxShadow: {
        grayShadow: "0px 0px 10px 2px gray",
      },
    },
  },
  plugins: [],
};
