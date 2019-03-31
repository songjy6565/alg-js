function solution(d, budget) {
    d.sort((a,b) => {return a-b;});
    for (var i=0; i< d.length; i++ ){
        if(d[i] > budget)return i;
        budget -= d[i];
    }
    return d.length;
}