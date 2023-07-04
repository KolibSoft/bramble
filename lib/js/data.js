import { Path } from "./path.js";

/**
 * @param {HTMLElement} element 
 * @returns {any}
 */
function getData(element = document.body) {
    if (element) {
        var sourceElement = element.closest("[data-data]");
        if (sourceElement.dataset.data == "#") return sourceElement.data;
        if (sourceElement) {
            let data = getData(sourceElement.parentElement);
            sourceElement.data = Path.getValue(data, sourceElement.dataset.data);
            return sourceElement.data;
        }
    }
    return undefined;
}

/**
 * @param {HTMLElement} element 
 * @param {any} value
 * @returns {any}
 */
function setData(element = document.body, value = null) {
    if (element) {
        var sourceElement = element.closest("[data-data]");
        if (sourceElement.dataset.data == "#") return sourceElement.data;
        if (sourceElement) {
            let data = getData(sourceElement.parentElement);
            sourceElement.data = Path.setValue(data, sourceElement.dataset.data, value);
            return sourceElement.data;
        }
    }
    return undefined;
}

export {
    getData,
    setData
};