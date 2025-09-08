function solution(myString, pat) {
    let lowerMystr = myString.toLowerCase();
    let lowerPat = pat.toLowerCase();
    if (lowerMystr.includes(lowerPat)) return 1;
    else return 0;
}