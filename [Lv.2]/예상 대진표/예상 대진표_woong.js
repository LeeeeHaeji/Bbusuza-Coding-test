function solution(n,a,b){
    var answer = 0;
    let right = Math.max(a,b);
    let left = Math.min(a,b);
    let rightAnswer = 0;
    let leftAnswer = 0;
    while(true){
        if(right % 2 == 0 && (left + 1) == right){
            answer ++
            break;
        }else{
            left = Math.ceil(left / 2);
            console.log(`left: ${left}`)
            right = Math.ceil(right / 2);
            console.log(`right: ${right}`)
            answer ++
        }
    }
    return answer;
}
