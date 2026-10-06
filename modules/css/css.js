/**
 *
 * Module
 *
 */
// The only supported colors are RGB and HEXADECIMAL colors.
// Other colors will not be supported by functions.
// You must convert any HEXADECIMAL color into RGB
// using the `convert` function.
// `convert` takes any of the following:
// -> an hex string (e.g. #ffffff, typeof string);
// -> an rgb(a) string (e.g. rgb(255,255,255), typeof string);
// It can not handle arrays, objects, etc.

// This object handle fonts
// and determines what their sizes are
// and whether they're bold or not
const font = {
    
    // Any weight from 700 on is bold
    "bold"   : (number) => (number instanceof Number ? number : Number(number)) >= 700,

    // Font size in points
    "points" : (pixels, dpi = 90) => (pixels instanceof Number ? pixels : Number(pixels)) * (72 / dpi),

    // More to come?
    // maybe.

};

// Diverse functions to determine color type and more
const colors = {

    "is"     : (string) => 
    {

        // Input must be a string,
        // otherwise return empty string
        if (typeof string != "string") return "";

        // Different types of Regular expressions
        const hex = {
            "short"   : /^[#]?([a-f0-9]{3})$/i,
            "regular" : /^[#]?([a-f0-9]{6})$/i,
        };

        const rgb = /^rgb\(([\d]+([.][\d]+)?,){2}([\d]+([.][\d]+)?){1}\)[;]?$/i;
        const rgba = /^rgba\(([\d]+([.][\d]+)?,){3}[\d.]+\)[;]?$/i;

        if (hex.short.test(string)) return "hex:short";
        else if (hex.regular.test(string)) return "hex";
        else if (rgba.test(string)) return "rgb:alpha";
        else if (rgb.test(string)) return "rgb";
        else return "";

    },

    "hex_to_rgb" : color =>
    {

        // Define the type of the color
        let color_type = colors.is(color);
        // If no type - then error
        if (color_type != "hex" && color_type != "hex:short") throw new Error("`rgbify` function accepts ONLY HEXADECIMAL STRINGS (e.g.: `#fff` or `#ffffff`)!");

        // Custom functions
        const make_long_hex = color => 
        {
            // Remove hash
            if (color.startsWith("#")) color = color.slice(1);
            
            // The trick:
            // You duplicate every letter right after the other.
            // e.g.: #0c0 -> #00cc00
            let long_hex = "";
            for (let index = 0; index < color.length; index++) long_hex += String(color[index]).repeat(2);
            return long_hex;

        };

        // Convert short-hex and long-hex into rgb
        if (color_type == "hex:short") 
        {
            color = make_long_hex(color);
            color_type = "hex";
        }

        // Convert this to RGB
        return "rgb(" + [color.slice(0,2), color.slice(2,4), color.slice(4,6)].map(value => parseInt(value, 16)).join(",") + ")";

    },

    "rgb"    : color =>
    {

        // Input must be a string
        if (typeof color != "string") throw new Error("Please provide a valid color of type string");

        // Remove spaces and tabs
        color = color.split(" ").join("").split("\t").join("");

        // If the string is NOT RGB or RGBA
        // then you can't break it.
        // if is hex, use "hex_to_rgb" to "rgbify" it
        const color_type = colors.is(color);
        if (color_type == "") throw new Error("Please provide a valid color (e.g. hex color will be converted to rgb; or rgb string)");
        else if (color_type.indexOf("hex") > -1) color = colors.hex_to_rgb(color);

        const break_string_into_array = (color, slice_from_start = 3) => {
            
            // Add one to slice from start 
            // to remove the '(' with the 'rgb'/'rgba'
            slice_from_start++;
            color = color.slice(slice_from_start).slice(0, -1).split(",");
            
            // Reduce the length to 3
            color.length = 3;

            // Return the array
            return color.map(item => Number(item));

        };

        // This is where everything ends :)
        color = break_string_into_array(color, (color_type == "rgb:alpha" ? 4 : 3));
        return {
            "r" : color[0],
            "g" : color[1],
            "b" : color[2],
        };

        // Now, convert this string to an array
        //return break_string_into_array(color, (color_type == "rgb:alpha" ? 4 : 3));

    },

};

// Our default function: `extract_css_from_html`. 
// You can call it as you desire when you import it
const extract_css_from_html = (html, psuedo = null) => window.getComputedStyle(html, psuedo);

/**
 *
 * Seal
 *
 */
Object.seal(font);
Object.seal(colors);
Object.defineProperties(font, {
    "bold"       : { "writable" : false, "configurable" : false },
    "points"     : { "writable" : false, "configurable" : false },
});
Object.defineProperties(colors, {
    "is"         : { "writable" : false, "configurable" : false },
    "hex_to_rgb" : { "writable" : false, "configurable" : false },
    "rgb"        : { "writable" : false, "configurable" : false },
});

/**
 *
 * Export
 *
 */
export { extract_css_from_html as default, colors, font }
