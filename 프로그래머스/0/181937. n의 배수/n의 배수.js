function solution(num, n) {
    let answer = 0;
    if (num/n === Math.floor(num/n)) answer = 1;
    return answer;
}