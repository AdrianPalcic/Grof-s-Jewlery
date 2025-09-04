/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#F5F5DC", // primjer custom boje
        secondaryColor: "#763C00",
        textColor: "#333",
        try: "#F3F3EF",
      },
      fontFamily: {
        cinzel: "--font-cinzel",
        cormorant: "--font-cormorant",
      },
      screens: {
        navbreak: "1110px",
      },
    },
  },
  plugins: [],
};
