/**
 *
 * Import
 *
 */
import { range } from "./numbers.js"

/**
 *
 * Module
 *
 */
// Generate a list of characters by range
const charset = (start, end) => 
{

    // Start by getting the character code 
    // of the start and the end. for example, 
    // the character code of the letter "a" is 97, 
    // and the character code of the letter "z" is 122.
    start = String(start).charCodeAt(0);
    end = String(end).charCodeAt(0);

    // Then place those character codes in a range,
    // Which we generate using our range module (see the import above).
    // Then we use the `Array.prototype.map()` method
    // to create a new array where we add the current index
    // to the starting value.
    const chars = range(start, end).map(index => index + start);

    // `chars` provided an iterable array
    // which we supply into `fromCharCode` as its multiple arguments
    // then we generate a list of letters between start and end.
    return String.fromCharCode(...chars);

};

// A function to uppercase the first letter only
const capitalize = (string) => String(string).charAt(0).toUpperCase() + String(string).slice(1).toLowerCase();

/**
 *
 * Export
 *
 */
export { charset, capitalize }
