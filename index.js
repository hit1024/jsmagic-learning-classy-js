function Class (cls) {
    var initialize = cls.initialize || function() {};
    func = initialize;
    func.prototype.getA = function() { return this.a;}
    func.prototype.getB = function() { return this.b;}
    //console.log(func)
    //console.log(func.toString())

    return func;
}

module.exports = Class
