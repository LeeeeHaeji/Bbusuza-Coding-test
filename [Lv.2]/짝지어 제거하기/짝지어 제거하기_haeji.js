function solution(s)
{
    var answer = 0;
    let stack = [];
    
    for(i of s){
        stack.push(i);
        if(stack[stack.length-1] === stack[stack.length-2]){
            stack.pop();
            stack.pop();
        }
    }
    
    stack.length === 0 ? answer = 1 : answer = 0;
    
    return answer;
}
