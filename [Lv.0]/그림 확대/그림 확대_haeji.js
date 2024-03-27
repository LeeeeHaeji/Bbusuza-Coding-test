function solution(picture, k) {
    var answer = [];
    let str = [];
    let same = [];

    picture.map((i) => {
        i = i.split('')
        for(j=0; j<i.length; j++){
            if(i[j] === i[j+1]){
                same.push(i[j]);
            } else {
                same.push(i[j]);
                for(m=0; m<k; m++){
                    str.push(...same);
                }
                same = [];
            }
        }
        str = str.join('')

        for(m=0; m<k; m++){
            answer.push(str)
        }
        str = [];
    })
    return answer;
}
