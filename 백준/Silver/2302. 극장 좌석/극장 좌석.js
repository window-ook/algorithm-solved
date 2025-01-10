let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');
let n = Number(input[0]);
let m = Number(input[1]);
let fix = m > 0 ? input.slice(2, 2 + m).map(Number) : [];
let vip = [0, ...fix, n + 1]; // 0, 4, 7, 10 섹션을 위해서
let sections = [];
for (let i = 1; i < vip.length; i++) sections.push(vip[i] - vip[i - 1] - 1);

let d = Array(n + 1).fill(0);
d[1] = 1;
d[2] = 2;
for (let i = 3; i <= n; i++) d[i] = d[i - 2] + d[i - 1];

let result = 1;
for (let i = 0; i < sections.length; i++) {
  if (sections[i] > 0) {
    let num = d[sections[i]];
    result *= num;
  }
}
console.log(result);
