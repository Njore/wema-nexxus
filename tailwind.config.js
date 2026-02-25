export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#721073",
        secondary: "#4a0b4b",
        "background-light": "#f8f5f2",
        "background-dark": "#1a161b",
        "surface-light": "#ffffff",
        "surface-dark": "#2a242b",
        "text-light": "#1f2937",
        "text-dark": "#e5e7eb",
        "accent-light": "#e0dce0",
        "accent-dark": "#3d323e",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

