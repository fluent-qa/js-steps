
  var sine = function(x){ return Math.sin(x)};

  var cube = function(x){ return x * x * x};

  var sineDebug = function(x){
    return [Math.sin(x), 'sine was called.'];
  };

  var cubeDebug = function(x){
    return [x * x * x, 'cube was called.'];
  };

  var compose = function(f, g){
    return function(x){
      return f(g(x));
    }
  }

  var sineCubed = cube(sine(Math.PI/6));
  console.log(sineCubed.toPrecision(3));

sineCubed = compose(cube, sine);
console.log(sineCubed(Math.PI/6).toPrecision(3));

var composeDebuggable = function(f, g){
    return function(x){
      var gx = g(x),
          y  = gx[0],
          s  = gx[1],
          fy = f(y),
          z  = fy[0],
          t  = fy[1];
      return [z, s+t];
    };
  };

  function bind(f){
    return function(tuple){
      var x  = tuple[0],
          s  = tuple[1],
          fx = f(x),
          y  = fx[0],
          t  = fx[1];
      return [y, s+t];
    }
  }