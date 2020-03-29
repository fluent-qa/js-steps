"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringValidations_1 = require("./StringValidations");
let stringValidator = new StringValidations_1.ZipCodeValidator();
let result = stringValidator.isAccetable("is zip code");
console.log(result);
