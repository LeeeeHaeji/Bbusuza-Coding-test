function solution(numbers, hand) {
//     var answer = '';
//     let left = "*";
//     let right = "#";
//     let mid;
//     //  높이만 생각하고 map을 만들었다.
//     let map1 = new Map([
//         [1,0],[2,0],[3,0],[4,1],[5,1],[6,1],[7,2],[8,2],[9,2],["*",3],[0,3],["#",3]
//     ]);
    
    
//     if(hand == "right"){
//         hand = "R"
//     }else{
//         hand = "L"
//     }
//     // console.log(hand)
    
    
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] === 1 || numbers[i] === 4 ||numbers[i] === 7){
//             answer += "L"
//             left = map1.get(numbers[i])
//             // console.log("for문 넘버스 "+numbers[i])
//             // console.log("뉴 맵 left get "+left)
//         }else if(numbers[i] === 3 || numbers[i] === 6 ||numbers[i] === 9){
//             answer += "R"
//             right = map1.get(numbers[i])
//             // console.log("뉴 맵 right get "+right)
//         }
//         else if(numbers[i] === 2 || numbers[i] === 5 ||numbers[i] === 8 || numbers[i] === 0){
//             mid = map1.get(numbers[i]);
//             if(left == right){
//                 answer += hand
//                 console.log(answer)
//                 console.log(`같을 때 레프트${left}`)
//                 console.log(`같을 때 라이트${right}`)
//             }else if(mid+left > mid+right){
//                 answer += "L"
//                 console.log(`mid+left > mid+right 의 left = ${left}`)
//                 console.log(`mid+left > mid+right 의 right = ${right}`)
//             }else if(mid+left < mid+right){
//                 console.log(`mid+left < mid+right 의 left = ${left}`)
//                 console.log(`mid+left < mid+right 의 right = ${right}`)
//                 answer += "R"
//             }
                     
//             // console.log("for문 넘버스 "+numbers[i])
//             // console.log(`뉴 맵 미드 겟 ${mid}`)
//         }
//     }
//     return answer;
    
    var answer = '';
    let left = [3,0];
    let right = [3,2];
    
    let obj = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    }
    
    if(hand == "right"){
        hand = "R"
    }else{
        hand = "L"
    }
    
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === 1 || numbers[i] === 4 ||numbers[i] === 7){
            answer += "L"
            left = obj[numbers[i]]
        }else if(numbers[i] === 3 || numbers[i] === 6 ||numbers[i] === 9){
            answer += "R"
            right = obj[numbers[i]]
        }
        else{
            let mid = obj[numbers[i]]
            let left_mid = Math.abs(left[0] - mid[0]) + Math.abs(left[1] - mid [1])
            // console.log(left_mid)
            let right_mid = Math.abs(right[0] - mid[0]) + Math.abs(right[1] - mid [1])
            if(left_mid < right_mid){
                answer += "L"
                left = mid
            }else if(left_mid > right_mid){
                answer += "R"
                right = mid
            }else if(left_mid == right_mid){
                answer += hand
                if(hand === "L"){
                    left = mid
                }else{
                    right = mid
                }
            }
        }
    }
    return answer;
}
