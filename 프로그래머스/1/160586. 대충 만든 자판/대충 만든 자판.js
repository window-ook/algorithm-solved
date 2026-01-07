function solution(keymap, targets) {
    let answer = []; // 최종합
    const minPress = new Map();
    // 1. keymap을 순회하며 각 문자의 최소 입력 횟수를 Map에 저장
    for (let i = 0; i < keymap.length; i++) {
        let key = keymap[i]
        for (let j = 0; j < key.length; j++) {
            let char = key[j];
            let pressCount = j + 1;
            if (!minPress.has(char) || minPress.get(char) > pressCount) {
                minPress.set(char, pressCount);
            }
        }
    }
    
    // 2. 각 target의 문자들에 대해 Map에서 값을 조회하여 합산
    // 3. 문자가 Map에 없으면 해당 target은 -1
    for (let i = 0; i < targets.length; i++) {
        let sum = 0;
        let target = targets[i];
        target = target.split('');
        for (let x of target) {
           if(!minPress.has(x)) {
               sum = -1;
               break;
           }
           sum = sum + minPress.get(x)
        }
        answer.push(sum);
    }
    return answer;
}