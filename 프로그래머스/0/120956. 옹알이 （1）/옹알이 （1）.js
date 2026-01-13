function solution(babbling) {
    let count = 0;
    
    for (let i = 0; i < babbling.length; i++) {
        let word = babbling[i]
        word = word.replaceAll('aya', ' ');
        word = word.replaceAll('ye', ' ');
        word = word.replaceAll('woo', ' ');
        word = word.replaceAll('ma', ' ');
        word = word.replaceAll(' ', '');
        
        if (word == '') count += 1;
    }
    
    return count;
}