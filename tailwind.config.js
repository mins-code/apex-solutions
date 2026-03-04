/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        cinzel: ["var(--font-cinzel)", "Georgia", "serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        "dark-bg": "#020617",
        "glass-accent": "#4F46E5",
        "glass-border": "rgba(255, 255, 255, 0.12)",
      },
    },
  },
  plugins: [],
};
