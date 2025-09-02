function solution(n) {
    let answer = 0;
    if (Math.floor(n/2) !== n/2) {
        for (let i = 1; i <= n; i++) {
            if (Math.floor(i/2) !== i/2) answer += i;
        }
    } else {
        for (let i = 1; i <= n; i++) {
            if (Math.floor(i/2) === i/2) answer += i**2;
        }
    }
    return answer;
}