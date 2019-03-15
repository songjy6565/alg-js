function solution(participant, completion) {
    var sum = new Array();
    for (var i = 0; i < 20; i++){
        sum[i] = 0;
    }
    for (var j = 0; j < completion.length; j++){
        myHash(participant[j],sum);
        myHash2(completion[j],sum);
    }
    myHash(participant[participant.length-1],sum);
    var answer = myHash3(sum);
    return answer;
}

function myHash(target, sum){
    for (var j = 0; j < target.length; j++){
        switch(target.charAt(j)){
            case 'a':
                sum[j] += 1;
                break;
            case 'b':
                sum[j] += 2;
                break;
            case 'c':
                sum[j] += 3;
                break;
            case 'd':
                sum[j] += 4;
                break;
            case 'e':
                sum[j] += 5
                break;
            case 'f':
                sum[j] += 6
                break;
            case 'g':
                sum[j] += 7
                break;
            case 'h':
                sum[j] += 8
                break;
            case 'i':
                sum[j] += 9
                break;
            case 'j':
                sum[j] += 10
                break;
            case 'k':
                sum[j] += 11
                break;
            case 'l':
                sum[j] += 12;
                break;
            case 'm':
                sum[j] += 13;
                break;
            case 'n':
                sum[j] += 14;
                break;
            case 'o':
                sum[j] += 15;
                break;
            case 'p':
                sum[j] += 16;
                break;
            case 'q':
                sum[j] += 17;
                break;
            case 'r':
                sum[j] += 18;
                break;
            case 's':
                sum[j] += 19;
                break;
            case 't':
                sum[j] += 20;
                break;
            case 'u':
                sum[j] += 21;
                break;
            case 'v':
                sum[j] += 22;
                break;
            case 'w':
                sum[j] += 23;
                break;
            case 'y':
                sum[j] += 24;
                break;
            case 'x':
                sum[j] += 25;
                break;
            case 'z':
                sum[j] += 26;
                break;
        }
    }
}

function myHash2(target, sum){
    for (var j = 0; j < target.length; j++){
        switch(target.charAt(j)){
            case 'a':
                sum[j] -= 1;
                break;
            case 'b':
                sum[j] -= 2;
                break;
            case 'c':
                sum[j] -= 3;
                break;
            case 'd':
                sum[j] -= 4;
                break;
            case 'e':
                sum[j] -= 5
                break;
            case 'f':
                sum[j] -= 6
                break;
            case 'g':
                sum[j] -= 7
                break;
            case 'h':
                sum[j] -= 8
                break;
            case 'i':
                sum[j] -= 9
                break;
            case 'j':
                sum[j] -= 10
                break;
            case 'k':
                sum[j] -= 11
                break;
            case 'l':
                sum[j] -= 12;
                break;
            case 'm':
                sum[j] -= 13;
                break;
            case 'n':
                sum[j] -= 14;
                break;
            case 'o':
                sum[j] -= 15;
                break;
            case 'p':
                sum[j] -= 16;
                break;
            case 'q':
                sum[j] -= 17;
                break;
            case 'r':
                sum[j] -= 18;
                break;
            case 's':
                sum[j] -= 19;
                break;
            case 't':
                sum[j] -= 20;
                break;
            case 'u':
                sum[j] -= 21;
                break;
            case 'v':
                sum[j] -= 22;
                break;
            case 'w':
                sum[j] -= 23;
                break;
            case 'y':
                sum[j] -= 24;
                break;
            case 'x':
                sum[j] -= 25;
                break;
            case 'z':
                sum[j] -= 26;
                break;
        }
    }
}
    
function myHash3(sum){
    var answer = '';
    for (var j = 0; j < 20; j++){
        switch(sum[j]){
            case 0:
                break;
            case 1:
                answer += 'a';
                break;
            case 2:
                answer += 'b';
                break;
            case 3:
                answer += 'c';
                break;
            case 4:
                answer += 'd';
                break;
            case 5:
                answer += 'e';
                break;
            case 6:
                answer += 'f';
                break;
            case 7:
                answer += 'g';
                break;
            case 8:
                answer += 'h';
                break;
            case 9:
                answer += 'i';
                break;
            case 10:
                answer += 'j';
                break;
            case 11:
                answer += 'k';
                break;
            case 12:
                answer += 'l';
                break;
            case 13:
                answer += 'm';
                break;
            case 14:
                answer += 'n';
                break;
            case 15:
                answer += 'o';
                break;
            case 16:
                answer += 'p';
                break;
            case 17:
                answer += 'q';
                break;
            case 18:
                answer += 'r';
                break;
            case 19:
                answer += 's';
                break;
            case 20:
                answer += 't';
                break;
            case 21:
                answer += 'u';
                break;
            case 22:
                answer += 'v';
                break;
            case 23:
                answer += 'w';
                break;
            case 24:
                answer += 'y';
                break;
            case 25:
                answer += 'x';
                break;
            case 26:
                answer += 'z';
                break;
        }
    }
    return answer;
}