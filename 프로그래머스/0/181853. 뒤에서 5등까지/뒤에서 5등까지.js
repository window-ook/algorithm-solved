function solution(num_list) {
    let newArr = num_list.sort((a, b) => a - b);
    return newArr.slice(0, 5);
}