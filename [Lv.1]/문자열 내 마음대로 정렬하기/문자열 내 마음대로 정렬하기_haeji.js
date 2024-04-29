function solution(strings, n) {
    var answer = [];
    let str = [];

    for(i=0; i<strings.length; i++){
        let min = strings[i]
        for(j=i+1; j<strings.length; j++){
            if(min[n] === strings[j][n]){
                if(min > strings[j]){
                    strings[i] = strings[j];
                    strings[j] = min;
                    min = strings[i]
                }  
            } else if(min[n] > strings[j][n]){
                strings[i] = strings[j];
                strings[j] = min;
                min = strings[i]
            }
        }
    }
    
    return answer = strings;
}
