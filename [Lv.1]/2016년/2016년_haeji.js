function solution(a, b) {
    var answer = '';
    const days = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    const end_day = [31,29,31,30,31,30,31,31,30,31,30,31];
    let total_days = 0;
    
    for(i=0; i<a-1; i++){
        total_days += end_day[i];
    }

    return answer = days[(total_days+b)%7]
}
