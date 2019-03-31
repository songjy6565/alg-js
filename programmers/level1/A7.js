function solution(arr)
{
    var answer = [];
    var target = -1;
    for (var i =0; i < arr.length; i++){
        if (target != arr[i]){
            target = arr[i];
            answer.push(target);
        }
    }
    
    return answer;
}