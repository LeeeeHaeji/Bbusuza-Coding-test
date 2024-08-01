function solution(n) {
    var answer = '';
    let cnt = 1;
    let num = 3;
    
    while(n > num){
        cnt++;
        num += 3**cnt;
        // console.log('num: ' + num)
    }
    num -= 3**cnt;
    // console.log('cnt: ' + cnt)
    // console.log('num: ' + num)

    for(i=cnt-1; i>0; i--){
        let cnt_num = 0;
        
        while(n > num){
            num += 3**i;
            cnt_num++;
        }
        
        if(cnt_num === 3){
            answer += 4;
        } else {
            answer += cnt_num;
        }
        
        // console.log('cnt_num: ' + cnt_num);
        num -= 3**i;
    }
    // console.log('num: ' + num)
    
    if((n - num)%3 === 0){
        answer += '4'
    } else if((n - num)%3 === 2){
        answer += '2'
    } else {
        answer += '1'
    }
    
    return answer;
}
