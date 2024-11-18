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

let file = require('fs').readFileSync('/dev/stdin')
let input = file.toString().split('\n');
let [s, t] = input[0].split(' ').map(Number);
let queue = new Queue();
queue.enqueue([s, '']);
let visited = new Set([s]);
let found = false;

if (s == t) {
  console.log(0);
  process.exit();
}

while (queue.getLength() != 0) {
  let [current, ops] = queue.dequeue();
  if (current > 1e9) continue;
  if (current == t) {
    console.log(ops);
    found = true;
    break;
  }

  for (let op of ['*', '+', '-', '/']) {
    let next = current;
    if (op == '*') next *= current;
    if (op == '+') next += current;
    if (op == '-') next -= current;
    if (op == '/' && current != 0) next = 1;
    if (!visited.has(next)) {
      queue.enqueue([next, ops + op]);
      visited.add(next);
    }
  }
}

if (!found) console.log(-1);
