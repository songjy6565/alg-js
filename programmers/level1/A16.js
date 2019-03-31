function solution(n) {
    var answer = '';
    var div = parseInt(n / 2);
    var rest = n % 2;
    for (var i = 0; i< div; i++){
        answer += '수박';
    }
    if(rest === 1)answer += '수';
    return answer;
}