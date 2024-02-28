function solution(order) {
    var answer = 0;
    let ame = 0, latte = 0;
    
    for(i=0; i<order.length; i++){
        if(order[i].includes('americano') || order[i].includes('anything')){
            ame++;
        } else {
            latte++;
        }
    }
    
    return answer = 4500*ame + 5000*latte;
}
