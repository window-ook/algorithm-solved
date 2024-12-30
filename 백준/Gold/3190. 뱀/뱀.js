// 문제 풀이 파일
// 뱀 ⭐️⭐️⭐️
class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  getLength() {
    return this.tail - this.head;
  }
}

let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');
let n = Number(input[0]);
let k = Number(input[1]);
let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
// 사과 1로 표시
for (let i = 2; i <= k + 1; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  graph[x][y] = 1;
}
let l = Number(input[k + 2]);
let info = [];
for (let i = k + 3; i < k + 3 + l; i++) {
  let [x, c] = input[i].split(' ');
  info.push([Number(x), c]);
}
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
function turn(direction, c) {
  if (c == 'L') {
    direction = direction - 1;
    if (direction == -1) direction = 3;
  } else direction = (direction + 1) % 4;
  return direction;
}

let [x, y] = [1, 1];
graph[x][y] = 2;
let direction = 0;
let index = 0;
let time = 0;

let q = new Queue();
q.enqueue([x, y]);

while (true) {
  let nx = x + dx[direction];
  let ny = y + dy[direction];

  if (1 <= nx && nx <= n && 1 <= ny && ny <= n && graph[nx][ny] != 2) {
    if (graph[nx][ny] == 0) {
      graph[nx][ny] = 2;
      q.enqueue([nx, ny]);
      let [px, py] = q.dequeue();
      graph[px][py] = 0;
    }
    if (graph[nx][ny] == 1) {
      graph[nx][ny] = 2;
      q.enqueue([nx, ny]);
    }
  } else {
    time += 1;
    break;
  }
  [x, y] = [nx, ny];
  time += 1;
  if (index < l && time == info[index][0]) {
    direction = turn(direction, info[index][1]);
    index += 1;
  }
}
console.log(time);
