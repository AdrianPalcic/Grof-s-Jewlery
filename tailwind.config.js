/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-delay1": "bounce 0.6s infinite 0s",
        "bounce-delay2": "bounce 0.6s infinite 0.2s",
        "bounce-delay3": "bounce 0.6s infinite 0.4s",
      },
      colors: {
        bgColor: "#F5F5DC",
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
        mdd: "900px",
        smm: "500px",
      },
    },
  },
  plugins: [],
};
