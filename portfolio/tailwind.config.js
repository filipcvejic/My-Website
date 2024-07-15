/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('/assets/hero-background.png')",
        "about-background": "url('/assets/about-background.png')",
        "custom-gradient": "rgba(112, 60, 238, 0)",
      },
      colors: {
        "majorelle-blue": "#6836F4",
        "electric-violet-20": "rgba(109, 54, 241, 0.2)",
        "electric-violet": "#6D36F1",
        "blue-bell-20": "rgba(153, 142, 195, 0.2)",
        "cornflower-blue": "#895EF1",
        header: "rgba(255, 255, 255, 1)",
        "columbia-blue": "#94D3FD",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      content: {
        underline: "url('/assets/icons/underline.svg')",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      screens: {
        default: "0px",
        xsm: "480px",
        "md-lg": "900px",
      },
    },
  },
  plugins: [],
};
