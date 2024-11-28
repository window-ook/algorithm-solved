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
const [n, k, m] = input[0].split(' ').map(Number);
let graph = new Array(n + m + 1).fill(null).map(() => []); // 원래 노드 + 하이퍼튜브
let visited = new Set([1]); // 방문한 노드

for (let i = 1; i <= m; i++) {
  let connection = input[i].split(' ').map(Number);
  let hyper = n + i;
  for (let station of connection) {
    graph[station].push(hyper);
    graph[hyper].push(station);
  }
}

let queue = new Queue();
queue.enqueue([1, 1]);
let found = false;

while (queue.getLength() != 0) {
  let [dist, curr] = queue.dequeue();

  if (curr === n) {
    console.log(parseInt(dist / 2) + 1);
    found = true;
    break;
  }

  for (let next of graph[curr]) {
    if (!visited.has(next)) {
      visited.add(next);
      queue.enqueue([dist + 1, next]);
    }
  }
}

if (!found) console.log(-1);
