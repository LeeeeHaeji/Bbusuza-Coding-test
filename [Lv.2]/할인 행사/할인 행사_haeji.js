function solution(want, number, discount) {
    var answer = 0;
    let shopping_list = {};
    
    for(i=0; i<want.length; i++){
        shopping_list[want[i]] = number[i]
    }

    //할인목록에 원하는 제품이 있는지 확인
    for(i=0; i<want.length; i++){
        if(!discount.includes(want[i])){
            return 0
        }
    }

    //할인목록에 원하는 제품이 모두 있다면
    for(i=0; i<discount.length; i++){
        let tempShoppingList = {...shopping_list} // 얕은복사
        for(j=i; j<i+10; j++){
            if(want.includes(discount[j])){
                tempShoppingList[discount[j]] -= 1
            }
        }
        
        let values = Object.values(tempShoppingList);
        values = values.filter((v) => v > 0);
        
        if(values.length === 0){
            answer++;
        }

        // console.log(tempShoppingList)
        // console.log('-------------')
    }
    
    return answer;
}
