let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');
let [n, m, h] = input[0].split(' ').map(Number);
let b = input.slice(1, n + 1).map((line) => line.split(' ').map(Number));
let d = Array(n + 1)
  .fill()
  .map(() => Array(h + 1).fill(0));
d[0][0] = 1;

for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= h; j++) {
    d[i][j] = d[i - 1][j];
    for (let k of b[i - 1]) {
      if (j - k >= 0) {
        d[i][j] += d[i - 1][j - k];
        d[i][j] %= 10007;
      }
    }
  }
}
console.log(d[n][h]);
