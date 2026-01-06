// reserve에서 lost와 일치하는 값을 제외해서 순수 도난자, 순수 여벌 소유자 필터링
// 순수 도난자에서 구제받을 수 있는 사람을 제외하고 숫자를 구하여 n에서 뺌
function solution(n, lost, reserve) {
    let pureLost = lost.filter(v => !reserve.includes(v)).sort((a, b) => a - b); // 순수 도난자
    let pureReserve = reserve.filter(v => !lost.includes(v)).sort((a, b) => a - b); // 순수 여벌 소유자
    // 모든 학생 - 순수 도난자 수
    return n - pureLost.filter(l => {
        const lender = pureReserve.find(r => Math.abs(r - l) === 1);
        if (lender !== undefined) {
            pureReserve.splice(pureReserve.indexOf(lender), 1); // 제거
            return false; // 순수 도난자 미포함
        }
        return true; // 순수 도난자 포함
    }).length;
}