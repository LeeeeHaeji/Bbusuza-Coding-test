function solution(n, lost, reserve) {
    var answer = 0;
    lost.sort((a,b) => a-b)
    reserve.sort((a,b) => a-b)

    for(i=0; i<reserve.length; i++){
        if(lost.includes(reserve[i])){
            let idx = lost.indexOf(reserve[i])
            lost.splice(idx,1);
            reserve.splice(i,1);
            i = -1;
            // console.log(`reserve: ${reserve}`)
            // console.log(`lost: ${lost}`)
            // console.log('--------------------------')
        }
    }
    
    for(i=0; i<reserve.length; i++){
        for(j=0; j<lost.length; j++){

            if((reserve[i]+1) === (lost[j])){
                lost.splice(j,1);
                reserve.splice(i,1);
                i = -1;
            } else if((reserve[i]-1) === lost[j]){
                lost.splice(j,1);
                reserve.splice(i,1);
                i = -1;
            }
            // console.log(`lost: ${lost}`)
        }
    }

    return n-lost.length;
}
