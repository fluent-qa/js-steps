// mixin: a set of functions that would otherwise be defined by concrete entity
//Heavy Mixin
var Circle = function () { };
Circle.prototype = {
    area: function () {
        return Math.PI * this.radius * this.radius
    },
    grow: function () {
        this.radius++
    },
    shrink: function () {
        this.radius--;
    }
}

var cirleFns = {
    area: function () {
        return Math.PI * this.radius * this.radius
    },
    grow: function () {
        this.radius++
    },
    shrink: function () {
        this.radius--;
    }
}

var clickableFns = {
    hover: function () {
        console.log('hovering');
    },
    press: function () {
        console.log('button pressed');
    },
    release: function () {
        console.log('button released');
    },
    fire: function () {
        this.action.fire();
    }
};

function extend(dest, source) {
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = source[key];
        }
    }
    return dest;
}

var RoundBtn = function(radius,label){
    this.radius=radius;
    this.label=label;
}
extend(RoundBtn.prototype,clickableFns);
extend(RoundBtn.prototype,cirleFns);
// clickableFns.call(RoundBtn.prototype)
// cirleFns.call(RoundBtn.prototype)
var r= new RoundBtn(2,"first");
console.log(RoundBtn.prototype)
console.log(r)
console.log("round area:",r.area())
r.grow()
r.fire()