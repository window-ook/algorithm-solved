function solution(myString, pat) {
    let answer = '';
    // 반복문으로 반전시키고, 완성된 반전문에 includes.(pat)
    for (let i = 0; i < myString.length; i++) {
        if(myString[i] === 'A') answer += 'B';
        else if(myString[i] === 'B') answer += 'A';
    }
    if (answer.includes(pat)) return 1;
    return 0;
}