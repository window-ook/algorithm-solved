function solution(my_string) {
    let splitted = my_string.split(" ").filter(word => word !== "");
    return splitted;
}