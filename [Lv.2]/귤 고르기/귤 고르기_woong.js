function solution(k, tangerine) {
    var answer = 0;
    let obj = {};
    let arr = [];
    let sum = 0;
    
    tangerine.map((v)=>{
        if(obj[v] >= 1){
            obj[v] = obj[v] + 1
        }else{
            obj[v] = 1
        }
        // console.log(obj)
    })
    
    arr = Object.values(obj)
    arr.sort((a,b)=>b-a)
    // console.log(arr)
    
    for(let i = 0; i < arr.length; i++){
        // console.log(i)
        answer += 1
        sum += arr[i]
        if(sum >= k){
            return answer
        }
    }
    
    return answer;
}
