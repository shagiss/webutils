/**
 *
 * Import
 *
 */
import { default as cssify, font, colors } from "./css.js"
import { ratio } from "./ratio-and-luminance.js"

/**
 *
 * Module
 *
 */
const handle = (html) =>
{

    // Extract CSS Properties and process them
    const css = {
        // This object WILL BE DELETED.
        "del" : cssify(html),
    };

    const retrieve_background_color = (html, css) =>
    {
        // Get the background color
        const bg = css.getPropertyValue("background-color");
        // If the background is NOT transparent
        if (bg !== "rgba(0, 0, 0, 0)") return bg;
        // If the background IS transparent,
        // get the css of the parent element
        if (html.parentNode != null && html.parentNode instanceof HTMLElement) return retrieve_background_color(html.parentNode, cssify(html.parentNode));
        // Otherwise
        // Probably no stylesheet
        // then if dark mode background is probably dark
        // and if light mode background is probably light
        return bg;

    };
    css.background = retrieve_background_color(html, css.del);

    // Convert everything that is font
    ["font-weight","font-size"].forEach(property => {
        
        const name = property.slice(5);
        css[name] = css.del.getPropertyValue(property);

        switch (property)
        {
            case "font-weight":
                css[name] = font.bold(Number(css.bold));
                break;
            case "font-size":
                css[name] = css[name].split("px").join("");
                css[name] = font.points(css[name]);
                break;
        }

    });

    // Now with all of these,
    // let's check the ratio
    css.ratio = ratio(css.background, css.del.color).antecedent;

    // Delete some that we don't need
    ["del","color","background-color"].forEach(property => delete css[property]);

    // Return this object
    return css;

};

const aa = html => 
{

    // Extract CSS Properties
    let css = handle(html);

    // Now:
    return (
        css.ratio >= 4.5 || (
            css.ratio >= 3 && (
                (css.weight && css.size >= 14) || css.size >= 18
            )
        )
    );

};

const aaa = html => 
{

    // Do the same here
    let css = handle(html);

    // Now:
    return (
        css.ratio >= 7 || (
            css.ratio >= 4.5 && (
                (css.weight && css.size >= 14) || css.size >= 18
            )
        )
    );

};

// A function that checks for both
const valid = html => ({ "aa" : aa(html), "aaa" : aaa(html), "ratio" : handle(html).ratio });

/**
 *
 * Export
 *
 */
export { valid as default, aa, aaa }
