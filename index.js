function Class (cls) {
    function func(a, b) {
        //var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
        //para = arguments;
        //console.log(arguments);
        this.ifunc = cls.initialize || function(a, b){};
        this.ifunc(a, b);
        //cls.initialize.call(func, a, b);
    }
    func.prototype.getA = function() { return this.a;}
    func.prototype.getB = function() { return this.b;}
    //console.log(func)
    //console.log(func.toString())

    return func;
}

module.exports = Class
