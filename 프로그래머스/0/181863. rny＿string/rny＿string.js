function solution(rny_string) {
    let letters = rny_string.split('');
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === 'm') letters[i] = 'rn'; 
    }
    return letters.join('');
}