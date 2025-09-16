function solution(date1, date2) {
    var answer = 0;
    if (new Date(date1[0], date1[1], date1[2]) < new Date(date2[0], date2[1], date2[2])) answer = 1;
    return answer;
}