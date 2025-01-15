/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
 theme: {
    extend: {
      colors: {
        'dark-blue': '#04152D',
        'light-blue': '#262a34',
        'blue-gray': '#363a45',
         'dark-black': '#0C0C0C99',
         'icon-color-bg' : '#19376D'
    },
    fontFamily :{
          "outfit" : ['Outfit', 'sans-serif'],
          "roboto" : ['Roboto','sans-serif']
          // font-family: "Roboto", sans-serif;
    }
  },
  plugins: [],
}
}

