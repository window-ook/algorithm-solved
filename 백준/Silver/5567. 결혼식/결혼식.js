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

let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');
const n = Number(input[0]);
const m = Number(input[1]);
let graph = new Array(n + 1).fill(null).map(() => []); // 친구 관계 그래프
let distance = new Array(n + 1).fill(-1); // 거리(초대하는 동기 수)

// 그래프 그리기
for (let i = 1; i <= m; i++) {
  let [x, y] = input[i + 1].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let queue = new Queue();
queue.enqueue(1); // 상근이(학번 1)부터 시작
distance[1] = 0;

// bfs로 거리 구하기
while (queue.getLength() != 0) {
  let current = queue.dequeue();

  for (let next of graph[current]) {
    if (distance[next] == -1) {
      distance[next] = distance[current] + 1;
      queue.enqueue(next);
    }
  }
}

let count = 0;
for (let i = 1; i <= n; i++) {
  if (distance[i] != -1 && distance[i] <= 2) count++;
}

console.log(count - 1);