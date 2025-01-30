let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');
let n = Number(input[0]);
let m = Number(input[1]);
let INF = 1e9;
let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(INF));
for (let i = 1; i <= n; i++) graph[i][i] = 0;
for (let i = 2; i < m + 2; i++) {
  let [a, b, cost] = input[i].split(' ').map(Number);
  graph[a][b] = Math.min(graph[a][b], cost);
}
for (let k = 1; k <= n; k++) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}
for (let i = 1; i <= n; i++) {
  let arr = graph[i]
    .slice(1)
    .map((x) => (x == INF ? 0 : x))
    .join(' ');
  console.log(arr);
}
