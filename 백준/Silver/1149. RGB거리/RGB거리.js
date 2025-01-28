let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');
let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(input[i].split(' ').map(Number));
let dp = Array.from(Array(n), () => Array(3).fill(0));
dp[0] = arr[0];
for (let i = 1; i < n; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0]; // 빨강
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1]; // 초록
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i][2]; // 파랑
}
console.log(Math.min(...dp[n - 1]));