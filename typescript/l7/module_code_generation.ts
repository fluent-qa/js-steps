// define(["require", "exports", "./mod"], 
//     function (require, exports, mod_1) {
//         exports.t = mod_1.something + 1;
// });

//

declare module "*!text" {
    const content: string;
    export default content;
}
// Some do it the other way around.
declare module "json!*" {
    const value: any;
    export default value;
}

import fileContent from "./xyz.txt!text";
import data from "json!http://example.com/data.json";
console.log(data, fileContent);
