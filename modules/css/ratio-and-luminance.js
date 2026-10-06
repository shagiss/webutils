/**
 *
 * Parts in this script are inspired by --
 * "Calculate Color Contrast Ratios In JavaScript" by Alan W. Smith
 * <https://html-css-js.alanwsmith.com/recipes/calculate_color_contrast_ratio--2hhbo0yptnbm/index.html>
 *
 */

/**
 *
 * Import
 *
 */
import { colors } from "./css.js"

/**
 *
 * Module
 *
 */
// ----------------------------
const luminance = (rgb) =>
{

    // For later use within the loop
    const multiply = { "r": 0.2126, "g": 0.7152, "b": 0.0722 };

    // Calculate the luminance
    for (let tone in rgb)
    {

        // For each tone:
        //
        // Divide it by 255,
        // then we'll get a fraction between 0 to 1
        // when 0 is 0, 127 is 0.5, and 255 is 1
        rgb[tone] /= 255;
        if (rgb[tone] <= 0.03928)
        {
            rgb[tone] /= 12.92;
        }
        else
        {
            rgb[tone] = Math.pow(
                (rgb[tone] + 0.055) / 1.055,
                2.4
            );
        }

        // Multiply the tone by a number
        // previously specified
        rgb[tone] *= multiply[tone];

    }

    // Then sum everything up and return the luminance
    return Object.values(rgb).reduce((a, b) => a + b, 0);

};

// Calculate antecedent
const antecedent = (color_a, color_b) => (
    (
        Math.max( color_a, color_b ) + 0.05
    ) /
    (
        Math.min( color_a, color_b ) + 0.05
    )
);

const ratio = (color_a, color_b) =>
{

    // Convert Hex to RGB
    try
    {
        color_a = colors.rgb(color_a);
        color_b = colors.rgb(color_b);
    }
    catch(e)
    {
        return console.error(e);
    }

    // Get luminance of each color
    let luminance_a = luminance(color_a);
    let luminance_b = luminance(color_b);

    return {
        "luminance"  : [luminance_a, luminance_b],
        "antecedent" : Number(antecedent(luminance_a, luminance_b).toFixed(2))
    };

};

/**
 *
 * Export
 *
 */
export { luminance, ratio }
