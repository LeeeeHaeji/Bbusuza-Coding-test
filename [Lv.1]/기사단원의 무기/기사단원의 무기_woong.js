function solution(number, limit, power) {
    var answer = 0;
    let SieveArr = Array(number+1).fill().map((v,i)=>i)
    let arr = Array(number+1).fill().map((v,i)=>i)
    //에라토스테네스의 채로 소수가 아닌 수는 0으로 만든다
    for(let i = 2; i <= number;i++){
        if(SieveArr[i] == 0) continue;
        for(let j = i+i; j <= number; j+=i){
            SieveArr[j] = 0;
        }
    }
  // 0이 아닌 수는 모두 약수가 2개이므로 2로 바꾼다
    for(let i = 2;i <= number; i++){
        if(SieveArr[i] > 1){
            arr[i] = 2;
        }else{
          // 약수를 구한다
            let cnt = 0;
            for(let j = 1; j <= arr[i];j++){
                if(arr[i] % j == 0){
                    cnt ++
                }
            }
            arr[i] = cnt
        }
    }
    arr.map((v)=>{
        if(v <= limit){
            answer += v
        }else{
            answer += power
        }
    })
    return answer;
}
// 테스트 1 〉	통과 (196.67ms, 36.8MB)
// 테스트 2 〉	통과 (14.11ms, 36.5MB)
// 테스트 3 〉	통과 (5.07ms, 36.5MB)
// 테스트 4 〉	통과 (21.44ms, 36.8MB)
// 테스트 5 〉	통과 (4.17ms, 36.5MB)
// 테스트 6 〉	통과 (205.47ms, 36.4MB)
// 테스트 7 〉	통과 (34.11ms, 35.9MB)
// 테스트 8 〉	통과 (26.92ms, 36MB)
// 테스트 9 〉	통과 (222.34ms, 36.4MB)
// 테스트 10 〉	통과 (39.33ms, 36MB)
// 테스트 11 〉	실패 (시간 초과)
// 테스트 12 〉	실패 (시간 초과)
// 테스트 13 〉	실패 (시간 초과)
// 테스트 14 〉	실패 (시간 초과)
// 테스트 15 〉	실패 (시간 초과)
// 테스트 16 〉	실패 (시간 초과)
// 테스트 17 〉	통과 (0.14ms, 33.3MB)
// 테스트 18 〉	실패 (시간 초과)
// 테스트 19 〉	통과 (17.30ms, 36.5MB)
// 테스트 20 〉	통과 (19.98ms, 36.5MB)
// 테스트 21 〉	통과 (0.10ms, 33.3MB)
// 테스트 22 〉	통과 (0.10ms, 33.4MB)
// 테스트 23 〉	통과 (0.22ms, 33.4MB)
// 테스트 24 〉	실패 (시간 초과)
// 테스트 25 〉	실패 (시간 초과)
// 테스트 26 〉	통과 (3.89ms, 36.5MB)
// 테스트 27 〉	통과 (4.01ms, 36.4MB)
