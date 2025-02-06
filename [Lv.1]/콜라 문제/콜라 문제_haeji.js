function solution(a, b, n) {
    var answer = 0; 
    let bottle = n;
    let return_cnt = 0;
    
    while(bottle >= a){
        return_cnt = parseInt(bottle/a);
    
        bottle = bottle - return_cnt*a + return_cnt*b;
        answer += return_cnt*b;
        
        // console.log(`return_cnt: ${return_cnt}`)
        // console.log(`bottle: ${bottle}`)
    }
    
    return answer
}
