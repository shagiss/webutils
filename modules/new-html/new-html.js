/**
 *
 * Import
 *
 */
import { capitalize } from "../strings.js";

/**
 *
 * Module
 *
 */
// The following functions are in use
// by Html class
// and should not be available as imports
// (DO NOT EXPORT THEM!)
//
const set_attribute = (element, attribute, value, fallback_attribute) => {

    try
    {

        if (attribute in element)
        {

            element[attribute] = value;

        }
        else
        {

            fallback_attribute !== undefined ? element.setAttribute(fallback_attribute, value) : element.setAttribute(attribute, value);

        }
        
    }
    catch(e)
    {

        // Something went wrong.
        // Try again using .setAttribute
        //
        // This can occur with stuff like
        // .viewBox
        // they exists in element ("viewBox" in SVGElement)
        // but you can't write directly to them
        // so you need to do some workaround
        try
        {

            // If has fallback attribute,
            // use it.
            // otherwise, use the first one
            //
            fallback_attribute !== undefined ? element.setAttribute(fallback_attribute, value) : element.setAttribute(attribute, value);

        }
        catch(r)
        {

            // Seems like there's no way to solve it.
            // then print out both exceptions
            //
            console.error("2 ERRORS OCCURRED:\n------------------------\n", e, r, `${attribute}, ${fallback_attribute}, ${value}`);
            return false;

        }

    }

    // If it worked
    return true;

};

const ns = {
    "svg": ["animate","animateMotion","animateTransform","circle","clipPath","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tspan","use","view"],
    "math": ["annotation","annotation-xml","menclose","merror","mfenced","mfrac","mi","maction","math","mmultiscripts","mn","mo","mover","mpadded","mphantom","mprescripts","mroot","mrow","ms","semantics","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"],
    "list": ["http://www.w3.org/1999/xhtml","http://www.w3.org/2000/svg","http://www.w3.org/1998/Math/MathML"],
};

// !! Only the below will be exported !!
//
class HTML
{

    /**
     *
     * Private functions and variables
     *
     */
    #create(tag, namespace)
    {

        if (namespace !== undefined)
        {

            if (namespace == "svg") namespace = ns.list[1];
            else if (namespace == "math") namespace = ns.list[2];
            else if (!ns.list.includes(namespace)) namespace = undefined;

        }

        try
        {

            this.tag = namespace !== undefined ? document.createElementNS(namespace, tag) : document.createElement(tag);

        }
        catch(e)
        {

            // Failure
            console.error(e);
            return false;

        }

        // Success
        return true;

    }

    /**
     *
     * constructor()
     *
     */
    constructor(tag, namespace)
    {

        // For example ONLY!
        // In production, comment the assignment
        //####this.tag = document.createElement("div");

        // Attempt to create this tag
        //
        if (tag == "svg" || ns.svg.includes(tag)) namespace = "svg";
        if (tag == "math" || ns.math.includes(tag)) namespace = "math";
        this.#create(tag, namespace);

        // If tag is NOT set,
        // stop it and don't proceed
        if (this.tag === undefined) return;

        // References (ONLY AFTER tag creation!!!)
        this.classList = this.tag.classList;
        this.classlist = this.tag.classList;
        this.style     = this.tag.style;
        this.css       = this.tag.style;
        this.dataset   = this.tag.dataset;

        // Readonly
        this.tagName   = this.tag.tagName;
        this.tagname   = this.tag.tagName;

    }

    /**
     *
     * Public functions and variables
     *
     */
    set className(value)
    {

        if (this.tag === undefined) return;
        this.tag.className = value;

    }

    set classname(value)
    {

        if (this.tag === undefined) return;
        this.tag.className = value;

    }

    set class(value)
    {

        if (this.tag === undefined) return;
        this.tag.className = value;

    }

    set id(value)
    {

        if (this.tag === undefined) return;
        this.tag.id = value;

    }

    get class()
    {

        if (this.tag === undefined) return;
        return this.tag.className;

    }

    get className()
    {

        if (this.tag === undefined) return;
        return this.tag.className;

    }

    get classname()
    {

        if (this.tag === undefined) return;
        return this.tag.className;

    }

    get id()
    {

        if (this.tag === undefined) return;
        return this.tag.id;

    }

    set aria(object)
    {

        // If this tag does not exist
        // you can't set aria
        //
        if (this.tag === undefined) return;

        for (let aria in object)
        {

            // Uppercase the first letter, for example:
            // "hidden" => "Hidden"
            //
            let value = object[aria];

            // Handle aria-* attributes
            //
            if (aria.toLowerCase().startsWith("aria")) aria = String(aria).slice(4);
            if (aria.startsWith("-")) aria = String(aria).slice(1);

            aria = { 
                "init": aria.toLowerCase(), 
                "attr": capitalize(aria),
            };
            aria.init = `aria-${aria.init}`;
            aria.attr = `aria${aria.attr}`;

            // (element, attribute, value, fallback_attribute)
            // in case of failure, fallback_attribute will be used
            //
            set_attribute(this.tag, aria.attr, value, aria.init);

        }

    }

