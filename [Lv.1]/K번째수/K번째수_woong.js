function solution(array, commands) {
    var answer = [];
    let temp = [];
    let sort = [];
    
    for(let i = 0; i < commands.length; i++){
        temp = array.slice(commands[i][0]-1,commands[i][1])
        console.log(temp)
        sort = temp.sort((a,b)=>a-b)
        answer.push(sort[commands[i][2]-1])
    }
    return answer
}
