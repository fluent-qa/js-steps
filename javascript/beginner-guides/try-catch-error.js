function criticalCode() {
    throw "throwing an exception";
}

function logError(theException) {
    if(theException instanceof Error){
        console.log(theException.message)
        console.log(theException.stack)
    }
    console.log(theException);
}

console.log("\n********Throwing Exceptions********\n");

//Try..Catch
console.log("\n********Try..Catch********\n");

function throwErrorDemo(){
    throw new Error("it is an error")
}

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    console.log(typeof ex)
    logError(ex);
}

try{
    throwErrorDemo(); //
}catch (ex) {
    logError(ex)
}finally{
    console.log("always here")
}