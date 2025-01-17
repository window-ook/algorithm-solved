let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');
let n = Number(input[0]);

d = [];
d[1] = 0;
for (let i = 2; i <= n; i++) {
  d[i] = d[i - 1] + 1;
  if (i % 2 == 0) d[i] = Math.min(d[i], d[i / 2] + 1);
  if (i % 3 == 0) d[i] = Math.min(d[i], d[i / 3] + 1);
}
console.log(d[n]);