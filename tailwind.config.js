/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yahshua: {
          blue: "#0071B9",
          "blue-dark": "#005086",
          "blue-light": "#EBF6FD",
          green: "#65B32E",
          "green-dark": "#4B8E1D",
          "green-light": "#F2F9EA",
          red: "#E63946",
          "red-dark": "#C52834"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(0, 113, 185, 0.1)',
        'card-hover': '0 20px 40px -15px rgba(0, 113, 185, 0.18)',
      }
    },
  },
  plugins: [],
}
