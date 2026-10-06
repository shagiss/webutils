import events from "./modules/events/index.js"
import viewport from "./modules/viewport/index.js"
import HTML from "./modules/new-html/index.js"

// Functions
const moveable_start = function moveable_start(e)
{
    dragging = true;
    bounding = this.getBoundingClientRect();
    bounding = { 
        "x"      : (e.clientX - bounding.left),
        "y"      : (e.clientY - bounding.top),
        "width"  : (events.screen.width - bounding.width),
        "height" : (events.screen.height - bounding.height),
    };
};

// Create HTML element
let moveable = new HTML("div");
moveable.id = "moveable";
moveable.parent(document.body);
moveable = moveable.html;
moveable.addEventListener("mousedown", moveable_start);

let dragging = false;
let bounding;
document.addEventListener("mousemove", (e) => 
{
    if (dragging)
    {
        // Is possible outside of viewport
        const value = {
            "x" : (e.clientX - bounding.x),
            "y" : (e.clientY - bounding.y),
        };

        // If outside viewport
        moveable.style.top  = (e.clientY - bounding.y) + "px";
        moveable.style.left = (e.clientX - bounding.x) + "px";

        const vp = viewport.default(moveable);

        // If exceeding the limits
        if (!vp.boolean)
        {
            // Which is negative?
            if ("right" in vp.distance) 
            {
                moveable.style.left = "auto";
                moveable.style.right = 0;
            }
            else if (vp.distance.left < 0)
            {
                // Is left
                moveable.style.right = "auto";
                moveable.style.left = 0;
            }

            if ("down" in vp.distance)
            {
                moveable.style.top = "auto";
                moveable.style.bottom = 0;
            }
            else if (vp.distance.up < 0)
            {
                moveable.style.bottom = "auto";
                moveable.style.top = 0;
            }
            console.log(vp.distance);
        }

        document.body.children[1].textContent = `The moveable element is ${vp.boolean ? "within" : "outside"} the viewport`;
    }
});
document.addEventListener("mouseup", () => 
{
    dragging = false;
});

//events.mouse.callback = () => console.log(viewport.default(moveable).distance);
