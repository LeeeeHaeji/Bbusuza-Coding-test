function solution(ingredient) {
    var answer = 0;
    let arr = [];
    
    ingredient.forEach((v)=>{
        arr.push(v);
        if (arr.slice(-4).map(String).join() === '1,2,3,1') {
            ++answer;
            arr.splice(-4);
        }
    })
    return answer;
    
}
