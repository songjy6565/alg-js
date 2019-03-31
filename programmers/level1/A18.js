function solution(s, n) {
    var answer = s.split('');
    var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (var i =0; i< answer.length; i++){
        if(lower.indexOf(answer[i]) != -1){
            answer[i] = lower[(lower.indexOf(answer[i])+n)%26];
        }
        else if(upper.indexOf(answer[i]) != -1){
            answer[i] = upper[(upper.indexOf(answer[i])+n)%26];
        }
    }
    
    return answer.join('');
}