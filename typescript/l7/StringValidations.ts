import { StringValidator } from "./Validatations";

const numRegExp = /^[0-9]+$/
export default class ZipCodeValidator implements StringValidator{
    isAccetable(s: string): boolean {
        return s.length===5 && numRegExp.test(s)
    }
}

export { numRegExp,ZipCodeValidator };