/**
 *
 * Module
 *
 */
const mouse = {

    // The value of addEventListener("mousemove")'s clientY and clientX,
    // where clientY is top and clientX is left
    "up"       : 0,
    "left"     : 0,

    // A callback function (instead of wasting
    // multiple event listeners)
    "callback" : () => null,

};

const screen = {

    // The value of screen will be determined
    // by a specific function located in
    // 'screen.js'
    "width"    : 0,
    "height"   : 0,

    // A callback function (instead of wasting
    // multiple event listeners)
    "callback" : () => null,

};

/**
 *
 * Seal
 *
 */
Object.seal(screen);
Object.seal(mouse);
Object.defineProperties(screen, {
    "width"    : { "writable": true, "configurable": false },
    "height"   : { "writable": true, "configurable": false },
    "callback" : { "writable": true, "configurable": false },
});
Object.defineProperties(mouse, {
    "up"       : { "writable": true, "configurable": false },
    "left"     : { "writable": true, "configurable": false },
    "callback" : { "writable": true, "configurable": false },
});

export { mouse, screen }
