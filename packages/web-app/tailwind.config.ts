/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      colors: {
        transparent: "transparent",
        white: "#FFFFFF",
        black: {
          default: "#000000",
          light:"#F2F4F7",
          primary: "#475467",
        },
        pink: {
          default: "#FEF3F2",
        },
        red: {
          default: "#FF4646",
          light: "#F04438",
          focus: "#FFC8C8",
        },
        green: {
          primary: "#17B26A",
          light: "#ECFDF3",
          brand: "#0B9D8E",
        },
        grey: {
          default: "#F2F4F7",
          light: "#DCE0E6", 
        },
        yellow: {
          default: "#F7B328",
        },
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
      },
      spacing: {
        0: "0px",
        px: "1px",
        0.5: "2px",
        1: "0.25rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        4.5: "1.125rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        19: '4.75rem',
        20: "5rem",
        24: "6rem",
        26: '6.5rem',
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        42: "11.25rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        68: "17rem",
        72: "18rem",
        88: "22rem",
        104: "26rem",
        108: "27rem",
      },
    },
  },
  plugins: [],
};


