import { Path } from "./js/path.js"
import * as Views from "./js/views.js"
import * as Data from "./js/data.js"

document.addEventListener("click", function (event) {
    let target = event.target.closest("[data-toggle]");
    if (target?.dataset?.toggle) {
        let element = document.getElementById(target.dataset.toggle);
        if (element) {
            element.classList.toggle("toggled");
            let elements = element.querySelectorAll("[data-cascade='toggle']");
            for (let _element of elements) {
                _element.classList.toggle("toggled");
            }
        }
    }
});

export {
    Path,
    Views,
    Data
};