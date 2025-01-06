const file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');
let n = Number(input[0]);
let triangle = [];
for (let i = 1; i <= n; i++) triangle.push(input[i].split(' ').map(Number));
let d = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
d[0][0] = triangle[0][0];
for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    let left = j > 0 ? d[i - 1][j - 1] : 0;
    let right = j < i ? d[i - 1][j] : 0;
    d[i][j] = triangle[i][j] + Math.max(left, right);
  }
}
console.log(Math.max(...d[n - 1]));
