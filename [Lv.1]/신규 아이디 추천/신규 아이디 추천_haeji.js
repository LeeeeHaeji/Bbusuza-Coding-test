function solution(new_id) {
    var answer = '';

    new_id = new_id.toLowerCase() // 1단계
    new_id = new_id.replace(/[^a-z0-9_.-]/g, '') // 2단계
    
    new_id = new_id.replace(/[.]+/g, '.').split('') // 3단계

    // 4단계
    if(new_id[0] === '.' && new_id[new_id.length - 1] === '.'){
        new_id.shift();
        new_id.pop();
    } else if(new_id[new_id.length - 1] === '.'){
        new_id.pop();
    } else if(new_id[0] === '.'){
        new_id.shift();
    }
    
    // 5,6단계
    if(new_id.length <= 0){
        new_id = ['a'];
    } else if (new_id.length >= 16){
        while(new_id.length>=16){
            new_id.pop();
        }
        
        if(new_id[new_id.length - 1] === '.'){
            new_id.pop();
        }
    }

    // 7단계
    if(new_id.length <= 2){
        while(new_id.length <= 2){
            new_id.push(new_id[new_id.length - 1])
        }
    }

    return new_id.join('');
}
