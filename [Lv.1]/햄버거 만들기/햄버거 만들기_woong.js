/ 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.5MB)
// 테스트 3 〉	통과 (7920.65ms, 85.9MB)
// 테스트 4 〉	실패 (시간 초과)
// 테스트 5 〉	실패 (시간 초과)
// 테스트 6 〉	실패 (시간 초과)
// 테스트 7 〉	실패 (시간 초과)
// 테스트 8 〉	실패 (시간 초과)
// 테스트 9 〉	실패 (시간 초과)
// 테스트 10 〉	통과 (6.48ms, 37.2MB)
// 테스트 11 〉	통과 (5228.44ms, 86.7MB)
// 테스트 12 〉	실패 (시간 초과)
// 테스트 13 〉	통과 (0.05ms, 33.5MB)
// 테스트 14 〉	통과 (0.06ms, 33.5MB)
// 테스트 15 〉	통과 (0.07ms, 33.5MB)
// 테스트 16 〉	통과 (0.07ms, 33.5MB)
// 테스트 17 〉	통과 (0.05ms, 33.5MB)
// 테스트 18 〉	통과 (0.17ms, 33.4MB)
// function solution(ingredient) {
//     var answer = 0;
//     let stack = [];
//     ingredient.map((v,i)=>{
//         stack.push(v);
//         if(stack.slice(-4).join("") == 1231){
//             answer += 1;
//             stack = stack.slice(0,-4)
//         }
//     })
    
//     return answer;
// }

function solution(ingredient) {
    var answer = 0;
    let stack = [];
    ingredient.map((v,i)=>{
        stack.push(v);
        if(stack.slice(-4).join("") == 1231){
            answer += 1;
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
        }
    })
    
    return answer;
}