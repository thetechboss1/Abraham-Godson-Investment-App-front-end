/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundColor:{ 
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        neutral: "var(--neutral)",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        neutral: "var(--neutral)",
        accent: "var(--accent)",
      }
    },
  },
  plugins: [],
}
