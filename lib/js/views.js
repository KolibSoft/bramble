/**
 * @param {HTMLElement} rootElement 
 * @param {boolean} force 
 * @returns {any}
 */
function getViews(rootElement = document, force = false) {
    if (rootElement) {
        if (rootElement.views == undefined || force) {
            rootElement.views = {};
            let elements = rootElement.querySelectorAll("[data-view]");
            for (let element of elements) rootElement.views[element.dataset.view] = element;
        }
        return rootElement.views;
    }
    return undefined;
}

export {
    getViews
};