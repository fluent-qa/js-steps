"use strict";
//missing some information
function indentity(arg) {
    console.log(arg);
    return arg;
}
//use generics
function indentityG(arg) {
    console.log("this is generic implementation");
    return arg;
}
function identityFN(arg) {
    return arg;
}
// let ind:GenericIndFn<number> = indentityFN;
class BeeKeeper {
    constructor() {
        this.hasMask = false;
    }
}
class Zookeeper {
    constructor() {
        this.nametag = "";
    }
}
