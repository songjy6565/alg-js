function solution(array, commands) {
    var answer = [];
    for (var i = 0; i < commands.length; i++){
        var c = commands[i];
        answer[i] = partial(array, c[0],c[1],c[2]);
    }
    return answer;
}

function partial(arr,i,j,k){
    var partial = arr.slice(i-1,j);
    return quicksort(partial)[k-1];
}

function quicksort(partition){
    if (partition.length <= 1)return partition;
    var pivot = partition[0];
    var left = [];
    var right = [];
    var center = [];
    for(var i=1; i< partition.length; i++){
        if(partition[i] < pivot)left.push(partition[i]);
        else if(partition[i] > pivot)right.push(partition[i]);
        else center.push(partition[i]);
    }
    center.push(pivot);
    return quicksort(left).concat(center).concat(quicksort(right));
}