class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enq(val, priority) {
        let node = new Node(val, priority);
        this.values.push(node);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (parent.priority < element.priority) break;
            this.values[index] = parent;
            this.values[parentIndex] = element;
            index = parentIndex;
        }
    }

    deq() {
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
        const element = this.values[0];
        const length = this.values.length;
        while(true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swap = null;
            let leftChild, rightChild;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority < element.priority) swap = leftChildIndex;
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)) {
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

const file = require('fs').readFileSync('/dev/stdin');
const input = file.toString().trim().split('\n');
const [n, m, k] = input[0].split(' ').map(Number);
let INF = 1e17;
let graph = Array(n + 1).fill(null).map(() => [])
for (let i = 1; i <= m; i++) {
    let [a, b, c] = input[i].split(' ').map(Number);
    graph[a].push([b, c])
    graph[b].push([a, c])
}
let distance = Array(n + 1).fill(null).map(() => Array(k + 1).fill(INF))

function dijkstra(start) {
    let pq = new PriorityQueue();
    pq.enq([start, 0], 0)
    distance[start][0] = 0;

    while(pq.values.length > 0) {
        let top = pq.deq();
        if (!top) continue;
        let {val: [node, paved], priority: cost} = top; // [노드, 포장 도로], 비용
        if (cost > distance[node][paved]) continue;

        for (const [nextNode, nextCost] of graph[node]) {
            // 포장하지 않음
            if (distance[nextNode][paved] > cost + nextCost) {
                distance[nextNode][paved] = cost + nextCost;
                pq.enq([nextNode, paved], cost + nextCost)
            }            

            // 포장함
            if (distance[nextNode][paved + 1] > cost && paved < k) {
                distance[nextNode][paved + 1] = cost
                pq.enq([nextNode, paved + 1], cost)
            }
        }
    }
}

dijkstra(1)
console.log(Math.min(...distance[n]))