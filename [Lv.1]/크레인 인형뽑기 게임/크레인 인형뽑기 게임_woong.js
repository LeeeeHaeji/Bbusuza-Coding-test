function solution(board, moves) {
    var answer = 0;
    let stack = [];
    moves = moves.map((v)=>v-1)
    // console.log(moves)
  // [ 0, 0, 0, 0, 0 ],
  // [ 0, 0, 1, 0, 3 ],
  // [ 0, 2, 5, 0, 1 ],
  // [ 4, 2, 4, 4, 2 ],
  // [ 3, 5, 1, 3, 1 ]
    // console.log(board[moves])
    for(let i = 0; i <moves.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(!board[j][moves[i]]){
                continue
            }
            if(board[j][moves[i]]){
                stack.push(board[j][moves[i]])
                board[j][moves[i]] = 0
                // console.log(board)
                if(stack[stack.length-2] == stack[stack.length-1]){
                    answer += 2
                    stack.pop()
                    stack.pop()
                }
                break;
            }
        }
    }
    // console.log(stack)

    return answer;
}
