function solution(arr, query) {
    
  let answer = arr;

  query.map((v,i)=>{
      if(i % 2 === 0){
          answer = answer.slice(0, v+1);
      }
      if(i % 2 === 1){
          answer = answer.slice(v);
      }
  })
  
  return answer
}