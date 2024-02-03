/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Mulish':['Mulish','sans-serif']
      },
      screens:{
        'Medium_Mobiles_Size_View':{max:'375px',min:'321px'},
        'Small_Mobiles_Size_View':{max:'321px'}
      }
    },
  },
  plugins: [],
}

