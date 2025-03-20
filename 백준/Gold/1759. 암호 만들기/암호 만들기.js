const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [l, c] = input[0].split(' ').map(Number);
const letters = input[1].split(' ').sort();
const vowels = ['a', 'e', 'i', 'o', 'u'];
let result = [];

function dfs(start, current, vowelCount, consonantCount) {
    if (current.length === l) {
        if (vowelCount >= 1 && consonantCount >= 2) {
            result.push(current.join(''));
        }
        return;
    }

    for (let i = start; i < c; i++) {
        let letter = letters[i];
        let isVowel = vowels.includes(letter);
        dfs(i + 1, [...current, letter], vowelCount + isVowel, consonantCount + !isVowel);
    }
}

dfs(0, [], 0, 0);
console.log(result.join('\n'));