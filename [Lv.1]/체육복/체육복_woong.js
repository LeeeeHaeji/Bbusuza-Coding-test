// // 바로 앞번호나 뒷번호의 학생에게만 체육복을 빌릴 수 있다
// // n = 전체 학생, lost =  도난 당한 value, reserve = 여벌의 체육복 가져온 학생들 value

// /**
// * reserve의 학생도 lost에 포함되어 있다면 빌려줄 수 없다
// * 1. n으로 키:밸류 객체를 만든다. ex) 1=>1, 2=>1, 3=>1, 4=>1, 5=>1
// * 2. lost에 키가 있다 => value -= 1
// * 3. reserve에 키가 있다 => value += 1 
// * 4. value가 0인 키의 앞키이나 뒷키에 밸류가 2인 키가 있다면 1을 줄 수 있다
// * 5. value 값이 1보다 크면 카운트하여 return한다
// */
// 테스트 17 〉	실패 (0.08ms, 33.4MB)
// 테스트 18 〉	실패 (0.08ms, 33.5MB)
// 테스트 19 〉	실패 (0.12ms, 33.5MB)
// 테스트 20 〉	실패 (0.09ms, 33.4MB)
// 테스트 25 〉	실패 (0.17ms, 33.4MB)
// function solution(n, lost, reserve) {
//     var answer = 0;
//     let obj = {};
    
//     // 1.
//     for(let i = 1; i <= n; i++){
//         obj[i] = 1;
//     };
    
//     // 2.
//     lost.map((v,i)=>{
//         obj[v] = obj[v] - 1;
//     })
    
//     // 3.
//     reserve.map((v,i)=>{
//         obj[v] = obj[v] + 1;
//     })
    
//     // 4.
//     for(let i = 1; i <= n; i++){
//         if(obj[i] == 0){
//             if(obj[i + 1] == 2){
//                 obj[i+1] = obj[i+1] - 1;
//                 obj[i] = obj[i] + 1;
//             }else if(obj[i-1] == 2){
//                 obj[i-1] =  obj[i-1] - 1;
//                 obj[i] = obj[i] + 1;
//             }
//         }
//     }
    
//     // 5.
//     for(let i = 1; i <= n; i++){
//         if(obj[i] >= 1){
//             answer += 1;
//         }
//     }
    
//     return answer;
// }

function solution(n, lost, reserve) {
    var answer = 0;
    let obj = {};

    // 1.
    for(let i = 1; i <= n; i++){
        obj[i] = 1;
    };
    
    // 2.
    lost.map((v,i)=>{
        obj[v] = obj[v] - 1;
    })
    
    // 3.
    reserve.map((v,i)=>{
        obj[v] = obj[v] + 1;
    })
    
    // 4.
    for(let i = 1; i <= n; i++){
        if(obj[i] == 0){
            if(obj[i - 1] == 2){
                obj[i-1] = obj[i-1] - 1;
                obj[i] = obj[i] + 1;
            }else if(obj[i + 1] == 2){
                obj[i+1] =  obj[i+1] - 1;
                obj[i] = obj[i] + 1;
            }
        }
    }
    
    // 5.
    for(let i = 1; i <= n; i++){
        if(obj[i] >= 1){
            answer += 1;
        }
    }
    
    return answer;
}
