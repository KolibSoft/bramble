// import { } from "https://kolibsoft.github.io/bramble/lib/main.js";
import { Data, Layouts, Path, Views } from "../lib/main.js";

await Layouts.setLayouts();
let views = Views.getViews();
console.log(views);
console.log(views.item.layout);

let data = {  };
document.body.data = data;

console.log(Data.getData(views.item));
console.log(Data.setData(views.item, "A value"));
console.log(data);