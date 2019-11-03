import { ZipCodeValidator } from "./StringValidations";

let stringValidator = new ZipCodeValidator();

let result = stringValidator.isAccetable("is zip code");
console.log(result);
