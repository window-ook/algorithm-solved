// i - 1과 같으면 answers에 추가하지 않는

function solution(arr) {
    let answers = [arr[0]];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) continue;
        answers.push(arr[i]);
    }
    
    return answers;
}