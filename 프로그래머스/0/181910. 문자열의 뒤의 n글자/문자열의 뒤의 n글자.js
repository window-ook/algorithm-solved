function solution(my_string, n) {
    var answer = '';
    let start = my_string.length - n;
    answer = my_string.slice(start, my_string.length);
    return answer;
}