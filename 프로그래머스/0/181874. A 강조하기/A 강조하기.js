function solution(myString) {
    var answer = '';
    let arr = myString.split('').map(a => a.toUpperCase());
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'A') answer += arr[i].toLowerCase();
        else answer += arr[i];
    }
    return answer;
}