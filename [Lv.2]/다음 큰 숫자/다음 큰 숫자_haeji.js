function solution(n) {
    var answer = 0;
    let bin_num = n.toString(2);
    let cnt = 0;
    let cnt2 = 0;
    // 10진수 -> 2진수 : 숫자.toString(2)
    // 2진수 -> 10진수 : parseInt(숫자, 2)

    for(i of bin_num){
        if(i == 1){
            cnt++;
        }
    }
    // console.log(`cnt: ${cnt}`);

    while(cnt !== cnt2){
        cnt2 = 0;
        n++;
        bin_num = n.toString(2);
        for(i of bin_num){
            if(i == 1){
                cnt2++;
            }
        }
        // console.log(`cnt2: ${cnt2}`);
    }
    // console.log(n)
    
    return answer = n;
}
