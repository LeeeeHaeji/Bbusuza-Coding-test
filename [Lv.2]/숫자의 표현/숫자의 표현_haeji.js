function solution(n) {  
    let answer = 1;
    let cnt = 1;
    
    while(cnt < n/2){
        let sum = 0;
        for(i=cnt; i<= n; i++){
            sum += i;
            if(sum >= n){
                cnt++;
                if(sum === n){
                    answer++;
                    break;
                }
                break;
            }
        }
    }

    return answer;
}
