function solution(participant, completion) {
    var answer = '';
    participant.sort();
    completion.sort();
    
    for(i=0; i<participant.length; i++){
        if(completion[i] !== participant[i]){
            answer += participant[i];
            break;
        }
    }
    
    return answer;
}
