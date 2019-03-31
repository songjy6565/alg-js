function solution(s) {
    if (parseInt(s) == s && (s.length === 4 || s.length === 6)) return true;
    return false;
}