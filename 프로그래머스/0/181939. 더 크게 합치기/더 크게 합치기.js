function solution(a, b) {
    let asc = String(a) + String(b);
    let desc = String(b) + String(a);
    console.log(Number(asc), Number(desc));
    if (Number(asc) >= Number(desc)) return Number(asc);
    else if (Number(desc) > Number(asc)) return Number(desc);
}