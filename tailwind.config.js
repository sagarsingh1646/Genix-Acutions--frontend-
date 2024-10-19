/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#FFE5F1',
        blueDark: '#1D4ED8',
      },
      fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      screens: {
        'sm': '640px',  
        'md': '768px',  
        'lg': '1024px', 
        'xl': '1280px', 
        '2xl': '1536px',
        // Custom breakpoints
        'tablet': '600px', // Custom breakpoint for tablets
        'laptop': '900px',  // Custom breakpoint for laptops
        'desktop': '1450px', // Custom breakpoint for desktops
      },
    },
  },
  plugins: [],
}

