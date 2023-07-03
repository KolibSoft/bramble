const TEMPLATE = document.createElement("template");
const CACHE = {};

/**
 * @param {string} src 
 * @param {boolean} force 
 * @returns {HTMLElement}
 */
async function getLayout(src, force) {
    if (CACHE[src] == undefined || force) {
        let response = await fetch(src);
        if (response.ok) {
            let html = await response.text();
            TEMPLATE.innerHTML = html;
            CACHE[src] = TEMPLATE.content.firstElementChild;
        }
    }
    return CACHE[src];
}

export {
    getLayout
};