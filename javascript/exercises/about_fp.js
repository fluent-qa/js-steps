var oldValue = 34;
var newValue = 12;

var Vars = function () {
    var values = {
        foo: "bar"
    }

    return {
        get: function (name) { return values[name] },
        set: function (name, value) {
            if (values[name] != null)
                return values[name];
            values[name] = value;
            return value;
        }
    };
}
console.log(Vars['set']);
var x = Vars['set']('x', oldValue);
console.log(x);
var y = Vars['set']('x', newValue);
console.log(y);