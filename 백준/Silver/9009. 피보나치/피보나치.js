const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// fibo
fibo = [];
fibo.push(0);
fibo.push(1);
while (fibo[fibo.length - 1] < 1e9) fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]) // 끝에서 -2, -1 항을 누적합
// 계산
let testCase = Number(input[0]);
for (let t = 1; t <= testCase; t++) {
    let result = [];
    let n = Number(input[t]);
    let i = fibo.length - 1; // 피보나치 수열의 가장 큰 항부터 찾아냄
    while (n > 0) {
        if (n >= fibo[i]) {
            n -= fibo[i];
            result.push(fibo[i]);
        }
        i--;
    }
    let answer = '';
    for (let i = result.length - 1; i >= 0; i--) answer += result[i] + ' ';
    console.log(answer);
}