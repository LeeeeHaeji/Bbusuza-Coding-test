// function recursion (n){
//     if(n===0){
//         return 0;
//     }
//     if(n===1){
//         return 1;
//     }
//     return recursion(n-1) + recursion(n-2) % 1234567
// }
// function solution(n){
//     const remainder = 1234567
//     const recursion = (n) => {
//         if(n===0){
//         return 0;
//     }
//     if(n===1){
//         return 1;
//     }
//     return (recursion(n-1) % remainder + recursion(n-2) % remainder)
//     }
//     return recursion(n)
// }
// function solution(n){
//     let answer = 0;
//     let temp0 = 0;
//     let temp1 = 1;
//     const remainder = 1234567
    
//     for(let i = 2; i <= n; i++){
//         // https://school.programmers.co.kr/learn/courses/14743/lessons/116435
//         // answer = ((temp0 % remainder) + (temp1 % remainder) % remainder); // 괄호를 틀렸음. remainder가 (temp1 % remainder)의 나머지를 구하고 있음
//         answer = (temp0 +temp1) % remainder;
//         temp0 = temp1;
//         temp1 = answer;
//     }
//     return answer 
// }
function solution(n){
    let answer = 0;
    let temp0 = 0;
    let temp1 = 1;
    const remainder = 1234567
    
    for(let i = 2; i <= n; i++){
        answer = ((temp0 % remainder) + (temp1 % remainder)) % remainder;
        temp0 = temp1;
        temp1 = answer;
    }
    return answer 
}
