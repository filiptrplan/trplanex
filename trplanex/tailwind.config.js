/* eslint-disable @typescript-eslint/no-var-requires */
const colors =  require('tailwindcss/colors');                                                                      

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: colors.purple,
            },
            fontFamily: {
                sans: ["Rubik", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
