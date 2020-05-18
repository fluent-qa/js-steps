"use strict";
// define(["require", "exports", "./mod"], 
//     function (require, exports, mod_1) {
//         exports.t = mod_1.something + 1;
// });
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xyz_txt_text_1 = __importDefault(require("./xyz.txt!text"));
const data_json_1 = __importDefault(require("json!http://example.com/data.json"));
console.log(data_json_1.default, xyz_txt_text_1.default);
