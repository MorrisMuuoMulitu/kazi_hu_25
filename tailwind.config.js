/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        extend: {
          colors: {
            'hungary-blue': '#436f4d',
            'hungary-red': '#cd2a3e',
            'kenya-green': '#006644',
            'kenya-red': '#bb0000',
            'kenya-black': '#000000',
          },
        },
      },
      plugins: [],
    }
