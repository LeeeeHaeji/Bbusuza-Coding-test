function solution(people, limit) {
    var answer = 0;
    people.sort((a,b) => a-b)
    
    for(i=0; i<people.length; i++){
        let sum = people[i] + people[people.length-1];
        if(sum > limit){
            answer++;
            people.pop();
            i--;
        } else {
            answer++;
            people.pop();
            people.shift();
            i--;
        }
    }
    
    return answer;
}
