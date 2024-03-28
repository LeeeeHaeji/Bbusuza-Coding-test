function solution(s) {
    var answer = [];

    /*
    for(i=0; i<s.length; i++){
        let idx = 0;
        let array = [];
        
        while(s.indexOf(s[i],idx) !== i){
            idx++;
            array.push(s.indexOf(s[i],idx))
        }

        if(array.length === 1){
            answer.push(array[0]);
        } else if(array.length > 0)  {
            let cal = array[array.length-1] - array[array.length-2]
            answer.push(cal);
        } else {
            answer.push(-1);
        }
    }*/

    // 다른 사람의 풀이를 보고 수정
    let obj = {};
    
    for(i=0; i<s.length; i++){
        if(obj[s[i]] === undefined){
            answer.push(-1);
            obj[s[i]] = i;
        } else {
            answer.push(i-obj[s[i]])
            obj[s[i]] = i;
        }
    }

    return answer;
}
