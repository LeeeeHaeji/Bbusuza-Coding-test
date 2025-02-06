function solution(arr) {
    if(arr.length === 1){
        return [-1]
    }else {
        let min = Math.min(...arr);
        let pos = arr.indexOf(min);
    
        // console.log(min)
        // console.log(arr.indexOf(min))
        
        arr.splice(pos,1)
        return arr;
    }
}
