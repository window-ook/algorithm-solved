function solution(my_string) {
    let x = my_string;
    let newString = my_string.split('');
    let answer = newString.reverse()
    answer = answer.join('')
    return answer;
}