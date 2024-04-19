function solution(s) {
    var answer = 0;
    let str_number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for(i=0; i<str_number.length; i++){
        if(s.includes(str_number[i])){
            s = s.replaceAll(str_number[i],i);
        }
    }
    
    answer = parseInt(s);
    return answer;
}
