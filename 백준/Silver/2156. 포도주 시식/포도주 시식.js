let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');
let n = Number(input[0]);
let wine = [0];
for (let i = 1; i <= n; i++) {
  let row = Number(input[i]);
  wine.push(row);
}

d = new Array(10001).fill(0);
d[1] = wine[1];
d[2] = wine[1] + wine[2];
for (let i = 3; i <= n; i++)
  d[i] = Math.max(
    d[i - 1],
    d[i - 2] + wine[i],
    d[i - 3] + wine[i - 1] + wine[i]
  );
console.log(d[n]);
