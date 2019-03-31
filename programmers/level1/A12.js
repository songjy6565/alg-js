function solution(s) {
    var arr = s.split('');
    arr.sort((a,b) => {
        if (a > b) return -1;
        else return 1;
    });
    var answer ='';
    for (var i =0; i < arr.length; i++){
        answer += arr[i];
    }
    return answer;
}