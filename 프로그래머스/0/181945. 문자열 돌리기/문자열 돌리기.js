const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    rotate(str);
});

function rotate(str) {
    let arr = str.split('');
    for (let x of arr) console.log(x);
}