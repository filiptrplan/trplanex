/* eslint-disable @typescript-eslint/no-var-requires */
const colors =  require('tailwindcss/colors');                                                                      

function returnColorRGBA(color) {
    let opacities = {};
    for(const subColor in color){
        const aRgbHex = color[subColor].slice(1).match(/.{1,2}/g);
        const aRgb = [
            parseInt(aRgbHex[0], 16),
            parseInt(aRgbHex[1], 16),
            parseInt(aRgbHex[2], 16),
        ];
        opacities[subColor] = {};
        for(let i = 10; i < 100; i+=5){
            opacities[subColor][
                i.toString()
            ] = `rgba(${aRgb[0]}, ${aRgb[1]}, ${aRgb[2]}, ${i/100})`;
        }
    }
    return opacities;
}

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: colors.purple,
                primaryOpacity: returnColorRGBA(colors.purple),
                danger: colors.red,
                dangerOpacity: returnColorRGBA(colors.red),
            },
            fontFamily: {
                sans: ["Rubik", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {
          outline: ['active'],
          backgroundColor: ['active'],
        },
    },
    plugins: [],
};
