// 테스트 1 〉	통과 (0.12ms, 33.4MB)
// 테스트 2 〉	통과 (0.13ms, 33.6MB)
// 테스트 3 〉	통과 (0.08ms, 33.5MB)
// 테스트 4 〉	통과 (0.10ms, 33.5MB)
// 테스트 5 〉	통과 (0.13ms, 33.4MB)
// 테스트 6 〉	통과 (0.09ms, 33.6MB)
// 테스트 7 〉	실패 (0.18ms, 33.6MB)
// 테스트 8 〉	실패 (0.19ms, 33.5MB)
// 테스트 9 〉	실패 (0.24ms, 33.5MB)
// 테스트 10 〉	실패 (0.33ms, 33.6MB)
// 테스트 11 〉	실패 (0.30ms, 33.6MB)
// 테스트 12 〉	실패 (0.30ms, 33.4MB)
// 테스트 13 〉	실패 (0.24ms, 33.5MB)
// 테스트 14 〉	실패 (0.26ms, 33.6MB)
// 테스트 15 〉	실패 (0.27ms, 33.4MB)
// 테스트 16 〉	실패 (0.43ms, 33.4MB)
// 테스트 17 〉	실패 (0.28ms, 33.6MB)
// 테스트 18 〉	통과 (0.30ms, 33.6MB)
// 테스트 19 〉	실패 (0.28ms, 33.4MB)
// 테스트 20 〉	실패 (0.30ms, 33.4MB)

function solution(survey, choices) {
    var answer = '';
    const obj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
    for(let i = 0; i <survey.length; i++){
        if(choices[i] === 4){
            continue;
        }        
        if(choices[i] < 4){
            obj[survey[i][0]] = 4 - choices[i]
        }
        if(choices[i] > 4){
            obj[survey[i][1]] = choices[i] - 4
        }
    }
    
    if(obj["R"] >= obj["T"]){
        answer += "R"
    }else{
        answer += "T"
    }
    if(obj["C"] >= obj["F"]){
        answer += "C"
    }else{
        answer += "F"
    }
    if(obj["J"] >= obj["M"]){
        answer += "J"
    }else{
        answer += "M"
    }
    if(obj["A"] >= obj["N"]){
        answer += "A"
    }else{
        answer += "N"
    }
    
    return answer
}

// answer에 +=를 해주지 않아서 틀렸습니다.

function solution(survey, choices) {
    var answer = '';
    const obj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
    for(let i = 0; i <survey.length; i++){
        if(choices[i] === 4){
            continue;
        }        
        if(choices[i] < 4){
            obj[survey[i][0]] += 4 - choices[i]
        }
        if(choices[i] > 4){
            obj[survey[i][1]] += choices[i] - 4
        }
        
    }
    
    if(obj["R"] >= obj["T"]){
        answer += "R"
    }else{
        answer += "T"
    }
    if(obj["C"] >= obj["F"]){
        answer += "C"
    }else{
        answer += "F"
    }
    if(obj["J"] >= obj["M"]){
        answer += "J"
    }else{
        answer += "M"
    }
    if(obj["A"] >= obj["N"]){
        answer += "A"
    }else{
        answer += "N"
    }
    
    return answer
}
