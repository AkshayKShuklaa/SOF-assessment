/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#050816",
        surface: "#10182B",
        primary: "#6C63FF",
        accent: "#00E5FF",
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 42px rgba(108, 99, 255, 0.28)",
        cyan: "0 0 36px rgba(0, 229, 255, 0.22)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top left, rgba(108,99,255,.22), transparent 30%), radial-gradient(circle at top right, rgba(0,229,255,.16), transparent 26%)",
      },
    },
  },
  plugins: [],
};
