const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ')
let arr = input.map(Number);
arr.sort((a, b) => a - b);

let answer = '';
for (let i = 0; i < arr.length; i++) answer += arr[i] + ' ';
console.log(answer);