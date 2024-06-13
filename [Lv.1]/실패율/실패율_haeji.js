function solution(N, stages) {
    var answer = [];
    let total_num = stages.length;
    let score = [];
    let fail_num = 0;
    let max = 0;
    
    for(i=1; i<=N; i++){
        fail_num = stages.filter(v => v === i).length;
        if(total_num === 0){
            score.push(0)
        } else {
            score.push(fail_num / total_num);
            total_num -= fail_num;
        }
    }

    for(i=0; i<score.length; i++){
        max = Math.max(...score)
        for(j=0; j<score.length; j++){
            if(max === score[j]){
                answer.push(j+1);
                score.splice(j, 1, -1);
                break;
            }
        }
    }

    return answer;
}
