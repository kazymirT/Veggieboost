/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Усі файли у папці src
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"]
      },
      colors: {
        "black": "#141414",
	      "green": "#a1c487",
	      "light-green": "#eaf7e5",
	      "orange": "#fc8a11",
	      "beige": "#faf3e7",
	      "gray": "#f3f3f3",
      },
      backgroundImage: {
        checked: "url('@/assets/icons/checkbox.svg')",
      },
      boxShadow: {
        "button-hover":
          "0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 0 rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};