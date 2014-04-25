var findAngle = require('../');
var test = require('tape');

test(function (t) {
    t.plan(20);
    approx(findAngle(2)*3, Math.PI);
    approx(findAngle(2), 1.0471975511965976);
    approx(findAngle(3), 1.2870022175865687);
    approx(findAngle(4), 1.402690503372862);
    approx(findAngle(5), 1.471887759691484);
    approx(findAngle(6), 1.517976850223149);
    approx(findAngle(7), 1.5508883720346687);
    approx(findAngle(8), 1.5660240734926674);
    approx(findAngle(9), 1.546830400984349);
    approx(findAngle(10), 1.531477003184113);
    approx(findAngle(11), 1.5189163771632699);
    approx(findAngle(12), 1.5084502111948406);
    approx(findAngle(13), 1.4995950668292448);
    approx(findAngle(14), 1.4920056379808466);
    approx(findAngle(15), 1.485428707749477);
    approx(findAngle(16), 1.479674370935166);
    approx(findAngle(17), 1.4745974127782844);
    approx(findAngle(18), 1.4700848944764993)
    approx(findAngle(19), 1.4660476589326252)
    approx(findAngle(20), 1.4624143847497026);
    
    function approx (a, b) {
        var xa = Math.round(a * 1e8) / 1e8;
        var xb = Math.round(b * 1e8) / 1e8;
        t.equal(xa, xb);
    }
});
