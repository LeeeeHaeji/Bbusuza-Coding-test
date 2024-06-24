function solution(s){
    let arr = [];
    for(let value of s){
        arr.push(value)
        if(arr[arr.length-2] == arr[arr.length-1]){
            arr.pop();
            arr.pop();
        }
    }
    
    return arr.length?0:1;
}
