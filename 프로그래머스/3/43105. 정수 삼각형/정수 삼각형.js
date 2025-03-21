function solution(triangle) {
    const n = triangle.length; // 5
    // 0번째 줄 1개, 1번째 줄 2개, 2번째 줄 3개, 3번째 줄 4개, 4번째 줄 5개
    let dp = Array.from({ length : n } , (_, i) => Array(i + 1).fill(0));
    dp[0][0] = triangle[0][0];
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            let left = j > 0 ? dp[i - 1][j - 1] : 0;
            let right = j < i ? dp[i - 1][j] : 0;
            dp[i][j] = triangle[i][j] + Math.max(left, right);
        }
    }
    
    let result = Math.max(...dp[n - 1]);
    return result;
}