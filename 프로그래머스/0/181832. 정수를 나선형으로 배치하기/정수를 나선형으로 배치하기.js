// n × n 크기의 2차원 배열 초기화
// 현재 위치 (0, 0)에서 시작
// 1부터 n² 까지 숫자를 하나씩 채우면서:
//   - 현재 방향으로 이동 가능하면 계속 진행
//   - 불가능하면 다음 방향으로 전환

function solution(n) {
    let answer = Array.from({ length: n }, () => Array(n).fill(0));
    // 시계 방향으로 꺾기: 우, 하, 좌, 상
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];
    let x = 0;
    let y = 0;
    let dir = 0;
    
    for (let num = 1; num <= n*n; num++) {
        answer[x][y] = num;
        let nx = x + dx[dir];
        let ny = y + dy[dir];
        
        if (nx < 0 || ny < 0 || nx >= n || ny >= n || answer[nx][ny] !== 0) {
            dir = (dir + 1) % 4;
            nx = x + dx[dir];
            ny = y + dy[dir];                 
        }
        
        x = nx;
        y = ny;
    }
    return answer;
}