function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var count = [0, 0, 0];
    for (var i=0; i< answers.length; i ++){
        if(a1[i%5] === answers[i])count[0] += 1;
        if(a2[i%8] === answers[i])count[1] += 1;
        if(a3[i%10] === answers[i])count[2] += 1;
    }
    if(count[0] > count[1] && count[0] > count[2])answer[0] = 1;
    else if(count[1] > count[0] && count[1] > count[2])answer[0] = 2;
    else if(count[2] > count[0] && count[2] > count[1])answer[0] = 3;
    else if(count[0] > count[2] && count[1] === count[0])answer = [1, 2];
    else if(count[0] > count[1] && count[2] === count[0])answer = [1, 3];
    else if(count[1] > count[0] && count[1] === count[2])answer = [2, 3];
    else answer = [1, 2, 3];
    return answer;
}