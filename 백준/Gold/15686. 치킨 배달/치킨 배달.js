const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let house = [];
let chicken = [];
for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ').map(Number);
  for (let j = 0; j < n; j++) {
    if (line[j] == 1) house.push([i, j]);
    if (line[j] == 2) chicken.push([i, j]);
  }
}
let visited = new Array(chicken.length).fill(false);
let selected = [];
let answer = 1e9;

function dfs(depth, start) {
  if (depth == m) {
    let result = [];
    let sum = 0;
    for (let i of selected) result.push(chicken[i]);
    for (let [hx, hy] of house) {
      let temp = 1e9;
      for (let [cx, cy] of result) {
        temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy));
      }
      sum += temp;
    }
    answer = Math.min(answer, sum);
  }

  for (let i = start; i < chicken.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(answer);
