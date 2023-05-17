/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bigicon': "url('./src/assets/reactjs-bg-icon.png')",
      }
    },
    
  plugins: [],
}
}

