function solution(num_list) {
    let answer = 0;
    let odd = [];
    let even = [];
    for (let i = 0; i < num_list.length; i++) {
        if(Math.floor(num_list[i] / 2) !== num_list[i] / 2) odd.push(String(num_list[i])); // 홀수
        else even.push(String(num_list[i])); // 짝수
    }
    odd = odd.join(''), even = even.join('');
    answer = Number(odd) + Number(even);
    return answer;
}