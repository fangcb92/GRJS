/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',    // 质感黑
        secondary: '#FFD700',  // 奢华金
        'deep-gray': '#1A1A1A', // 深空灰
        'champagne': '#FFF4CC', // 浅香槟金
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(45deg, #FFD700, #FFF4CC)',
        'gradient-black': 'linear-gradient(45deg, #000000, #1A1A1A)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}