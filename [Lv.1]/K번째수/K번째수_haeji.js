function solution(array, commands) {
    var answer = [];
    let result = [];
    
    for(i=0; i<commands.length; i++){
        let new_array = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b) => a-b);
        answer.push(new_array[commands[i][2]-1])
    }
    
    return answer;
}
