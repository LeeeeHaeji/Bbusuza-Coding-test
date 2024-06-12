function solution(s) {
    var answer = '';
    let isFirst = true;
    for(let char of s){
        if(char == " "){
            answer += char;
            isFirst = true;
        }else if(isFirst){
            if(!isNaN(char)){
                answer += char;
            }else{
               answer += char.toUpperCase(); 
            }isFirst = false
        }else{
            answer += char.toLowerCase();
        }
    }
    return answer;
}
