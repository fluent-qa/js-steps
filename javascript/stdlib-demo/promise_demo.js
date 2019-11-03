function print(a1,a2){
    console.log(a1,a2)
}
function f2(a,b){
    console.log("this is f2",a,b)
}
var p1 = Promise(print)
p1('a','b').then(f2)

//pending,fulfill,rejected----promise state

// load pict
var preloadImg=function(path){
    return new Promise(function(resolve,reject){
        var img = new Image()
        img.onload = resolve;
        img.onerror=reject
        img.src=path
    })
}

preloadImg('https://www.baidu.com')
.then(function(e){
    document.body.append(e.target)
    console.log("any")})
    .then(function(){
        console.log('load it')
    })