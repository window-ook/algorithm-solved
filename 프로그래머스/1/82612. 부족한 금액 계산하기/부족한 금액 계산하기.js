function solution(price, money, count) {
    let sum = [];
    for (let i = 1; i <= count; i++) sum.push(price * i);
    sum = sum.reduce((a, b) => a + b, 0);
    return Math.max(0, sum - money);
}