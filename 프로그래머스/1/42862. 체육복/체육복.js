function solution(n, lost, reserve) {
    // 여벌을 가져왔는데 도난당한 케이스 예외처리
    const realLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    const realReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);
    
    return n - realLost.filter(l => {
        const lender = realReserve.find(r => Math.abs(r - l) === 1); // 앞 번호부터 빌려주기
        if (lender !== undefined) {
            realReserve.splice(realReserve.indexOf(lender), 1);
            return false;
        }
        return true;
    }).length;
}