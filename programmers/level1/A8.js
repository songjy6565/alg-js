function solution(arr, divisor) {
    var answer = arr.filter(function (e) {
        return e % divisor === 0;
    })
    answer.sort(function (a, b) {
        return a-b;
    });
    if (answer.length === 0)return [-1];
    else return answer;
}