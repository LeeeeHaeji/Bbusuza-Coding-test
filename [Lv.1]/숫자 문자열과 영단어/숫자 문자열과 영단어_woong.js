function solution(s) {
    var answer = 0;
    let num = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    for(let i = 0; i < num.length; i++){
        if(s.includes(num[i])){
            s = s.replaceAll(num[i],i)
        }
        answer = parseInt(s)
    }
    return answer
}
