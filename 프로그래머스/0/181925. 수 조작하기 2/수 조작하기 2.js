function solution(numLog) {
    let answer = [];
    for (let i = 1; i < numLog.length; i++) {
        let evidence = numLog[i] - numLog[i-1];
        if (evidence === 1) answer.push('w');
        else if (evidence === 10) answer.push('d');
        else if (evidence === -1) answer.push('s');
        else if (evidence === -10) answer.push('a');
    }
    return answer.join('');
}