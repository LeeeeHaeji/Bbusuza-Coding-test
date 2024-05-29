function solution(n) {
    let answer = 0;
    let fibo = [0,1];
    for(i=2; i<=n; i++){
        fibo.push((fibo[i-1]%1234567)+(fibo[i-2]%1234567));
    }
    answer = fibo[n]%1234567
    return answer;
}
