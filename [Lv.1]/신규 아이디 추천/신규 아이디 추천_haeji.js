function solution(new_id) {
        //과거의 풀이
//     new_id = new_id.toLowerCase() // 1단계
//     new_id = new_id.replace(/[^a-z0-9_.-]/g, '') // 2단계
    
//     new_id = new_id.replace(/[.]+/g, '.').split('') // 3단계

//     // 4단계
//     if(new_id[0] === '.' && new_id[new_id.length - 1] === '.'){
//         new_id.shift();
//         new_id.pop();
//     } else if(new_id[new_id.length - 1] === '.'){
//         new_id.pop();
//     } else if(new_id[0] === '.'){
//         new_id.shift();
//     }
    
//     // 5,6단계
//     if(new_id.length <= 0){
//         new_id = ['a'];
//     } else if (new_id.length >= 16){
//         while(new_id.length>=16){
//             new_id.pop();
//         }
        
//         if(new_id[new_id.length - 1] === '.'){
//             new_id.pop();
//         }
//     }

//     // 7단계
//     if(new_id.length <= 2){
//         while(new_id.length <= 2){
//             new_id.push(new_id[new_id.length - 1])
//         }
//     }

//     return new_id.join('');
    
    // 1단계
    if(/[A-Z]/g.test(new_id)){
        new_id = new_id.toLowerCase()
    }
    
    // 2단계
    //맨 처음에 숫자 1~9까지만 체크했다.. 0도 숫자에 들어가는걸 까먹었음.. 
    new_id = new_id.replace(/[^a-z0-9-_.]/g, "")
    
    // 3단계
    new_id = new_id.replace(/[.]{2,}/g,".")

    // 4단계
    if(new_id[0] === '.'){
        new_id = new_id.slice(1)
    }
    
    if(new_id[new_id.length - 1] === '.'){
        new_id = new_id.slice(0, -1);
    }

    // 5단계
    if(new_id.length === 0) {
        new_id = 'a';
    }
    
    // 6단계
    if(new_id.length >= 16){
        new_id = new_id.slice(0,15)
    }
    
    if(new_id[new_id.length - 1] === '.'){
        new_id = new_id.slice(0, -1);
    }
    
    // 7단계
    if(new_id.length <= 2){
        while(new_id.length < 3){
            new_id += new_id[new_id.length - 1]
        }
    }
    
    return new_id
}
