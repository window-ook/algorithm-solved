function solution(num_list) {
    let oddNum = 0;
    let evenNum = 0;
    let answer = [];
    
    for (let i = 0; i<num_list.length; i++) {
        if (num_list[i] % 2 === 1) {
            oddNum += 1;
        } else {
            evenNum += 1;
        }
        
    }
    answer.push(evenNum);
    answer.push(oddNum); 
    return answer;
}