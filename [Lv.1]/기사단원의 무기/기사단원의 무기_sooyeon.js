function solution(number, limit, power) {
    var answer = 0;
    let count = Array(number).fill(0);
    for(let i =1; i<=number; i++)
        {
            for(let j =1; j<=Math.sqrt(i); j++){
               if(i%j ==0){
                  if(Math.sqrt(i)==j){

                    ++count[i-1] }else{
                   count[i-1] = count[i-1]+2;
             }  }    
                   
                
                if(count[i-1]>limit)
                   {count[i-1] = power;
                   break;}
                }
            }
    answer = count.reduce((a,b)=>a+b)
    return answer;
}
