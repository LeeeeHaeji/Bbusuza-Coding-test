function solution(food) {
var answer = [];
let len = food.length - 1;
answer.push(0);
    
for(let i = len;i>0;i--){
    if(food[i]===1){continue}
    if(food[i]%2!==0){food[i] = food[i] -1 }
    if(food[i]%2===0){
  for(let j = food[i]/2 ; j>0 ;j--){
      answer.push(i);
      answer.unshift(i);
 }}
}
    
    return answer.join("")
    
}