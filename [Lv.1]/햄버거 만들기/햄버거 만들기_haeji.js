function solution(ingredient) {
    var answer = 0;
    let stack = [];
    
    for(i=0; i<ingredient.length; i++){
        stack.push(ingredient[i]);
        let length = stack.length;
        
        if((stack[length-1] == 1) && (stack[length-2] === 3) && (stack[length-3] === 2) && (stack[length-4] == 1 )){
            for(j=0; j<4; j++){
                stack.pop();
            }
            answer++;
        }
    }

    return answer;
}
