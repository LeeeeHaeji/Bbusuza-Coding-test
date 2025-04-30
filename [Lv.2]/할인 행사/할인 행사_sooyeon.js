function solution(want, number, discount) {
    let joinDayCount = 0; // 회원등록 날짜의 총 일수
    let item = []
    let loopCount = 0;
    
    // 원하는 제품의 수량에 맞게 item 배열 생성
    number.forEach((v,i)=>{
        for(let j = 0; j < v; ++j){
            item.push(want[i])    
        }
        ++i
    })
    
    loopCount = item.length;
    
    for(let i = 0; i < discount.length; i++){
        //discount 배열에 있는 값이 item 배열에 있는지 확인
        if(item.indexOf(discount[i]) !== -1){   
            // 있다면 discount 배열 해당 인덱스부터 item 배열의 길이를 더한 만큼 반복하며 비교
            for(let j = i; j < i+loopCount; j++){
                if(item.indexOf(discount[j]) !== -1){
                    // 값이 있을 경우 item 배열에서 제거
                    item.splice(item.indexOf(discount[j]), 1);
                }
            }
        }
        
        // item 배열이 빈 값이면 원하는 만큼 구입 완료 -> 회원등록 날짜의 총 일수 ++
        if(item.length === 0) ++joinDayCount;
        
        // item 배열 초기화 진행
        item=[];
        number.forEach((v,index)=>{
            for(let j = 0; j < v; ++j){
                item.push(want[index])    
            }
            ++index
        })
        
        
    }
    
    

    
    // 원하는 제품과 수량이 일치해야 회원가입을 한다.
    // 비교방법은..?
    /*
    원하는 제품의 수량에 맞게끔 want 배열을 확장
    discount 배열에 있는 값이 want 배열에 있는지 확인
    있다면 discount 배열해당 인덱스부터 비교시작..
    
    일치할경우 want 배열에서 제거하며 반복.
    want 배열의 길이가 0이되면 
    
    회원 등록 날짜의 총 일수 ++
    
    want 배열은 다시 확장한 배열로 초기화 진행. 
    
    */
    
    
    return joinDayCount;
}
