function solution(money) {
    let oneCup = Math.floor(money/5500);
    let lefts = money%5500
    
    return [oneCup, lefts];
}