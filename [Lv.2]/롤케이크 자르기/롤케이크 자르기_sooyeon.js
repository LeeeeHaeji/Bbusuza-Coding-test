/*
function solution(topping) {
    var answer = 0;
    
    for(let i = 0; i < topping.length-1; ++i)
    {
        const left = new Set(topping.slice(0,i+1));
        const right = new Set(topping.slice(i+1));
        
        if(left.size == right.size)
            ++answer;
    }
    
    return answer;
    
    // 토핑 갯수만큼 반복하며 잘라서 중복 제거한 갯수를 비교
    
}
*/
function solution(topping) {
    let answer = 0;
    //const leftMap = new Map();
    const rightMap = new Map();

    // 먼저 전체 토핑을 rightMap에 저장
    for (let t of topping) {
        rightMap.set(t, (rightMap.get(t) || 0) + 1);
    }

    const leftSet = new Set();

    for (let i = 0; i < topping.length; i++) {
        const t = topping[i];
        
        // 왼쪽 세트에 추가
        leftSet.add(t);

        // 오른쪽 맵에서 하나 제거
        rightMap.set(t, rightMap.get(t) - 1);
        if (rightMap.get(t) === 0) {
            rightMap.delete(t);
        }

        // 마지막 비교는 생략 (한쪽이 빈 경우는 나눌 수 없음)
        if (i < topping.length - 1 && leftSet.size === rightMap.size) {
            answer++;
        }
    }

    return answer;
}










