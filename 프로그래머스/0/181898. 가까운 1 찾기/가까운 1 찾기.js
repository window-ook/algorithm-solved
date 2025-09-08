function solution(arr, idx) {
    let num = -1;
    for (let i = idx; i < arr.length; i++) {
        if(arr[i] === 1) {
            num = i;
            break;
        }
    }
    return num;
}