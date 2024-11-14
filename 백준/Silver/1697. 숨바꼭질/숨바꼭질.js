const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

class Queue {
  constructor() {
      this.headIndex = 0;
      this.tailIndex = 0;
      this.items = {};
  }
    
  enqueue(item) {
      this.items[this.tailIndex] = item;
      this.tailIndex++;
  }
    
  dequeue() {
      const curr = this.items[this.headIndex];
      delete this.items[this.headIndex];
      this.headIndex++;
      return curr;
  }
    
  getLength() {
      return this.tailIndex - this.headIndex;
  }
}

const MAX = 1000001;
const [n, k] = input[0].split(' ').map(Number); // 5, 17
let visited = new Array(MAX).fill(0);

function bfs() {
    if (n === k) return 0;
    
    queue = new Queue();
    queue.enqueue(n);
    
    while (queue.getLength() != 0) {
        let curr = queue.dequeue();
        
        if (curr == k) return visited[curr];
        
        for (let next of [curr - 1, curr + 1, curr * 2]) {
            if (next < 0 || next >= MAX) continue;
            if (visited[next] == 0) {
                visited[next] = visited[curr] + 1;
                queue.enqueue(next);
            }
        }
    }

}

console.log(bfs());