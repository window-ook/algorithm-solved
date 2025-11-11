function solution(s) {
    let splitted = s.split(' '); // try, hello, world
    
    const transitioner = (word) => {
        let res = '';
        for (let i = 0; i < word.length; i++) res += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
        return res;
    }
    
    return splitted.map(transitioner).join(' ');
 }