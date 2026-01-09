function solution(word) {
    const vowels = [ 'A', 'E', 'I', 'O', 'U'];
    let answer = 0;
    let count = 0;

    function dfs(curr) {
        count++;
        if (curr === word) {
            answer = count;
            return;
        }
        
        if (curr.length < 5) {
            for (const v of vowels) {
                dfs(curr + v);
            }
        }
    }
    
    for (const v of vowels) {
        dfs(v);
        if (answer !== 0) break;
    }
    
    return answer;
}