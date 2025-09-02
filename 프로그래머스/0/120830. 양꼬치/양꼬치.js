function solution(n, k) {
    let sheep = n * 12000;
    let soda = k * 2000;
    let service = Math.floor(n/10)*2000;
    
    return sheep + soda - service;
}