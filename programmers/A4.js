function solution(n, lost, reserve) {
    var answer = 0;
    var matched = -2;
    for (var i = 0; i < lost.length; i ++){
        var target = lost[i];
        if(reserve.indexOf(target-1) != -1 && reserve.indexOf(target-1) != matched )answer += 1;
        else if(reserve.indexOf(target+1) != -1){
            answer+= 1;
            matched = reserve.indexOf(target+1);
        }
    }
    answer += (n - lost.length);
    return answer;
}

console.log(solution(3,[3],[1]));