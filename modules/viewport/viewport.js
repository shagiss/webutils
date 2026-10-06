/**
 *
 * Import
 *
 */
import { screen } from "../events/data.js"
import { percentage as percent } from "../numbers.js"

/**
 *
 * Module
 *
 */
const within = (html) =>
{

    try
    {

        // Convert to getBoundingClientRect
        const bounding_client_rect = html.getBoundingClientRect();

        // In the terms of true and false,
        // is this object within the viewport?
        const within_viewport_boolean = (
            bounding_client_rect.top    >=             0 &&
            bounding_client_rect.left   >=             0 &&
            bounding_client_rect.bottom <= screen.height &&
            bounding_client_rect.right  <= screen.width
        );

        // How distant is this object from the viewport?
        // (in percentage)
        const position = {
            "up"   : bounding_client_rect.top,
            "left" : bounding_client_rect.left,
        };

        // How far is it from top/left in percentage?
        if (position.left < 0) position.left = percent.to(position.left, bounding_client_rect.width);
        if (position.up < 0) position.up = percent.to(position.up, bounding_client_rect.height);

        // If is outside the right or the bottom?
        // (in percentage)
        if (bounding_client_rect.right > screen.width) position.right = percent.to(bounding_client_rect.right - screen.width, bounding_client_rect.width);
        if (bounding_client_rect.bottom > screen.height) position.down = percent.to(bounding_client_rect.bottom - screen.height, bounding_client_rect.height);

        // If is within viewport
        if (within_viewport_boolean) 
        {
            position.left = percent.to(position.left, screen.width);
            position.up = percent.to(position.up, screen.height);
        }

        // Eventually, return everything.
        return {
            "boolean"  : within_viewport_boolean,
            "distance" : position,
        };

    }
    catch(e)
    {

        return console.error("apparently, something went wrong. see here: ", e);

    }

};

/**
 *
 * Export
 *
 */
export { within as default }
