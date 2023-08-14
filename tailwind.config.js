/** @type {import('tailwindcss').Config} */

// Importación del módulo defaultTheme de Tailwind CSS
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        libre:["Ruwudu",...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

