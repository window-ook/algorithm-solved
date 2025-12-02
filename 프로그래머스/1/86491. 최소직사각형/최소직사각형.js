// 큰 값들 중 최댓값 x 작은 값들 중 최댓값
function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    for (let size of sizes) size.sort((a, b) => b - a); // 내림차순 정렬
    for (let i = 0; i < sizes.length; i++) {
        maxW = Math.max(maxW, sizes[i][0]); // 큰 값들 중 최댓값
        maxH = Math.max(maxH, sizes[i][1]); // 작은 값들 중 최댓값
    }
    let answer = Math.abs(maxW * maxH);
    return answer;
}