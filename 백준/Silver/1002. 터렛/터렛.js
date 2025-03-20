const file = require('fs').readFileSync('/dev/stdin');
const input = file.toString().trim().split('\n');
const testCase = Number(input[0])

// 원의 교점 공식
// 두 점 사이의 거리와 r1, r2를 이용하여 두 원이 어떤 모양으로 접하는지를 파악
for (let i = 1; i <= testCase; i++) {
    const row = input[i].split(' ').map(Number)
    const turret1 = row.slice(0, 3)
    const turret2 = row.slice(3, 6);
    const result = intersection(...turret1, ...turret2);
    console.log(result)
}

function intersection(x1, y1, r1, x2, y2 ,r2) {
    const d = ((x1 - x2) ** 2) + ((y1 - y2) ** 2);
    const doubleSum = (r1 + r2) ** 2;
    const doubleDiff = (r1 - r2) ** 2;

    if (d == 0) {
        if (r1 == r2) return -1;
        return 0;
    } else {
        if (d > doubleSum || d < doubleDiff) return 0;
        else if (d == doubleSum || d == doubleDiff) return 1;
        else if (d < doubleSum) return 2;
    }
}