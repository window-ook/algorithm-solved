const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
};
arr.sort((a, b) => b - a);

let cnt = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > k) continue;
    else {
        if (k > 0) {
            let x = Math.floor(k / arr[i]);
            cnt += x;
            k -= arr[i] * x;
        } else {
            break;
        }
    }
}

console.log(cnt);