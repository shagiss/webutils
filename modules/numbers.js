/**
 *
 * Module
 *
 */
// Generate a random number between 0 and 10
//
// This function calls `Math.floor`,
// which always rounds down any number.
//
// Inside `Math.floor` we call `Math.random`
// which generates a friction (e.g. 0.18277331044441214).
// We take that friction and we multiply it by our maximum number
// Unless you change it, that maximum is 100.
const rand = (maximum = 100) => Math.floor(
    Math.random() * maximum
);

// A random number (floating point) between two numbers
// (thanks to MDN)
const randbetween = (maximum = 100, minimum = 0) => Math.random() * (maximum - minimum) + minimum;

// Generate a range of numbers between two numbers
//
// This function uses the "..." spread syntax:
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax>
// 
// It calls the Array() constructor,
// then it defines it's length.
// the length of the new array is the value of
// (end - start + 1)
// then it creates that amount of empty slots.
//
// Using `.keys()` it creates an iterator
// which you can use with the spread syntax.
const range = (start = 0, end = 10) => [...Array(end - start + 1).keys()];

// Multiple percentage functions!
// calculate percentage in different ways.
//
// Import it as percent:
// import { percentage as percent } from "./numbers.js"
const percentage = {

    // You have two numbers:
    // 20 (which will be represented as `a`)
    // and 200 (which will be represented as `b`).
    //
    // the "to" function will help you know
    // what percentage is 20 in 200.
    "to"   : (a, b) => (a / b) * 100,

    // You have a percentage, and a number.
    // the percentage is 40% (which will be represented as `p`)
    // and the number is 200 (which will be represented as `a`).
    //
    // the "from" function will help you know
    // what number is 40% of 200.
    "from" : (p, n) => (p / 100) * n,

};

// Protect objects
// --------------------------------------------
Object.seal(percentage);
Object.defineProperties(percentage, {
    "to"   : { "writable" : false, "configurable" : false },
    "from" : { "writable" : false, "configurable" : false },
});

/**
 *
 * Export
 *
 */
export { percentage, range, rand, randbetween }
