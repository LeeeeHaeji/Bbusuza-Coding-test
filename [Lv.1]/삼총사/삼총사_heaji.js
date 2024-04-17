function solution(number) {
    var answer = 0;
    let sum = 0;
    let cnt = 0;
    
    for(i=0; i<number.length; i++){
        let num = number[i];
        for(j=i+1; j<number.length; j++){
            for(k=j+1; k<number.length; k++){
                sum = num + number[j] + number[k];
                if(sum === 0){
                    cnt++;
                }
            }
           
        }
    }

    answer = cnt;
    return answer;
}
