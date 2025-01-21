// 문제 풀이 파일
let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');
let n = Number(input[0]);
let d = Array.from(Array(n + 1), () => Array(10).fill(0));
d[1][0] = 0;
for (let j = 1; j <= 9; j++) d[1][j] = 1;

for (let i = 2; i <= n; i++) {
  for (let j = 0; j <= 9; j++) {
    d[i][j] = 0;
    if (j > 0) d[i][j] += d[i - 1][j - 1];
    if (j < 9) d[i][j] += d[i - 1][j + 1];
    d[i][j] %= Number(1e9);
  }
}

let result = 0;
for (let j = 0; j <= 9; j++) {
  result += d[n][j];
  result %= Number(1e9);
}
console.log(result);
