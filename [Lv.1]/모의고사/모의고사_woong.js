function solution(answers) {
    var answer = [];
    const studentA = [1,2,3,4,5];
    const studentB = [2,1,2,3,2,4,2,5];
    const studentC = [3,3,1,1,2,2,4,4,5,5];
    const score = [0,0,0];
    
    for(let i = 0; i < answers.length; i++){
        if(studentA[i % studentA.length] === answers[i]){
            score[0]++;
        }
        if(studentB[i % studentB.length] === answers[i]){
            score[1]++;
        }
        if(studentC[i % studentC.length] === answers[i]){
            score[2]++;
        }
    }
    const highScore = Math.max(...score);
    
    score.map((v,i)=>{
        if(score[i] === highScore){
            answer.push(i+1);
        }
    })
    
    
    return answer;
}
