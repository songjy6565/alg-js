function solution(a, b) {
    var months = [31,29,31,30,31,30,31,31,30,31,30,31];
    var days = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    var diff = 0;
    for (var i = 0; i < (a - 1); i++){
        diff += months[i];
    }
    diff += (b - 1);
    var answer = days[diff % 7];
    return answer;
}