function solution(my_string, index_list) {
    let answer = '';
    let str = [];
    for (let i = 0; i < index_list.length; i++) str.push(my_string[index_list[i]]);
    answer = str.join('');
    return answer;
}