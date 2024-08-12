function solution(n) {
    var answer = '';
    const arr = [4,1,2];
    while(n>0){
        answer = arr[n % 3] + answer
        n = Math.floor((n-1)/3)
        // console.log(`answer = ${answer}`)
        // console.log(`n = ${n}`)
    }
    return answer;
}
