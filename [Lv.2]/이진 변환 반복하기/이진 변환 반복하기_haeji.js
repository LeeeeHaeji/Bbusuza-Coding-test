function solution(s) {
    var answer = [0,0];
    let length = s.length;

    while(s !== '1'){
        while(s.includes('0')){
            s = s.replace('0', '');
            answer[1]++;
        }
        length = s.length;
        s = length.toString(2);
        answer[0]++
    }
    
    return answer;
}
