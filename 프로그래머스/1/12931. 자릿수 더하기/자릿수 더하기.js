function solution(n) {
    var answer = 0;
    const str = String(n);
    const arr = str.split('');
    answer = arr.reduce((a, b) => Number(a) + Number(b), 0);
    return answer;
}