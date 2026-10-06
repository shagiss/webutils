/**
 *
 * Import
 *
 */
import { mouse, screen } from "./data.js"
import { percentage as percent } from "../numbers.js"

/**
 *
 * Module
 *
 * Nothing in this script should be exported;
 * instead, it should be called like this:
 * import "/modules/events/mouse.js"
 *
 */
const init = () =>
{

    // Attach a mousemove event listener.
    // Soon, do the same with touches...
    document.addEventListener("mousemove", (event) =>
    {
        mouse.up   = percent.to(event.clientY, screen.height);
        mouse.left = percent.to(event.clientX, screen.width);

        // If has callback function
        // and you want to use it here
        // (for example, for console-logging values)
        if (mouse.callback instanceof Function) return mouse.callback(event);

    });

    document.addEventListener("touchmove", (event) => 
    {

        // If sliding with more than one finger..
        if (event.touches.length > 1) console.warn("Multiple fingers are not supported in this context; Please modify `/modules/events/mouse.js` for support. This function ignores other fingers");

        // The single finger
        mouse.up   = percent.to(event.touches[0].clientY, screen.height);
        mouse.left = percent.to(event.touches[0].clientX, screen.width);

        // If there's a callback
        if (mouse.callback instanceof Function) return mouse.callback(event);

    });

};

init();
