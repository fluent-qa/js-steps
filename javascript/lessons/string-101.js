const abc = "abcdefghijklmnopqrstuvwxyz";
//string functions
console.log(abc.indexOf('d'))
console.log(abc.lastIndexOf("o"))
console.log(abc.replace("abc","123"))
console.log(abc)


abc.toUpperCase();              // convert to upper case
abc.toLowerCase();              // convert to lower case
var str2 ="str2"
abc.concat("",str2);          // abc + " " + str2
abc.charAt(2);                  // character at index: "c"
abc[2];                         // unsafe, abc[2] = "C" doesn't work
abc.charCodeAt(2);              // character code at index: "c" -> 99
abc.split(",");                 // splitting a string on commas gives an array
abc.split("");                  // splitting on characters
"128".toString(16);               // number to hex(16), octal (8) or binary (2)
"65".toHexString()