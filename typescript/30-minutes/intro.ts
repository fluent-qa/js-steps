//basic element in typescript

function f(){
    console.log("hello world!");
}

function hello(){
    return "Hello"
}

var i = 1

f()
console.log(hello().split("l"));
console.log(i)
// try {
//     hello("hello"); //error because of type,Unable to compile TypeScript:
// } catch (error) {
//     console.log(error)
// }

class Greeter {}

// declare var document;
// document.title="this"

//function type
function vote(candidate:string,callback:(result:string)=>any){
    console.log("candidate is ",candidate);
    console.log(callback.arguments)
}

vote("candidate1",function(result:string){
    console.log(result);
})

//object type
var MakePoint: ()=>{
    x:number;
    y:number;
}

interface Friend{
    name:string;
    favoriteColor?:string;
}

function addFriend(friend:Friend){
    var name = friend.name
    console.log(name)
}

addFriend({name:"F"});
// addFriend({favoriteColor:"BLUE"}); //errror
addFriend({name:"111",favoriteColor:"gree"});  //the type is enough
//structure and class
interface Point {
    x:number;
    y:number;
}

class CPoint{
    x:number;
    y:number;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }
}

function getX(p:Point){
    return p.x
}

console.log(getX(new CPoint(10,10)))
console.log(getX({x:1}))