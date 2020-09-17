function findDup( arr ){
    arr.sort();
    for(let i = 1;;i++){
        if(arr[i]===arr[i-1])
        return arr[i];
    }
}