function solution(num_list) {
  let multi = num_list.reduce((a, b) => a * b);
  let sum = num_list.reduce((a, b) => a + b);
  let sumSquared = sum ** 2;

  return multi < sumSquared ? 1 : 0;
}