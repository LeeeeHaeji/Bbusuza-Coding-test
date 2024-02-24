function solution(arr)
{
    var answer = [];
    let not_continue = [];
    
    // 1. 연속적으로 나타나지 않는 부분의 위치 찾기
    for(i=0; i<arr.length-1; i++){
        if(arr[i] !== arr[i+1]){
            not_continue.push(i);
        }
    }
    
    // 2. not_continue를 이용하여 연속된 부분만 자른 뒤 자른 부분의 첫번째 값을 answer에 사용
    if(not_continue[0] === undefined){
        // not_continue에 값이 없다면
        answer.push(arr[0]);
    } else {
        // 2-1. 처음
        answer.push(arr[0])

        // 2-2. 두번째~
        for(i=0; i<not_continue.length-1; i++){
            answer.push(arr.slice(not_continue[i]+1, not_continue[i+1]+1)[0]);
        }

        // 2-3. 마지막
        answer.push(arr.slice(not_continue[not_continue.length-1]+1)[0])

    }
    
    return answer;
}
