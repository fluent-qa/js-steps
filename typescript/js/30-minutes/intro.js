"use strict";
//basic element in typescript
function f() {
    console.log("hello world!");
}
function hello() {
    return "Hello";
}
var i = 1;
f();
console.log(hello().split("l"));
console.log(i);
// try {
//     hello("hello"); //error because of type,Unable to compile TypeScript:
// } catch (error) {
//     console.log(error)
// }
class Greeter {
}
// declare var document;
// document.title="this"
//function type
function vote(candidate, callback) {
    console.log("candidate is ", candidate);
    console.log(callback.arguments);
}
vote("candidate1", function (result) {
    console.log(result);
});
//object type
var MakePoint;
function addFriend(friend) {
    var name = friend.name;
    console.log(name);
}
addFriend({ name: "F" });
// addFriend({favoriteColor:"BLUE"}); //errror
addFriend({ name: "111", favoriteColor: "gree" }); //the type is enough
class CPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
function getX(p) {
    return p.x;
}
console.log(getX(new CPoint(10, 10)));
console.log(getX({ x: 1 }));
