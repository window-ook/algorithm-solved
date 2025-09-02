// sos, o -> sOs
function solution(my_string, alp) {
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === alp) {
           my_string = my_string.slice(0, i) + my_string[i].toUpperCase() + my_string.slice(i + 1, my_string.length);
        }
    }
    return my_string;
}