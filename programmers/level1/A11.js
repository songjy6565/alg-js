function solution(s){
    var count = 0;
    for (var i = 0; i < s.length; i++){
        if (s[i] === 'p' || s[i] === 'P')count += 1;
        if (s[i] === 'y' || s[i] === 'Y')count -= 1;
    }
    if (count == 0)return true;
    return false;
}