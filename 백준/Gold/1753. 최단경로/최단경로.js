let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let start = Number(input[1]);
let INF = 1e9;
let graph = Array(n + 1)
  .fill(null)
  .map(() => []);
for (let i = 2; i <= m + 1; i++) {
  let [a, b, c] = input[i].split(' ').map(Number);
  graph[a].push([b, c]);
}

let distance = new Array(n + 1).fill(INF);

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enq(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent.priority <= element.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  deq() {
    if (this.values.length === 0) return null;
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
    }
    return min;
  }


  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild;
      let rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

function dijkstra() {
  let pq = new PriorityQueue();
  pq.enq(start, 0); // 시작 노드 넣기
  distance[start] = 0; // 비용 집어넣기
  while (pq.values.length !== 0) {
    let node = pq.deq();
    let now = node.val;
    let dist = node.priority;

    if (distance[now] < dist) continue;

    for (let i of graph[now]) {
      let cost = i[1] + dist;
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        pq.enq(i[0], cost);
      }
    }
  }
}

dijkstra();
for (let i = 1; i <= n; i++) {
  if (distance[i] === INF) console.log('INF');
  else console.log(distance[i]);
}
