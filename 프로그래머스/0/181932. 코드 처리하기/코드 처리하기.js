// mode 0 i가 짝수번인, mode 1 i가 홀수번인 
function solution(code) {
    let mode = 0;
    let ret = '';
    
    for (let i = 0; i < code.length; i++) {
        if (mode === 0) {
            if (code[i] === '1') {
                mode = 1;
                continue;
            }
            if (i % 2 === 0) ret += code[i];
        }
        
        else if (mode === 1) {
            if (code[i] === '1') {
                mode = 0;
                continue;
            }
            if (i % 2 === 1) ret += code[i];
        }
    }
    
    return ret.length > 0 ? ret : 'EMPTY';
}