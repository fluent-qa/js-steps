function vote(candidate:string,callback:(result:string)=>any){
    console.log("this is main process");
    console.log("this is callback process");
    callback("result"); //callback is a function
}

declare var $: any;
declare type JQuery = any;
declare var $: any;

//DefinitelyTyped @types/global,module
// {
//     "compilerOptions": {
//         "types": [
//             "jquery"
//         ]
//     }
// }


interface Process {
    exit(code?: number):void
    exitWithLogging(code?:number):void
}
declare let process: Process
process.exitWithLogging = function(){
    console.log("log it")
    process.exit.apply(process,[1]);
}
process.exit();
