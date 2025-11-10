function solution(dots) {
    let answer = 0;
    
    const calculation = (a, b, c, d) => {
        let ab = (b[1] - a[1]) / (b[0] - a[0]);
        let cd = (d[1] - c[1]) / (d[0] - c[0]);
        
        if (ab === cd) answer++;
    }
    
    calculation(dots[0], dots[1], dots[2], dots[3]);
    calculation(dots[0], dots[2], dots[1], dots[3]);
    calculation(dots[0], dots[3], dots[1], dots[2]);

    return answer > 0 ? 1 : 0;
}