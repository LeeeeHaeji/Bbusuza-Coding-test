function solution(dartResult) {
    var answer = 0;
    let cal = [];
    
    dartResult = dartResult.match(/\d+\D+/g);
    
    for(i=0; i<dartResult.length; i++){
        if(dartResult[i].includes('S')){
            cal.push(parseInt(dartResult[i]));
        } else if(dartResult[i].includes('D')){
            cal.push(parseInt(dartResult[i])**2);
        } else if(dartResult[i].includes('T')){
            cal.push(parseInt(dartResult[i])**3);
        }
        
        if(dartResult[i].includes('*')){
            cal[i] = cal[i]*2;
            if(i !== 0){
                cal[i-1] = cal[i-1]*2;
            }
        } else if(dartResult[i].includes('#')){
            cal[i] = cal[i]*(-1);
        }
    }

    cal.map(v => {
        answer += v
    })
    
    return answer;
}
