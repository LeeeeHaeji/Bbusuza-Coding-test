function solution(price, money, count) {
    let sum = 0;
    for(i=1; i<=count; i++){
        sum += price*i;
    }
    // console.log(sum)
    
    if(sum > money){
        return sum - money
    } else {
        return 0;
    }
    
}
