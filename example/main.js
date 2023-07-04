// import { } from "https://kolibsoft.github.io/bramble/lib/main.js";
import { Binding, Data, Layouts, Path, Views } from "../lib/main.js";

window.data = document.body.data = {
    "site-name": "My Example Site Name",
    "main": {
        "title": "My Main Content Title",
        "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt enim adipisci quo debitis soluta quaerat reiciendis, quas, officia necessitatibus ipsa voluptatibus consectetur deleniti minus quia voluptatem voluptates dicta ad ullam!"
    },
    "form": {}
};

await Layouts.setLayouts();
Binding.setBindings();
let views = Views.getViews();
