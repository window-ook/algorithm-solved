function solution(my_string) {
    let answer = my_string
    const mom = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i<mom.length; i++) {
        answer = answer.replaceAll(mom[i], '')
    }
    return answer
}