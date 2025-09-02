function solution(myString) {
    let answer = '';
    for (let i = 0; i < myString.length; i++) answer += myString[i].toUpperCase();
    return answer;
}