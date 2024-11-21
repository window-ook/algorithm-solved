const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
let data = [];
let temp = [];
for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ').map(Number);
  data.push(line);
  temp.push(new Array(m).fill(0));
}
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let result = 0;

// 바이러스 전파하기
function virus(x, y) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (temp[nx][ny] == 0) {
      temp[nx][ny] = 2;
      virus(nx, ny);
    }
  }
}

// 안전영역 크기 세기
function getSafe() {
  let safe = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (temp[i][j] == 0) safe++;
    }
  }
  return safe;
}

function dfs(count) {
  if (count == 3) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        temp[i][j] = data[i][j];
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (temp[i][j] == 2) virus(i, j);
      }
    }
    result = Math.max(result, getSafe());
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (data[i][j] == 0) {
        data[i][j] = 1;
        dfs(count + 1);
        data[i][j] = 0;
      }
    }
  }
}
dfs(0);
console.log(result);
