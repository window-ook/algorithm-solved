const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

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

  getIndex(item) {
    for (let i = this.headIndex; i < this.tailIndex; i++) {
      if (this.items[i] === item) {
        return i - this.headIndex;
      }
    }
    return -1;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let testCases = Number(input[0])
let dx = [-2, -2, -1, -1, 1, 1, 2, 2]
let dy = [-1, 1, -2, 2, -2, 2, -1, 1]
let line = 1;

while(testCases--) {
    let l = Number(input[line]);
    let [x, y] = input[line + 1].split(' ').map(Number);
    let [tx, ty] = input[line + 2].split(' ').map(Number);
    let visited = [];
    for (let i = 0; i < l; i++) visited.push(new Array(l).fill(0));
    
    const queue = new Queue();
    queue.enqueue([x, y]);
    visited[x][y] = 1;
    
    while (queue.getLength() != 0) {
        let curr = queue.dequeue();
        x = curr[0]
        y = curr[1]
        
        if (x === tx && y === ty) break;
        
        for (let i = 0; i < 8; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            
            if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue;
            if (visited[nx][ny] == 0) {
                visited[nx][ny] = visited[x][y] + 1;
                queue.enqueue([nx, ny]);
            }
        }
    }
    
    line += 3;
    console.log(visited[tx][ty] - 1); // 시작부터 거리가 1이라서 1 빼주는 거
}