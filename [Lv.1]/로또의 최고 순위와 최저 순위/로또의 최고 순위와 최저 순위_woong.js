function solution(lottos, win_nums) {
    var answer = [];
    let num = 0;
    let num2 = 0;
    
    for(let i = 0 ; i < lottos.length; i++){
        if(win_nums.includes(lottos[i])){
           num2 += 1
          }
        if(lottos[i] === 0){
            num2 += 1
        }
    }
    
    for(let i = 0 ; i < lottos.length; i++){
        if(win_nums.includes(lottos[i])){
           num += 1
          }
    }
  
    switch(num2){
        case 2:
             answer.push(5);
            break;
        case 3:
             answer.push(4);
            break;
        case 4:
             answer.push(3);
            break;
        case 5:
             answer.push(2);
            break;
        case 6:
             answer.push(1);
            break;
        default:
             answer.push(6);
            break;}
    
    switch(num){
        case 2:
             answer.push(5);
            break;
        case 3:
             answer.push(4);
            break;
        case 4:
             answer.push(3);
            break;
        case 5:
             answer.push(2);
            break;
        case 6:
             answer.push(1);
            break;
        default:
             answer.push(6);
            break;}
            
    return answer;
}
