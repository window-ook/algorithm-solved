function solution(n, k) {
    var answer = [];
    for (let i = 1; i <= Math.floor(n/k); i++) {
        const result = i*k;
        if(result <= n) answer.push(result);
    }
    return answer;
}