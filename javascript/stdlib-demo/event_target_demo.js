function hello(){
    console.log('Hello World!')
}

var button = document.getElementById('btn')
button.addEventListener('click',hello,{once:true});

// addEventListener,removeEventListener,dispatchEvent

// event model
var phases = {
    1: 'capture',
    2: 'target',
    3: 'bubble'
  };
  
  var div = document.querySelector('div');
  var p = document.querySelector('p');
  
  div.addEventListener('click', callback, true);
  p.addEventListener('click', callback, true);
  div.addEventListener('click', callback, false);
  p.addEventListener('click', callback, false);
  
  function callback(event) {
    var tag = event.currentTarget.tagName;
    var phase = phases[event.eventPhase];
    console.log("Tag: '" + tag + "'. EventPhase: '" + phase + "'");
  }