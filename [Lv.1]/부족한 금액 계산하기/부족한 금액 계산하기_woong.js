function solution(price, money, count) {
    var answer = -1;
    let sum = 0;
    for(let i = 1; i < count+1; i++){
        sum += price * i
    }
    if(money < sum){
        return sum - money;
    }else{
        return 0;
    }

}
