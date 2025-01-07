let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');
let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(Number(input[i]));

let d = new Array(n).fill(0);
d[0] = arr[0];
for (let i = 1; i < n; i++) {
  d[i] = Math.max(d[i - 1] * arr[i], arr[i]);
}
let result = d.reduce((a, b) => Math.max(a, b));
result = Math.round(result * 1000) / 1000;
console.log(result.toFixed(3));
