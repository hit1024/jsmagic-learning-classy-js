function Class (cls, parent = Object) {
    func = cls.initialize || function() {};
    pnt = parent.initialize || function() {};

    var hasProp = {}.hasOwnProperty;


    for (var key in parent.prototype) {
        //console.log('parent key', key);
        if (hasProp.call(parent.prototype, key) && key != 'initialize'){
            pnt.prototype[key] = parent.prototype[key];
        }
    }
        
    func.prototype.__proto__ = parent.prototype;

    for (var key in cls) {
        //console.log('cls key', key);
        if (hasProp.call(cls, key) && key != 'initialize'){
            func.prototype[key] = cls[key];
        }
    }
    func.__super__ = parent;
    console.log('parent prototype ', parent.prototype);

    func.prototype.super = function (methodName, arg1, arg2) {
        //return x.call(func.__super__, arg1, arg2);
        if (methodName == 'self') {
            return this;
        }
        pp = parent.prototype;
        console.log('parent.name ', pp.name);
        console.log('__proto__.name ', this.__proto__.name);
        //console.log('methodName ', methodName);
        console.log('parent.methodName ', this.__proto__[methodName]);
        //console.log('parent.foo ', pp.foo);
        return pp[methodName].call(pp, arg1, arg2);
        //return this.__proto__[methodName](arg1, arg2);
        //return pp[methodName].call(this.__proto__, arg1, arg2);
    }

    return func;
}

module.exports = Class
