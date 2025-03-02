const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
let graph = [0];
for (let i = 1; i <= n; i++) graph.push(Number(input[i]));
let visited = new Array(n + 1).fill(false);
let finished = new Array(n + 1).fill(false);
let result = [];
for (let i = 1; i <= n; i++)
  if (!visited[i]) dfs(i, graph, visited, finished, result);
let answer = [];
for (let x of result) answer.push(x);
answer.sort((a, b) => a - b);
console.log(answer.length);
for (let x of answer) console.log(x);

function dfs(x, graph, visited, finished, result) {
  visited[x] = true;
  let y = graph[x];
  if (!visited[y]) dfs(y, graph, visited, finished, result);
  else if (!finished[y]) {
    while (y != x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true;
}
