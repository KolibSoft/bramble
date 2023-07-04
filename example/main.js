// import { } from "https://kolibsoft.github.io/bramble/lib/main.js";
import { Binding, Data, Layouts, Path, Views } from "../lib/main.js";

window.data = document.body.data = {
    text: "My Text",
    html: "<i>My html</i>",
    value: "My value",
    src: "https://th.bing.com/th/id/OIP.JoCzuQoEoDnMwAm9OuLbGQHaF0?pid=ImgDet&rs=1"
};

await Layouts.setLayouts();
Binding.setBindings();
let views = Views.getViews();
