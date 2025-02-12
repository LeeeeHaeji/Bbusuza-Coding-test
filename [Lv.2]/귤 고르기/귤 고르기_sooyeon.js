function solution(k, tangerine) {
    var answer = 0;
    let obj = {};
    let sorted = []
    let sum = 0;
    
    tangerine.map((v)=>{
        if(obj.hasOwnProperty(v)){
            obj[v] = obj[v] + 1;
        } else {
            obj[v] = 1;
        }
    })
    
    sorted = Object.values(obj).sort((a,b) => b - a);
    
    for(let i = 0; i<sorted.length; i++)
    {
        answer += 1;
        sum += sorted[i]
        if(sum>=k) break;
    }
    
    return answer;
}
