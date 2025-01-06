let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');
let testCase = Number(input[0]);
let d = new Array(101).fill(0);
d[1] = 1;
d[2] = 1;
d[3] = 1;
for (let i = 4; i <= 100; i++) {
  d[i] = d[i - 3] + d[i - 2];
}

for (let i = 1; i <= testCase; i++) {
  let n = Number(input[i]);
  console.log(d[n]);
}
