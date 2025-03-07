function solution(t, p) {
    var answer = 0;

    for(i=0; i<=t.length - p.length; i++){
        let num = t.slice(i, p.length+i);
        if(parseInt(num) <= parseInt(p)){
            answer++;
        }
    }
    return answer;
}
