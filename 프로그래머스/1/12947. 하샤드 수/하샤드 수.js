function solution(x) {
    let str = String(x);
    let acc = str.split('').map(Number).reduce((a, b) => a + b, 0);
    if (x % acc === 0) return true;
    else return false;
}