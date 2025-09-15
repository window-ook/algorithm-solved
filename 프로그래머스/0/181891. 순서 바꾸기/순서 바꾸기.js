function solution(num_list, n) {
    let answer = [];
    answer = num_list.slice(n, num_list.length);
    for (let i = 0; i < n; i++) answer.push(num_list[i]);
    return answer;
}