    set required(value)
    {

        if (this.tag === undefined) return;
        this.tag.required = value == true;

    }

    set readOnly(value)
    {

        if (this.tag === undefined) return;
        this.tag.readOnly = value == true;

    }

    set readonly(value)
    {

        if (this.tag === undefined) return;
        this.tag.readOnly = value == true;

    }

    get required()
    {

        if (this.tag === undefined) return;
        return this.tag.required;

    }

    get readOnly()
    {

        if (this.tag === undefined) return;
        return this.tag.readOnly;

    }

    get readonly()
    {

        if (this.tag === undefined) return;
        return this.tag.readOnly;

    }

    set name(value)
    {

        if (this.tag === undefined) return;
        if ("name" in this.tag) this.tag.name = value;

    }

    set value(value)
    {

        if (this.tag === undefined) return;
        if ("value" in this.tag) this.tag.value = value;

    }

    set type(value)
    {

        if (this.tag === undefined) return;
        if ("type" in this.tag) this.tag.type = value;

    }

    get name()
    {

        if (this.tag === undefined) return;
        if ("name" in this.tag) return this.tag.name;

    }

    get value()
    {

        if (this.tag === undefined) return;
        if ("value" in this.tag) return this.tag.value;

    }

    get type()
    {

        if (this.tag === undefined) return;
        if ("type" in this.tag) return this.tag.type;

    }

    set width(value)
    {

        if (this.tag === undefined) return;
        if ("width" in this.tag) set_attribute(this.tag, "width", value);

    }

    set height(value)
    {

        if (this.tag === undefined) return;
        if ("height" in this.tag) set_attribute(this.tag, "height", value);

    }

    get outer()
    {

        if (this.tag === undefined) return;
        return this.tag.outerHTML;

    }

    set text(text)
    {

        if (this.tag === undefined) return;
        this.tag.appendChild( document.createTextNode(text) );

    }

    get text()
    {

        if (this.tag === undefined) return;
        return this.tag.textContent;

    }

    set textContent(value)
    {

        if (this.tag === undefined) return;
        this.tag.textContent = value;

    }

    get textContent()
    {

        if (this.tag === undefined) return;
        return this.tag.textContent;

    }

    set href(href)
    {

        if (this.tag === undefined) return;
        if ("href" in this.tag) this.tag.href = href;

    }

    set target(value)
    {

        if (this.tag === undefined) return;
        if ("target" in this.tag) this.tag.target = value;

    }

    get href()
    {

        if (this.tag === undefined) return;
        return this.tag.href;

    }

    get target()
    {

        if (this.tag === undefined) return;
        return this.tag.target;

    }

    get html()
    {

        if (this.tag === undefined) return;
        return this.tag;

    }

    /**
     *
     * Custom public functions
     *
     */
    children()
    {

        // Are we using an alias (e.g. '.attr' or '.attrs')
        // or is it plain '.attributes'?
        let args = arguments;
        if (args[1] == "ref_by_alias") args = args[0];
        if (this.tag === undefined) return this;

        for (let index = 0; index < args.length; index++)
        {

            if (args[index] instanceof HTML)
            {

                this.tag.appendChild(args[index].tag);

            }
            else if (args[index] instanceof HTMLElement)
            {

                this.tag.appendChild(args[index]);

            }

        }

        // That's all
        return this;

    }

    attributes()
    {

        // Are we using an alias (e.g. '.attr' or '.attrs')
        // or is it plain '.attributes'?
        let args = arguments;
        if (args[1] == "ref_by_alias") args = args[0];

        // Loop over all arguments
        //
        if (this.tag !== undefined)
        {

            for (let index = 0; index < args.length; index++)
            {

                // Get the object
                //
                const obj = args[index];
                for (let key in obj)
                {

                    // Store the value
                    // and set the attribute
                    //
                    const value = obj[key];
                    set_attribute(this.tag, key, value);

                }

            }

        }

        // That's all
        return this;

    }

    parent(element, insert_before_index = -1)
    {

        // If this.tag is not set
        // don't do anything
        if (this.tag === undefined) return this;

        // If the parent element is of this instance...
        //
        if (element instanceof HTML) element = element.tag;

        // With that element
        //
        if (insert_before_index >= element.children.length) insert_before_index = element.children.length - 1;
        if (insert_before_index > -1)
        {

            element.insertBefore(this.tag, element.children[insert_before_index]);

        }
        else
        {

            element.appendChild(this.tag);

        }

        // It should return true,
        // unless a serious exception occurs
        return this;

    }

    /**
     *
     * Aliases
     *
     */
    child() { return this.children(arguments, "ref_by_alias") }
    attrs() { return this.attributes(arguments, "ref_by_alias") }
    attr() { return this.attributes(arguments, "ref_by_alias") }
    get outerHTML() { return this.outer }

}

/**
 * 
 * Export
 *
 */
export { HTML as default }
