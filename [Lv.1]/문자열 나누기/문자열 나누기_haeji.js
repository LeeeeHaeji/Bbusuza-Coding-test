function solution(s) {
    var answer = 1;
    let x = s[0];
    let x_cnt = 1;
    let y_cnt = 0;
    
    for(i=1; i<s.length; i++){
        //console.log(s[i]);
        if(y_cnt === x_cnt){
            // console.log(s[i])
            console.log('분해')
            answer++;
            x = s[i];
            y_cnt = 0;
            x_cnt = 1;
        } else if(s[i] !== x){
            y_cnt++;
        } else {
            x_cnt++;
        }
        // console.log(`y_cnt: ${y_cnt}, x_cnt:${x_cnt}`)
    }
    return answer;
}
