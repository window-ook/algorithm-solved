let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const scores = input[1].split(' ').map(Number);

const m = scores.reduce((a,b) => Math.max(a,b));
let updated = [];
for (let i = 0; i < n; i++) { 
 updated.push(scores[i] / m * 100);
}

console.log(updated.reduce((a, b) => a + b) / n);