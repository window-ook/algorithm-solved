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

const file = require('fs').readFileSync('/dev/stdin');
const input = file.toString().split('\n');
const [n, m, k, x] = input[0].split(' ').map(Number);
let graph = new Array(n + 1).fill(null).map(() => []); // 단방향 그래프
let distance = new Array(n + 1).fill(-1);

for (let i = 1; i <= m; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
}

distance[x] = 0;
let queue = new Queue();
queue.enqueue(x);

while (queue.getLength() != 0) {
  let curr = queue.dequeue();

  for (let next of graph[curr]) {
    if (distance[next] === -1) {
      distance[next] = distance[curr] + 1;
      queue.enqueue(next);
    }
  }
}

let check = false;
for (let i = 1; i <= n; i++) {
  if (distance[i] === k) {
    console.log(i);
    check = true;
  }
}
if (!check) console.log(-1);
