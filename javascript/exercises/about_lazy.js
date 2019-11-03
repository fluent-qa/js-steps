function lazyFibonacci(){
    var a = 1;
    var b = 1;
    return function(){
      var next = a;
          a    = b;
          b    = next + b;
      return next;
    }
  }
  var next = lazyFibonacci();
  for(var i=0;i<10;i++){
    console.log(next());
  }
  console.log(next());