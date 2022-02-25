const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
				sans: ['Rubik', ...defaultTheme.fontFamily.sans],
			}, 
      height: {
        'cover': '700px',
      },
      colors:{
        dark: '#060505'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
