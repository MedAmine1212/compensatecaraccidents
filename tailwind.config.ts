module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },

      xl: { max: '1279px' },

      lg: { max: '1023px' },

      md: { max: '767px' },

      sm: { max: '639px' },
      xs: { max: '475px' },
      tall: { raw: '(max-height: 800px)' },
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #243875 0%, #3668DA 100%)',
      },
      boxShadow: {
        'custom-shadow': '0px 20px 60px 0px rgba(36, 56, 117, 0.30)',
      },
      colors: {
        "darkbg": "#101828",
        "lightbg": "#1D2939",
        "primary": "#194185",
        "darkblue": "#162A55",
        "lightblue": "#1570EF",
        "subcolor": "#667085",
        "darkgrey": "#475467",
        "lightgrey": "#D0D5DD",
        "percentage": "#344054",
        "darkanswer":"#1D2939",
        "lightanswer": "#F5F5F5",
        "lightanswerhover": "#C4C4C4",

      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
        serif: ['Display', 'serif'],
        poppins: ['Poppins', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-elevation')],
}
