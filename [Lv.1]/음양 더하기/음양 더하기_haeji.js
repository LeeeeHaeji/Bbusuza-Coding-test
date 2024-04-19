function solution(absolutes, signs) {
    var answer = 0;
    
    for(i=0; i<signs.length; i++){
        if(signs[i] === false){
            absolutes[i] = -absolutes[i];
        }
        
        answer += absolutes[i];
    }
    
    return answer;
}
