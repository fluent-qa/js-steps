var _ = "any";

function pattern(args_and_values) {
    return function (arg) {
        for (var i = 0; i < args_and_values.length; i++) {
            var patternArg = args_and_values[i][0];
            var patternVal = args_and_values[i][1];
            if (arg == patternArg || patternArg == _) {
                return typeof(patternVal) == 'function' ? patternVal(arg): patternVal;
            }
        }
    }
}

var fib = pattern([
    [0, 1],
    [1, 1],
    [_, function (n) {
        return fib(n - 2) + fib(n - 1);
    }]
]);

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(10));