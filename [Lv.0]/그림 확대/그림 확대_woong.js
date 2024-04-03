function solution(picture, k) {
    var answer = [];
    picture.map((v)=>{
        const arr = [...v].map((v)=> v.repeat(k)).join("")
        for(let i = 0; i < k; i++){
        answer.push(arr)    
        }
    })
    return answer;
}
