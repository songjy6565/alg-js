function solution(s) {
    var answer = s.split(' ');
    for (var i=0; i< answer.length; i++){
        var change = '';
        for (var j=0; j < answer[i].length; j++){
            if(j % 2 ==0)change += answer[i].charAt(j).toUpperCase();
            else change += answer[i].charAt(j).toLowerCase();
        }
        answer[i] = change;
    }
    return answer.join(' ');
}