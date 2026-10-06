/**
 *
 * Module
 *
 */
const colorscheme = {

    // The browser-default state
    "state" : () => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",

    // If we have a localStorage value
    // then we override the browser-default state
    "local" : () =>
    {

        // Return the value, or return null
        const value = localStorage.getItem("color-scheme");
        return value === "light" || value === "dark" ? value : null;

    },

    // Is there any difference between the localStorage value
    // to the browser-default state? (e.g. user wants dark mode,
    // and browser's default is light)
    "diff"  : () => colorscheme.local() !== null && colorscheme.local() !== colorscheme.state(),

    // If there is no difference between the user-saved
    // to the browser's default, then remove from localStorage
    "unset" : () => !colorscheme.diff() ? localStorage.removeItem("color-scheme") : null,

    // Set specific state on demand
    "set"   : (state) =>
    {

        // Sub-function to handle color schemes
        const set_color_scheme = (state) =>
        {
            document.documentElement.style.colorScheme = state;
            localStorage.setItem("color-scheme", state);
        };

        // Set a specific state, or toggle
        if (state === "light" || state === "dark") return set_color_scheme(state);
        else if (colorscheme.local()) return set_color_scheme(colorscheme.local() == "dark" ? "light" : "dark");
        else return set_color_scheme(colorscheme.state() == "dark" ? "light" : "dark");

    },

};

// This function will unset localStorage data
// if there's no difference
colorscheme.unset();

// If there's difference in colorscheme,
// Change the color scheme.
if (colorscheme.diff()) colorscheme.set(colorscheme.local());

/**
 *
 * Seal
 *
 */
Object.seal(colorscheme);
Object.defineProperties(colorscheme, {
    "set"   : { "writable" : false, "configurable" : false },
    "diff"  : { "writable" : false, "configurable" : false },
    "state" : { "writable" : false, "configurable" : false },
    "local" : { "writable" : false, "configurable" : false },
});

/**
 *
 * Export
 *
 */
export { colorscheme as default }
