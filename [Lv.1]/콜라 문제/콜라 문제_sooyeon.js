function solution(a, b, n) {
    // a : 바꾸기 위해 줘야하는 병 갯수
    // b : a개를 가져다주면 마트가 주는 콜라병 수
    // n : 가지고 있는 빈 병의 갯수
    var answer = 0;
    let bottle = n;
    
    while(bottle >= a)
    {
        let quotient = Math.floor(bottle/a);
        answer += quotient * b
        bottle = (bottle % a) + (quotient * b);
    }
    return answer;
}
