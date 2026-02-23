module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f6f7f1',
          100: '#e8ebdc',
          200: '#d3d8bb',
          300: '#b6be92',
          400: '#9ba56f',
          500: '#7d8854',
          600: '#626c41',
          700: '#4d5436',
          800: '#40452f',
          900: '#383c2a',
        },
        sand: {
          50: '#faf8f3',
          100: '#f2ede1',
          200: '#e4d9c1',
          300: '#d4bf9b',
          400: '#c4a574',
          500: '#b89159',
          600: '#aa7d4d',
          700: '#8d6541',
          800: '#735339',
          900: '#5e4531',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Cinzel', 'serif'],
        elegant: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'ancient-texture': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23626c41' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
