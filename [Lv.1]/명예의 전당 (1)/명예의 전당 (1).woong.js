function solution(k, score) {
    var answer = [];
    let newArr = [];
    for(let i = 0; i <score.length; i++){
        newArr.push(score[i])
         newArr.sort((a,b)=>b-a);
        if(newArr.length<=k){
            answer.push(Math.min(...newArr))   
        }
        if(newArr.length > k){
            newArr.pop()
            answer.push(Math.min(...newArr))
        }
    }
    return answer
}






function solution(k, score) {
  var answer = [];
  let newArr = [];
  for (let i = 0; i < score.length; i++) {
    newArr.push(score[i]);
    newArr.sort((a, b) => b - a);
    console.log(`i = ${i} newArr = ${newArr}`);
    if (newArr.length <= k) {
      console.log(`newArr 배열의 가장 작은 수 : ${Math.min(...newArr)}`);
      answer.push(Math.min(...newArr));
      console.log(`(newArr.length <= k) answer = ${answer}`);
    }
    if (newArr.length > k) {
      console.log(`newArr push 전 ${newArr}`);
      newArr.pop();
      console.log(`newArr push 후 ${newArr}`);
      answer.push(Math.min(...newArr));
      console.log(`(newArr.length > k) answer = ${answer}`);
    }
  }
  return answer;
}
console.log(solution(k, arr));
