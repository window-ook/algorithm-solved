function solution(num_list) {
    let answer = 0;
    let odd = [];
    let even = [];
    for (let i = 0; i < num_list.length; i++) {
        if (i % 2 !== 0) odd.push(num_list[i]);
        else even.push(num_list[i]);
    }
    let accOdd = odd.reduce((a, b) => a + b);
    let accEven = even.reduce((a, b) => a + b);
    if (accOdd > accEven) answer = accOdd;
    else answer = accEven;
    return answer;
}