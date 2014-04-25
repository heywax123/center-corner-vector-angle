var dot = require('robust-dot-product');

module.exports = function (n) {
    var p0 = [ 0 ];
    var p1 = [ 1 ];
    
    var h = 1/2;
    var c = [ h ];
    
    for (var i = 1; i < n; i++) {
        p0.push(0);
        p1.push(0);
        var cp = c[i-1];
        h = Math.sqrt(1 - cp*cp);
        c.push(h /(i+2));
    }
    
    var v0 = [], v1 = [];
    for (var i = 0; i < p0.length; i++) {
        v0.push(p0[i] - c[i]);
        v1.push(p1[i] - c[i]);
    }
    return Math.acos(mag(dot(v0, v1)) / mag(v0) / mag(v1));
};

function mag (v) {
    var sum = 0;
    for (var i = 0; i < v.length; i++) {
        sum += v[i]*v[i];
    }
    return Math.sqrt(sum);
}
