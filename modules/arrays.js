/**
 *
 * Import
 *
 */
import { random } from "./numbers.js"

/**
 *
 * Module
 *
 */
const shuffle = (array) => 
{
    
    // We iterate backwards over this array.
    // We start at the last element of the array
    // (index represents the last element of the array)
    // Then we decrease index until nothing is left.
    for (let index = (array.length - 1); index > 0; index--)
    {

        // Now that index is our maximum value (there's no
        // other index that is bigger than it),
        // We'll try to find a psuedo-random index within the array
        // which is smaller than, or equal to, the current index
        const swap = random(index);

        // Once we've got our new index, it's time to swap
        // between the current index and the psuedo-random one
        [array[index], array[swap]] = [array[swap], array[index]];

    }

    // Return the shuffled array
    return array;

};

// Filter out duplicates from an array, using Set
const unique = (array) => [...new Set(array)];

/**
 *
 * Export
 *
 */
export { shuffle, unique }
