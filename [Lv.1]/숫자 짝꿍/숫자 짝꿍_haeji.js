function solution(X, Y) {
    var answer = '';
    /*
    => 시도해보려고 한 흔적
    let list = [];
    
    for(i=0; i<X.length; i++){
        // console.log('X:' + X[i])
        for(j=0; j<Y.length; j++){
            // console.log('Y: ' + Y[j])
            if(X[i] === Y[j]){
                list.push(X[i]);
                X = X.replace(X[i], '');
                Y = Y.replace(Y[j], '');
    
//                 console.log('X list: ' + X)
//                 console.log('Y list: ' + Y)
//                 console.log('list: ' + list)

                i = i-1;
                // j = 0;
            }
        }
        // console.log('-----------')
    }
    

    if(list.length <= 0){
        return '-1'
    }
    
    list.sort((a,b) => b - a)
    list = list.join('')

    if(/[1-9]/.test(list) === false){
        return '0'
    } else {
        return list;  
    }
    */
    
    let hashX = new Array(10).fill(0);
    let hashY = new Array(10).fill(0);
    
    X.split('').forEach(i => hashX[i]++);
    Y.split('').forEach(i => hashY[i]++);
    
    hashX.forEach((v, i) => {
        console.log('v: ' + v);
        console.log('i: ' + i)
        
        if(v && hashY[i]){
            answer += String(i).repeat(Math.min(hashX[i], hashY[i]))
        }
    })
    
    if(answer.length <= 0){
        return '-1'
    } else if(/[1-9]/.test(answer) === false){
        return '0'
    } else {
        return [...answer].reverse().join('');  
    }
}
