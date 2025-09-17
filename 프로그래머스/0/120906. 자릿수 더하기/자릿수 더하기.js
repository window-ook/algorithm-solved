function solution(n) {
    let str = n.toString();
    let nums = str.split('');
    let total = 0;
    for (let i = 0; i<nums.length; i++) {
        total += parseInt(nums[i])
    }
    return total
}