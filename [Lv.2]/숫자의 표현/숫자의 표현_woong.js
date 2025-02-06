function solution(n) {
    var answer = 0;
    let count = 0;
    for(let i = 0; i <= n; i++){
        for(let j = i + 1; j <= n; j++){
            count += j
            
            if(count > n){
                count = 0;
                break;
            }
            
            if(count == n){
                count = 0;
                answer += 1;
                break;
            }
        }
    }
    return answer;
}
// 효율성 테스트에서 가끔 막히지만 여러번 제출하면 통과되는 코드입니다
