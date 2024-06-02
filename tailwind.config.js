/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'mammoth' : '8rem'
      },
      colors: {
        primary: {
          100: '#6A0DAD',
          200: '#9e46e0',
          300: '#ffa9ff',
        },
        accent: {
          100: '#1E88E5',
          200: '#dbffff',
        },
        text: {
          100: '#FFFFFF',
          200: '#e0e0e0',
        },
        bg: {
          100: '#333333',
          200: '#434343',
          300: '#5c5c5c',
        },
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
      },
    },
    
    fontFamily:{
      body: 'Nunito'
    }
  },
  plugins: [],
}
