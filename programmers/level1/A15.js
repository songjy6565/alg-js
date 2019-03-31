function solution(n) {
    var prime = [];
    for (var i = 2; i <= n; i++){
        if (IsPrime(i, prime))prime.push(i);
    }
    return prime.length;
}

function IsPrime(n, prime){
    for (var i = 0; i < prime.length; i++){
        if (n%prime[i] == 0)return false;
        if (Math.sqrt(n) < prime[i]) return true;
    }
    return true;
}