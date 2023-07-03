import { Path } from "./path.js";

/**
 * @param {HTMLElement} element 
 * @param {boolean} force
 * @returns {any}
 */
function getData(element = document.body, force = false) {
    if (element) {
        var sourceElement = element.closest("[data-data]");
        if (sourceElement) {
            if (sourceElement.data == undefined || force) {
                let data = getData(sourceElement.parentElement, force);
                sourceElement.data = Path.getValue(data, sourceElement.dataset.data);
            }
            return sourceElement.data;
        }
    }
    return undefined;
}

/**
 * @param {HTMLElement} element 
 * @param {any} value
 * @param {boolean} force
 * @returns {any}
 */
function setData(element = document.body, value = {}, force = false) {
    if (element) {
        var sourceElement = element.closest("[data-data]");
        if (sourceElement) {
            if (sourceElement.data == undefined || force) {
                let data = getData(sourceElement.parentElement, force);
                sourceElement.data = Path.getValue(data, sourceElement.dataset.data);
            }
            Path.setValue(sourceElement.data, sourceElement.dataset.data, value);
            return sourceElement.data;
        }
    }
    return undefined;
}

export {
    getData,
    setData
};