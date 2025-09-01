function solution(my_string) {
    let answer = [];
    for (let i = 0; i <= my_string.length - 1; i++) {
        let str = my_string.slice(i, my_string.length);
        answer.push(str);
    }
    answer.sort((a, b) => a.localeCompare(b));
    return answer;
}