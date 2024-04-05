function solution(food) {
    var answer = '';
    // i번 음식의 수가 food[i]의 값
    for(i=0; i<food.length; i++){
        if(food[i] !== 1){
            for(j=0; j<(food[i]-1)/2; j++){
                answer += i;
            }
        } 
    }
    answer += '0';
    for(i=food.length; i>=0; i--){
        if(food[i] !== 1){
            for(j=0; j<(food[i]-1)/2; j++){
                answer += i;
            }
        } 
    }
    
    return answer;
}
