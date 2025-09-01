function solution(n_str) {
    let answer = '';
    let start = 0;
    for (let i = 0; i < n_str.length; i++) {
        if(n_str[i] !== '0') {
            start = i;
            break;
        }
    }
    answer = n_str.slice(start, n_str.length);
    return answer;
}