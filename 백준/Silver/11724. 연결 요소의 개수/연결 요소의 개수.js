const file = require('fs').readFileSync('/dev/stdin');
const input = file.toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number)
let visited = Array(n + 1).fill(false);
let graph = Array(n + 1).fill(null).map(() => []);
for (let i = 1; i <= m; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

let count = 0;
for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
        dfs(i);
        count++;
    }
}

function dfs(x) {
    visited[x] = true;
    for (let i of graph[x]) {
        if (!visited[i]) dfs(i)
    }
}

console.log(count)