const TEMPLATE = document.createElement("template");
const CACHE = {};

/**
 * @param {string} src 
 * @param {boolean} force 
 * @returns {HTMLElement}
 */
async function getLayout(src, force = false) {
    if (typeof src !== "string") throw new Error("Invalid argument expected a string value as source");
    if (src.length == 0) throw new Error("Empty sources are not allowed");
    if (CACHE[src] == undefined || force) {
        let response = await fetch(src);
        if (response.ok) {
            let html = await response.text();
            TEMPLATE.innerHTML = html;
            CACHE[src] = TEMPLATE.content.firstElementChild;
        }
        return CACHE[src];
    }
    return undefined;
}

/**
 * @param {HTMLElement} element 
 * @param {string} src 
 * @param {boolean} force 
 * @returns {HTMLElement}
 */
async function setLayout(element, src, force = false) {
    if (typeof src !== "string") throw new Error("Invalid argument expected a string value as source");
    if (src.length == 0) throw new Error("Empty sources are not allowed");
    if (element) {
        if (element.layout == undefined || force) {
            let layout = await getLayout(src, force);
            if (layout) {
                let clone = layout.cloneNode(true);
                for (let attr of element.attributes) clone.setAttribute(attr.name, attr.value);
                clone.layout = src;
                await setLayouts(clone, false);
                element.replaceWith(clone);
                return clone;
            }
        }
    }
    return undefined;
}

/**
 * @param {HTMLElement} rootElement 
 * @param {boolean} force 
 * @returns {any}
 */
async function setLayouts(rootElement = document.body, force = false) {
    if (rootElement) {
        let elements = rootElement.querySelectorAll("[data-layout]");
        for (let element of elements) await setLayout(element, element.dataset.layout, force);
        return CACHE;
    }
    return undefined;
}

export {
    getLayout,
    setLayout,
    setLayouts
};