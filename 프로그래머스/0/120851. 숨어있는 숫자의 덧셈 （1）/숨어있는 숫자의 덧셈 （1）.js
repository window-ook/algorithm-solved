function solution(my_string) {
    let words = my_string.split('');
    let answer = 0;
    for(let i = 0; i<words.length; i++) {
        if(parseInt(words[i]) === parseInt(words[i])) {
            answer += parseInt(words[i])
        }
    }
    return answer;
}