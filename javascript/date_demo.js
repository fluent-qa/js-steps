var date = new Date("2018-03-12 00:00:00")
console.log(date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay());

// var result = "-".join([date.getFullYear(),date.getMonth(),date.getDay()]);
// console.log(result)

var formatter = function(date) {
    if(date==undefined || date ==null){ return ''}
    var origin=new Date(date);
    console.log(origin.toString('yyyy-MM-dd'))
    console.log(origin);
    console.log(origin.getFullYear()+"-"+origin.getMonth()+"-"+origin.getDay());
}

formatter("2018-01-30 00:00:00")

var test = new Date();
console.log(test.toLocaleDateString())

var date = new Date("2018-01-30 00:00:00")
console.log(date.toLocaleDateString())

var test= []
test[0]=1230
test[1]=123
console.log(test.toString())
