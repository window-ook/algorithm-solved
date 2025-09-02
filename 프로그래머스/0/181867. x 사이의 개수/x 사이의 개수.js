function solution(myString) {
    let idx = []; // 1, 4, 6, 7, 9
    for (let i = 0; i < myString.length; i++) if (myString[i] === 'x') idx.push(i);
    
    let cnt = [];
    // x끼리 빼고 -1을 다시 빼면 그게 사이 글자 수
    for (let i = 0; i < idx.length; i++) {
        if (i === 0) cnt.push(idx[i]);
        else cnt.push(idx[i] - idx[i - 1] - 1);
    };
    // 나눠진 문자열의 가장 마지막
    cnt.push(myString.length - idx[idx.length - 1] - 1);
    
    return cnt;
}