// import { } from "https://kolibsoft.github.io/bramble/lib/main.js";
import { Data, Path, Views } from "../lib/main.js";

let views = Views.getViews();
console.log(views);

let data = {};
document.body.data = data;

console.log(Data.getData(views.item));
console.log(Data.setData(views.item, "A value"));
console.log(Data.getData(views.item));
console.log(Data.setData(views.item, "Another value"));
console.log(Data.getData(views.item));
console.log(data);
