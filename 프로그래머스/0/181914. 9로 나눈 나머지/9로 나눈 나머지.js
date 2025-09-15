function solution(number) {
    var answer = 0;
    let acc = number.split('').map(a => Number(a)).reduce((a, b) => a + b);
    answer = Math.floor(acc % 9);
    return answer;
}