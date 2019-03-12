// Colors
const colorPrimary = '#cc0000';
const colorSecondary = '#00cc00';
const colorDarkest = '#000000';
const colorLightest = '#ffffff';
const focusColor = "#0000ff";

// Text colors
const textColorDarkest = colorDarkest;
const textColorLightest = colorLightest;

// Borders
const borderWidth = '1px';
const borderRadius = '5px';

// Paddings & Margins

// Typography
const fontSize = '1rem';
const lineHeight = '1.2rem';

// Button
const buttonHeight = '40px';
const buttonPaddingY = '10px';
const buttonPaddingX = '20px';


// todo: use a library, need to allow use float and allow three/six char hex code
const lightenShade = function(color, percentage) {
    const R = parseInt(color.substring(1, 3), 16);
    const G = parseInt(color.substring(3, 5), 16);
    const B = parseInt(color.substring(5, 7), 16);
    const curr_total_dark = (255 * 3) - (R + G + B);

    // calculate how much of the current darkness comes from the different channels
    const RR = ((255 - R) / curr_total_dark);
    const GR = ((255 - G) / curr_total_dark);
    const BR = ((255 - B) / curr_total_dark);

    // calculate how much darkness there should be in the new color
    const new_total_dark = ((255 - 255 * (percentage / 100)) * 3);

    // make the new channels contain the same % of available dark as the old ones did
    const NR = 255 - Math.round(RR * new_total_dark);
    const NG = 255 - Math.round(GR * new_total_dark);
    const NB = 255 - Math.round(BR * new_total_dark);

    const RO = ((NR.toString(16).length === 1) ? "0" + NR.toString(16) : NR.toString(16));
    const GO = ((NG.toString(16).length === 1) ? "0" + NG.toString(16) : NG.toString(16));
    const BO = ((NB.toString(16).length === 1) ? "0" + NB.toString(16) : NB.toString(16));

    return "#" + RO + GO + BO;
}

const mixinFocus = color => `box-shadow: 0 0 0 .1rem ${color};`;
const mixinLighten = (property, color, percentage) => `${property}: ${lightenShade(color, percentage)}`;

export {colorPrimary, colorSecondary, colorDarkest, colorLightest, focusColor, textColorDarkest, textColorLightest, borderWidth, borderRadius, buttonPaddingY, buttonPaddingX, fontSize, lineHeight, buttonHeight, mixinFocus, mixinLighten};
