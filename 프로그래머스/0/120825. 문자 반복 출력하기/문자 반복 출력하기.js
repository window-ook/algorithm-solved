function solution(my_string, n) {
    let newString = my_string.split('');
    let answer = [];
    for (let i = 0; i<newString.length; i++) {
      for (let j = 0; j < n; j++) {
       answer.push(newString[i])
      }
    }
    return answer.join('');
}