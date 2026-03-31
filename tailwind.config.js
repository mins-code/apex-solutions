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
        "dark-bg": "#050e0e",
        "glass-accent": "#3bbfbf",
        "glass-copper": "#c07a3a",
        "glass-border": "rgba(59, 191, 191, 0.15)",
      },
    },
  },
  plugins: [],
};
