/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      color: {
        primary: "#000000", // Primary Color
        secondary: "#025949", // Secondary Color
        highlight: "#654321", // Highlight Color
        background_1: "#FFA500", // Background_1
        background_2: "#C2E3A3", // Background_2
        white: "#FFFFFF", // White
      },
      backgroundColor: {
        primary: "#000000", // Primary Color
        secondary: "#025949", // Secondary Color
        highlight: "#654321", // Highlight Color
        background_1: "#FFA500", // Background_1
        background_2: "#C2E3A3", // Background_2
        white: "#FFFFFF", // White
      },
      textColor: {
        primary: "#000000", // Primary Color
        secondary: "#025949", // Secondary Color
        highlight: "#654321", // Highlight Color
        background_1: "#FFA500", // Background_1
        background_2: "#C2E3A3", // Background_2
        white: "#FFFFFF", // White
      },

      backgroundImage: { main: "url('/primaryImage.jpg')" },

      fontFamily: {
        mali: ["'Mali'", "italic"],
      },
    },
  },

  plugins: [],
};
