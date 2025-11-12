// 1번: 12345
// 2번: 21232425
// 3번: 3311224455
// answers를 크게 한 번 돌고, 내부에서 수포자들 패턴 몫 확인으로 비교

function solution(answers) {
    let scores = [0, 0, 0];
    
    const pattern1 = [1,2,3,4,5];
    const pattern2 = [2,1,2,3,2,4,2,5];
    const pattern3 = [3,3,1,1,2,2,4,4,5,5];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === pattern1[i % pattern1.length]) scores[0]++;
        if (answers[i] === pattern2[i % pattern2.length]) scores[1]++;
        if (answers[i] === pattern3[i % pattern3.length]) scores[2]++;
    }
    
    const maxScore = Math.max(...scores);
    
    let result = [];
    
    for (let i = 0; i < scores.length; i++) if (scores[i] === maxScore) result.push(i + 1);
    
    return result;
}