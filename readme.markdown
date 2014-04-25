# center-corner-vector-angle

angle between the center and each corner of a regular minimal polygon in n
dimensions

# example

``` js
var findAngle = require('center-corner-vector-angle')

for (var n = 2; n <= 20; n++) {
    console.log(n + ' => ' + findAngle(n));
}
```

output:

```
2 => 1.0471975511965976
3 => 1.2870022175865687
4 => 1.402690503372862
5 => 1.471887759691484
6 => 1.517976850223149
7 => 1.5508883720346687
8 => 1.5660240734926674
9 => 1.546830400984349
10 => 1.531477003184113
11 => 1.5189163771632699
12 => 1.5084502111948406
13 => 1.4995950668292448
14 => 1.4920056379808466
15 => 1.485428707749477
16 => 1.479674370935166
17 => 1.4745974127782844
18 => 1.4700848944764993
19 => 1.4660476589326252
20 => 1.4624143847497026
```

# methods

```
var findAngle = require('center-corner-vector-angle')
```

## var angle = findAngle(n)

Return the `angle` in radians for the regular polygon with `n` points in `n`
dimensions.

In 2 dimensions, this is the angle between the centerpoint of an equilateral
triangle and 2 of the other points, which is pi/3.

# install

With [npm](https://npmjs.org) do:

```
npm install center-corner-vector-angle
```

# license

MIT
