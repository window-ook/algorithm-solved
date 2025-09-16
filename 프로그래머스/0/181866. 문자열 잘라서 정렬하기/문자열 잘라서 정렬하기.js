function solution(myString) {
    var answer = [];
    answer = myString.split('x').filter(a => a !== '');
    return answer.sort();
}