function solution(arr, k) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Math.floor(k/2) !== k/2) newArr.push(arr[i] * k);
        else newArr.push(arr[i] + k);
    }
    return newArr;
}