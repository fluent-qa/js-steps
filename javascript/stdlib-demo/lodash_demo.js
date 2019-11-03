var _ = require('lodash');
var add= require("lodash/fp");

const addOne = add(1);
result = _.map([1,2,3],addOne);
console.log(result);

console.log(result.length);

for(var i=0;i<result.length;i++){
    console.log(result[i])
}

