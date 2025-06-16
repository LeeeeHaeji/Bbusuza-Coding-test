function solution(topping) {
    var answer = 0; 
    let older = new Map(),
        younger = new Set();

    topping.forEach((v) => {
        if(older.has(v)){
            let plus_num = older.get(v);
            older.set(v, plus_num + 1);

        } else {
            older.set(v, 1)
        }
    })
    // console.log(older);
    // console.log(older.size);
    
    for(i=topping.length-1; i>=0; i--){
        let minus_num = older.get(topping[i]);
        older.set(topping[i], minus_num-1);
        if(older.get(topping[i]) === 0){
            older.delete(topping[i]);
        }
        younger.add(topping[i]);
        
        if(older.size === younger.size){
            answer++;
        }
        
//         console.log(older)
//         console.log(younger)
//         console.log('----------------------')
    }
    
    
    return answer;
}
