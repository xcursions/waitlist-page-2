/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "hero": "url(/images/hero-1.png)",
        "hero-mobile": "url(/images/hero-mobile.png)",

      },
      colors:{
        "brand-blue": "#0983FF",
        "text-color": "#2B2945",
        "gray-color": "#E8EDE9"
      },
      
    },
  },
  plugins: [],
}