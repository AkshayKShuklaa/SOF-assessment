/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#050816",
        surface: "#10182B",
        primary: "#4F46E5",
        accent: "#0ea5e9",
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 42px rgba(79, 70, 229, 0.25)",
        cyan: "0 0 36px rgba(14, 165, 233, 0.2)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top left, rgba(79,70,229,.18), transparent 30%), radial-gradient(circle at top right, rgba(14,165,233,.12), transparent 26%)",
      },
    },
  },
  plugins: [],
};
