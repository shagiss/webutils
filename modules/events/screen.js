/**
 *
 * Import
 *
 */
import { screen } from "./data.js"
import { capitalize } from "../strings.js"

/**
 *
 * Module
 *
 * Nothing in this script should be exported;
 * instead, it should be called like this:
 * import "/modules/events/screen.js"
 *
 */
const init = () => 
{

    const size = (event) => 
    {
        
        ["width","height"].forEach((property) =>
        {

            // turn "width"/"height" into "Width"/"Height"
            const capital = capitalize(property);

            // The value of 
            // `screen.width` 
            // can be 
            // `document.documentElement.clientWidth`
            // or
            // `window.innerWidth`,
            // depends on which one's value is bigger,
            // or it could be 0.
            screen[property] = Math.max(
                document.documentElement[`client${capital}`] || 0,
                window[`inner${capital}`] || 0
            );

        });

        // If there's a callback function
        // and you want to call it
        if (screen.callback instanceof Function) return screen.callback(event);

    };

    // Attach the 'resize' event
    window.addEventListener("resize", size);

    // Initialize one-time only
    size();

};

init();
