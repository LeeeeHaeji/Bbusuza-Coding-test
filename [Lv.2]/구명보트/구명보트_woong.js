function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    let min = 0;
    let max = people.length -1;
    
    // 가장 마지막이 무거우니까 people[i] + people[people.length-1]까지 하나씩 더해서 limit보다 작으면 + 1, 커서 못타면 pop 반복
    while(min <= max){
        if(people[min] + people[max] <= limit){
            min += 1;
        }
        max -= 1;
        answer++;
    }
    
    return answer;
}
