function solution(s, n) {
    var answer = '';
    s = s.split('').map(v => {return v.charCodeAt()});
    
    for(i=0; i<s.length; i++){
        if(s[i] >= 65 && s[i]<=90){
            s[i] += n;
            
            if(s[i]>90){
                let cal = s[i] - 91;
                s[i] = 65+cal;
            }
        } else if(s[i] >=97){
            s[i] += n;
            
            if(s[i] > 122){
                let cal = s[i] - 123;
                s[i] = 97+cal;
            }
        }
    }

    s = s.map(v => {
        return String.fromCharCode(v)
    })
    
    return answer = s.join('');
}
