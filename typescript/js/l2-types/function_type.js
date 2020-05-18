"use strict";
function vote(candidate, callback) {
    console.log("this is main process");
    console.log("this is callback process");
    callback("result"); //callback is a function
}
