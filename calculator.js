function calculator (value) {
    value = 0;
    return {
        set: function(set) {
            return value = set;
        },
        add: function(add) {
            return value = value + add;
        },
        mult: function(mult) {
            return value = value * mult;
        },
        sub: function(sub) {
            return value = value - sub;
        },
        div: function(div) {
            return value = value / div;
        },
    }
};

module.exports  =  calculator();