let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
    let age = Number(input[i].split(' ')[0]);
    let name = input[i].split(' ')[1];
    arr.push([age, name]);
};

arr.sort((a, b) => a[0] - b[0]);
let answer = '';
for (a of arr) answer += a[0] + ' ' + a[1] + '\n';
console.log(answer);