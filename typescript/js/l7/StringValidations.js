"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numRegExp = /^[0-9]+$/;
exports.numRegExp = numRegExp;
class ZipCodeValidator {
    isAccetable(s) {
        return s.length === 5 && numRegExp.test(s);
    }
}
exports.default = ZipCodeValidator;
exports.ZipCodeValidator = ZipCodeValidator;
