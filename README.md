# Webutils

A collection of JavaScript modules to make the life of the developer easy.
Useful tools that can be used for daily purposes:

**Numbers**
* Generate random number (`numbers.rand`), or generate random number within a range (`numbers.randbetween`);
* Generate a range of numbers (e.g. A range of numbers between 0 to 10 - `numbers.range`)
* Calculate percentage (Number to percentage / percentage to number - `numbers.percentage`)

**Strings**
* Capitalize first letter of a string (e.g.: "john" -> "John", `strings.capitalize`)
* Generate list of characters (e.g. All a-z letters, `strings.charset`)

**Arrays**
* Create Unique array (e.g. `["a","a","a","b","b","c"]` -> `["a","b","c"]`; `arrays.unique`)
* Shuffle an existing array and return that shuffled array (`arrays.shuffle`)

**More modules!**
* `HTML`: a module to create HTML objects easily (`new HTML("div")`; see literally any HTML page in this directory, they all use it).
* `events`: A module that captures mouse and screen events (`mousemove`, `resize`) and knows where the cursor is at by calculating the percentage from top and left (see `events-example.html`)
* `viewport`: If element is inside or outside the screen, and how far is it outside/within (see `viewport-example.html`)
* `css`: Useful tools to extract stuff from CSS and deal with different situations. For example: toggle between dark mode/light mode, calculate color ratio and more. (see `css-example.html`)

## License
All of this project is released under GNU GPLv2 or newer.

## Important
**This project is still under development and experimental! USE AT YOUR OWN RISK - THERE'S NO WARRANTY FOR ANYTHING.** You're solely responsible for your use of these utils.
Read the source code before using these tools so you can better understand them and how they work.

## Thanks!
Without the following sources, I wouldn't be able to learn, proceed and program lots of parts of these cool utils:
1. **My wife** - Helped me with my dyscalculia and developed all the math stuff (percentage); she wrote it in psuedo-code and I translated it to JavaScript.
2. [Alan W. Smith - for the ratio, antecedent and luminance functions](https://html-css-js.alanwsmith.com/recipes/calculate_color_contrast_ratio--2hhbo0yptnbm/index.html)
3. Many contributors on StackOverflow which taught me how to use `new Set`, [taught me how shuffle works](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array), and many more.

If I forgot someone, I sincerely apologize, and would love to credit on this list. Let me know about that.
Without them, I guess many things would never be made. these precious sources worth a lot more than asking ChatGPT - there's no replacement for human insights and smartness. So, thank you!

## How to use?
1. Clone this repository using `git`;
2. Import your desired module(s) using the `import` keyword. [Don't know how to import? Read this article on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

## Last but not least
Now it's yours too, so have fun with it :)
If you have any ideas on how to improve it or what you think it needs, Let me know, or even better - contribute it!

Documentation will be written over time; if you're impatient, you can review the code and write the documentation!
