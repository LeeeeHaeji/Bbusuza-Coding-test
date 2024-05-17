function solution(s, n) {
    var answer = '';
    // console.log(s.charCodeAt(0))
    // console.log(String.fromCharCode(65))
    // console.log(s.toLowerCase())
    // console.log(String.fromCharCode(s.charCodeAt(0)+1))
    // https://www.ascii-code.com/
    
    for(let i = 0; i < s.length; i++){
        let forVal = s[i].charCodeAt(0)
        
        if(forVal >= 65 && forVal <= 90){
            let forValPlusN = forVal + n
            if(forValPlusN>90){
                 forValPlusN = 65 + (forValPlusN - 91)
            }
            answer += String.fromCharCode(forValPlusN)
        }
        else if(forVal >= 97 && forVal <= 122){
            let forValPlusN = forVal + n
            if(forValPlusN>122){
                 forValPlusN = 97 + (forValPlusN - 123)
            }
            answer += String.fromCharCode(forValPlusN)
        }else {
            answer += s[i]
        }
    }
    return answer;
}
