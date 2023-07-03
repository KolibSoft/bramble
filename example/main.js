// import { } from "https://kolibsoft.github.io/bramble/lib/main.js";
import { Path } from "../lib/main.js";

let object = {};
Path.setValue(object, "A.B.C", "A value");
console.log(Path.getValue(object, "A.B.C"));
console.log(Path.getValue(object, "."));

