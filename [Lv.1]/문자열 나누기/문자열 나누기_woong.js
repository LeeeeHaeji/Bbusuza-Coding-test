function solution(s) {
    var answer = 0;
    let arr = [];
    let count = 0;
    for(let i = 0; i < s.length; i++){
        arr.push(s[i]);
        let x = arr.filter((v) => v === arr[0])
        let y = arr.filter((v) => v !== arr[0])
        if(x.length == y.length){
            answer += 1;   
            arr = [];
        }
    }
    if(arr.length !== 0){
        answer += 1
    }
    return answer;
}
