const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = parseInt(input[0]);
let grade;

if (num >= 90 && num <= 100) {
	grade = 'A'
} else if (num >= 80 && num <= 89) {
	grade = 'B'
} else if (num >= 70 && num <= 79) {
	grade = 'C'
} else if (num >= 60 && num <= 69) {
	grade = 'D'
} else {
	grade = 'F'
}

console.log(grade);