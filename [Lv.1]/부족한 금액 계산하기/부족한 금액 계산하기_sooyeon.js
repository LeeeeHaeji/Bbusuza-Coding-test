function solution(price, money, count) {

    let charge = 0;
    
    for(let i = 1; i<count+1; i++)
        {
            charge += i * price
        }
    
    if(charge > money)
        return charge - money
    
    return 0;
}
