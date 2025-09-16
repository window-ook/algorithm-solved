function solution(my_string, is_suffix) {
    var answer = 0;
    let start = my_string.length - is_suffix.length; // 시작점
    if (my_string.slice(start, my_string.length) === is_suffix) answer = 1;
    return answer;
}