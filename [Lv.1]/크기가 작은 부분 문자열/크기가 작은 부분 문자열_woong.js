function solution(t, p) {
    var answer = 0;
    let arr = [];
    for(let i = 0; i < t.length; i++){
//         t의 첫 인덱스(i)부터 p의 길이만큼 잘라서 p와 비교 And t의 첫 인덱스부터 p의 길이만큼 잘랐을 때 p와 길이가 같은지
        if(t.slice(i,i + p.length) <= p && t.slice(i,i + p.length).length == p.length){
           answer++;
           console.log(t.slice(i,i + p.length))
         }
    }
    
    
   
    return answer;
}