function solution(num_list) {
    let answer = num_list.sort((a,b) => a - b);
    return answer.slice(5, answer.length);
}