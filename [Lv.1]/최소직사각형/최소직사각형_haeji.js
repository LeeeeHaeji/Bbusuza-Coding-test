function solution(sizes) {
    var answer = 0;
    let big = [],
        small = [];
    
    sizes.forEach(v => {
        if(v[0] < v[1]){
            small.push(v[0]);
            big.push(v[1]);
        }else {
            small.push(v[1]);
            big.push(v[0]);
        }
    })

    answer = Math.max(...big)*Math.max(...small);
    
    return answer;
}
