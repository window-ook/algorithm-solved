let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, k] = input[0].split(' ').map(Number); // 전체 원소 수
let arr = input[1].split(' ').map(Number); // k번째

arr.sort((a, b) => {
    return a - b;
});

console.log(arr[k - 1]);