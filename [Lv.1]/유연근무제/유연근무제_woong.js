// #1
// 자신이 지정한 출근 희망 시간 + 10분 까지 출근해야함
// 토,일은 제외
// 모든 시간은 100을 곱하고 분을 더한 정수 ex) 10시13분 = 1013
// schedules = 출근 희망 시각, timelogs = 직원들이 일주일 동안 출근한 시각, startday = 이벤트 시작 요일
// ex) startday = 5, 금요일 시작 

/**
 schedules[0]은 730 시부터 740까지 출근 희망 / startday = 1
 timelogs[0] = [월710, 화700, 수650, 목735, 금700, 토931, 일912] , ok = 1, result +=1
 schedules[1]은 855 시부터 905까지 출근 희망 / startday = 1
 timelogs[1] = [!월908!, 화901, 수805, 목815, 금800, 토831, 일835] , ok = 0
schedules[2]은 700 시부터 710까지 출근 희망 / startday = 1
 timelogs[2] = [705, 701, 702, 705, 710, 토710, 일711] , ok = 1, result +=1
 schedules[3]은 700 시부터 710까지 출근 희망 / startday = 1
 timelogs[3] = [707, 731, !859!, !913!, !934!, 토931, 일905] , ok = 0

startday의 수에 따라 timelog에서 토,일이 어딘지 찾아낸다
어떻게? 6-startday,7-startday,index로 치면 맞음

1. 스케쥴 배열 순회
2. timelog value ~ value+10 보다 크면 false
    2.1 토,일의 value라면 continue
3. 스케쥴 value ~ value+10 보다 큰 수가 없으면 answer += 1

테스트 19 〉	실패 (0.53ms, 34MB)
테스트 22 〉	실패 (0.50ms, 33.8MB)
테스트 23 〉	실패 (0.47ms, 33.8MB)
테스트 26 〉	실패 (0.14ms, 33.5MB)
테스트 29 〉	실패 (0.32ms, 33.8MB)
테스트 34 〉	실패 (0.82ms, 34MB)
테스트 36 〉	실패 (0.62ms, 34MB)
테스트 38 〉	실패 (0.30ms, 33.7MB)
테스트 40 〉	실패 (0.49ms, 33.9MB)
테스트 42 〉	실패 (0.46ms, 33.9MB)

#2
startday가 7일 경우를 고려하지 않아서 그런 것 같음

테스트 22 〉	실패 (0.48ms, 33.9MB)
테스트 23 〉	실패 (0.47ms, 33.8MB)
테스트 26 〉	실패 (0.14ms, 33.5MB)
테스트 29 〉	실패 (0.37ms, 33.8MB)
테스트 34 〉	실패 (0.49ms, 33.8MB)
테스트 36 〉	실패 (0.47ms, 33.8MB)
테스트 38 〉	실패 (0.31ms, 33.8MB)

#3 
출근 희망 시각과 실제로 출근한 시각을 100으로 나눈 나머지는 59 이하입니다.
ex) 희망 출근 시간 = 8:59 ,출근 인정 시간 = 9:09
단순히 10을 더하면 859 => 869
*/

// #1

// function solution(schedules, timelogs, startday) {
//     var answer = 0;
//     let saturday;
//     let sunday;
//     if(startday == 7){
//         saturday = 6;
//         sunday = 0;
//     }else{
//         saturday = 6 - startday;
//         sunday = 7 - startday;
//     }
    
//     //1.
//     for(let i = 0; i < schedules.length; i++){
//         let hope = schedules[i] + 10;
//         let success = true;
//         for(let j = 0; j < timelogs[i].length; j++){
//             let realLog = timelogs[i][j];
//             //2.
//             if(hope < realLog){
//                 if(j == saturday || j == sunday){
//                     continue;
//                 }
//                 success = false
//             }
//         }
//         if(success){
//             answer += 1;   
//         }
        
//     }
//     return answer;
// }

// #2
// function solution(schedules, timelogs, startday) {
//     var answer = 0;
//     let saturday;
//     let sunday;
//     if(startday == 7){
//         saturday = 6;
//         sunday = 0;
//     }else{
//         saturday = 6 - startday;
//         sunday = 7 - startday;
//     }
    
//     //1.
//     for(let i = 0; i < schedules.length; i++){
//         let hope = schedules[i] + 10;
//         let success = true;
//         for(let j = 0; j < timelogs[i].length; j++){
//             let realLog = timelogs[i][j];
//             //2.
//             if(hope < realLog){
//                 if(j == saturday || j == sunday){
//                     continue;
//                 }
//                 success = false
//             }
//         }
//         if(success){
//             answer += 1;   
//         }
        
//     }
//     return answer;
// }

// #3
function solution(schedules, timelogs, startday) {
    var answer = 0;
    let saturday;
    let sunday;
    if(startday == 7){
        saturday = 6;
        sunday = 0;
    }else{
        saturday = 6 - startday;
        sunday = 7 - startday;
    }
    
    //1.
    for(let i = 0; i < schedules.length; i++){
        let time = schedules[i]
        let hours = parseInt(time / 100) * 60;
        let minute = time % 100 + 10;
        let hope = parseInt((hours + minute) / 60) * 100 + (hours + minute) % 60;
        
        let success = true;
        for(let j = 0; j < timelogs[i].length; j++){
            let realLog = timelogs[i][j];
            //2.
            if(hope < realLog){
                if(j == saturday || j == sunday){
                    continue;
                }
                success = false
            }
        }
        if(success){
            answer += 1;   
        }
        
    }
    return answer;
}
