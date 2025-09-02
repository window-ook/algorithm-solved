function solution(arr1, arr2) {
    if (arr1.length > arr2.length) return 1;
    if (arr1.length < arr2.length) return -1;
    if (arr1.length === arr2.length) {
        let acc1 = arr1.reduce((a, b) => a + b);
        let acc2 = arr2.reduce((a, b) => a + b);
        if (acc1 > acc2) return 1;
        else if (acc1 < acc2) return -1;
        else return 0;
    }
}