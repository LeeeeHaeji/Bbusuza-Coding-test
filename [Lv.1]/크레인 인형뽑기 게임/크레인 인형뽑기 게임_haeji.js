function solution(board, moves) {
    var answer = 0;
    let stack = [];
    
    for(i=0; i<moves.length; i++){
        for(j=0; j<board.length; j++){
            if(!!board[j][[moves[i]-1]]){
                // console.log(board[j]);
                // console.log(`j: ${j}`);
                // console.log(`moves[i]: ${moves[i]-1}`);
                // console.log(board[j][moves[i]-1]);

                stack.push(board[j][moves[i]-1]);
                board[j][moves[i]-1] = 0;
                // console.log(`stack: ${stack}`);
                // console.log('------------------------');
                
                if(stack[stack.length-1] === stack[stack.length-2]){
                    stack.pop();
                    stack.pop();
                    answer += 2;
                }
                break;
            }
        }
    }
    
    return answer;
}
