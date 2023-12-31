import { getData } from "./data.js";
import { Path } from "./path.js";

/**
 * @param {HTMLElement} element 
 */
function setValues(element) {
    if (element) {
        if (element.dataset.bindText) {
            let data = getData(element);
            let text = Path.getValue(data, element.dataset.bindText);
            element.innerText = text;
        }
        if (element.dataset.bindHtml) {
            let data = getData(element);
            let html = Path.getValue(data, element.dataset.bindHtml);
            element.innerHTML = html;
        }
        if (element.dataset.bindValue) {
            let data = getData(element);
            let value = Path.getValue(data, element.dataset.bindValue);
            element.value = value;
        }
        if (element.dataset.bindSrc) {
            let data = getData(element);
            let src = Path.getValue(data, element.dataset.bindSrc);
            element.src = src;
        }
        if (element.dataset.bindHref) {
            let data = getData(element);
            let href = Path.getValue(data, element.dataset.bindHref);
            element.href = href;
        }
    }
    return undefined;
}

/**
 * @param {HTMLElement} rootElement 
 */
function setBindings(rootElement = document.body) {
    if (rootElement) {
        let elements = rootElement.querySelectorAll("[data-bind-text], [data-bind-html], [data-bind-value], [data-bind-src], [data-bind-href]");
        for (let element of elements) setValues(element);
    }
    return undefined;
}

document.addEventListener("input", function (event) {
    let target = event.target.closest("[data-bind-value]");
    if (target?.dataset?.bindValue) {
        let data = getData(target);
        let value = Path.setValue(data, target.dataset.bindValue, target.value);
    }
});

export {
    setValues,
    setBindings
};