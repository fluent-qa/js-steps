var web_dev = "java javascript php jsonp python hdslajdasgsa";


patthen = /something/igm;

var r1 = /a/.test('A')
var r2 = /a/i.test('A')
console.log(r1);
console.log(r2);

var source = 'hello hello hoo';
console.log('hello hello hoo'.match(/h.*?\b/)); //[ 'hello', index: 0, input: 'hello hello hoo' ]
console.log(source.match(/h.*?\b/g)); // g 多个匹配，不加g返回详细结果

