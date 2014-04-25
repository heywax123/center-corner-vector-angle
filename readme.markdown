# center-corner-vector-angle

return the angle between the center and each corner of a minimal polygon in `n`
dimensions

# example

``` js
var findAngle = require('center-corner-vector-angle')

for (var n = 2; n < 10; n++) {
    console.log(n + ' => ' + findAngle(n));
}
```

output:

```
2 => 1.176005207095135
3 => 1.3894765523934063
4 => 1.4922253963901124
5 => 1.5532714048850909
6 => 1.5477440309457733
7 => 1.5187802577083203
8 => 1.497053873823965
9 => 1.480147216607153
```

# methods

```
var findAngle = require('center-corner-vector-angle')
```

## var angle = findAngle(n)

Return the `angle` in radians for the regular polygon with `n` points in `n`
dimensions.

In 2 dimensions, this is the angle between the centerpoint of an equilateral
triangle and 2 of the other points.

# install

With [npm](https://npmjs.org) do:

```
npm install center-corner-vector-angle
```

# license

MIT
