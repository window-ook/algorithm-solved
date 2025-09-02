// 사전 순으로 뒤에있을수록 인덱스가 더 큼. 소문자가 대문자 뒤임
function solution(myString) {
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] < 'l') myString = myString.slice(0, i) + 'l' + myString.slice(i + 1, myString.length);
    }
    return myString;
}