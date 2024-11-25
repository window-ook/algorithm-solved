let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const [targetS, targetX, targetY] = input[n + 1].split(' ').map(Number);
let dy = [1, 0, -1, 0];
let dx = [0, 1, 0, -1];
let graph = [];
let data = [];

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

// 보드 정보 따고, 데이터 따기
for (let i = 0; i < n; i++) {
  graph.push(input[i + 1].split(' ').map(Number));

  for (let j = 0; j < n; j++) {
    if (graph[i][j] != 0) {
      data.push([graph[i][j], 0, i, j]);
    }
  }
}

// 낮은 바이러스부터 증식하게 오름차순 정렬하고 큐에 넣기
data.sort((a, b) => a[0] - b[0]);
let queue = new Queue();
for (let x of data) {
  queue.enqueue(x);
}

// 큐에 남은게 없을때까지 증식시키기
while (queue.getLength() !== 0) {
  let [virus, s, x, y] = queue.dequeue();

  if (s == targetS) break; // 주어진 S초가 되면 끝

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < n && graph[nx][ny] === 0) {
      graph[nx][ny] = virus;
      queue.enqueue([virus, s + 1, nx, ny]);
    }
  }
}
console.log(graph[targetX - 1][targetY - 1]); // 1씩 빼주는 이유는 현재 그래프의 인덱스는 (0,0)으로 시작해서
