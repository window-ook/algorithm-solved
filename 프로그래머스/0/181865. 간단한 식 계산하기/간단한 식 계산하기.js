function solution(binomial) {
    let elements = binomial.split(' ');
    let formula = elements.join('');
    let result = eval(formula);
    return result;
}