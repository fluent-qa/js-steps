//missing some information
function indentity(arg:number):number{
    console.log(arg);
    return arg
}
//use generics
function indentityG<T>(arg:T):T{
    console.log("this is generic implementation");
    return arg; 
}

interface GenericIndFn{
    <T>(arg:T): T
}
function identityFN<T>(arg: T): T {
    return arg;
}
// let ind:GenericIndFn<number> = indentityFN;

class BeeKeeper{
    hasMask: boolean = false;
}

class Zookeeper{
    nametag: string = "";
}

