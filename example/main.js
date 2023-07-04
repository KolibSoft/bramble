// import { } from "https://kolibsoft.github.io/bramble/lib/main.js";
import { Binding, Data, Layouts, LiveData, Path, Views } from "../lib/main.js";

window.data = document.body.data = {
    "site-name": "My Example Site Name",
    "main": {
        "title": new LiveData("My Main Content Title"),
        "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt enim adipisci quo debitis soluta quaerat reiciendis, quas, officia necessitatibus ipsa voluptatibus consectetur deleniti minus quia voluptatem voluptates dicta ad ullam!"
    },
    "form": {}
};

await Layouts.setLayouts();
Binding.setBindings();
let views = Views.getViews();

let data = new LiveData();
data.observe("owner", value => {
    console.log(`Received value: ${value}`);
});

LiveData.runDispatcher();

