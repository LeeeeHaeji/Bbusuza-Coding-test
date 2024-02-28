function solution(n, arr1, arr2) {
    var answer = [];
    let sol = new Array(n);
    
    for(i=0; i<n; i++){
        arr1[i] = arr1[i].toString(2).padStart(n, "0");
        arr2[i] = arr2[i].toString(2).padStart(n, "0");
        
        sol[i] = new Array(n).fill('#');
    }

    for(i=0; i<n; i++){
        for(j=0; j<n; j++){
            if((arr1[i][j] === arr2[i][j]) && (arr1[i][j] === '0')){
                sol[i][j] = ' ';
            } 
        }
    }
    
    return answer = sol.map((v,i) => {
        return v.join('');
    });
}
