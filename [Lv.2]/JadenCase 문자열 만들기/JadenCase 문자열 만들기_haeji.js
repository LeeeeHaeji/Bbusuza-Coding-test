function solution(s) {
    var answer = '';
    let num = [1,2,3,4,5,6,7,8,9,0];
    s = s.toLowerCase().split(' ');

    for(i=0; i<s.length; i++){
        if(!num.includes(parseInt(s[i][0]))){
            if(s[i] !== ''){
                s[i] = s[i].replace(s[i][0], s[i][0].toUpperCase())
            }
        }
    }

    return answer = s.join(' ');
}
