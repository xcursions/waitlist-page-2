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
        "hero-1": "url(/images/hero-1.png)",
        "hero-2": "url(/images/hero-2.png)",
        "hero-3": "url(/images/hero-3.png)",
        "hero-4": "url(/images/hero-4.png)",
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