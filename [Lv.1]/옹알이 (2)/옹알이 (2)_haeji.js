function solution(babbling) {
    var answer = 0;
    const str = ["aya", "ye", "woo", "ma"];

    let matches = [];
    for(i=0; i<babbling.length; i++){
        matches = babbling[i].match(/((?:aya|ye|woo|ma)|.+?)/g);

        for(k=0; k<matches.length; k++){
            if(matches[k] !== matches[k+1]){
                if(str.includes(matches[k])){
                    babbling[i] = babbling[i].replace(matches[k], '')
                }
            }
        }
    }

    return answer = babbling.filter(v => v === '').length;
}
