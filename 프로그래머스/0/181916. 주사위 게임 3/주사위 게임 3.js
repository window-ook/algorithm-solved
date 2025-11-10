function solution(a, b, c, d) {
    const dice = [a,b,c,d];
    
    const countMap = new Map();
    
    for (const num of dice) countMap.set(num, (countMap.get(num) || 0) + 1);
    
    // count가 높은 순으로 정렬
    const entries = [...countMap.entries()].sort((a, b) => b[1] - a[1]);
    const values = entries.map(([num, count]) => num);
    const counts = entries.map(([num, count]) => count);
    
    if (values.length === 1) return values[0] * 1111;
    if (values.length === 2 && counts[0] === 3) return (10 * values[0] + values[1]) ** 2;
    if (values.length === 2) return (values[0] + values[1]) * Math.abs(values[0] - values[1]);
    if (values.length === 3) return values[1] * values[2];
    if (values.length === 4) return Math.min(...values);
}