function solution(n, words) {
    var answer = [0,0];
    let arr = [];
    arr.push(words[0])
    console.log(arr)
    
    for(let i = 1; i < words.length; i++){
        let 뒷단어 = words[i];
        let 앞단어 = words[i-1]
        if(앞단어[앞단어.length-1] !== 뒷단어[0] || arr.includes(words[i])){
            answer = [(i % n) + 1, Math.floor(i / n) + 1 ];
            break;
        }
        arr.push(words[i])
    }
    

    return answer;
}
