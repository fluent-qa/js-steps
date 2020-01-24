function vote(candidate:string,callback:(result:string)=>any){
    console.log("this is main process");
    console.log("this is callback process");
    callback("result"); //callback is a function
}