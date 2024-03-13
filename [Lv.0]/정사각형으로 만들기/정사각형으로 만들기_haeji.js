function solution(arr) {
    var answer = [[]];
    let rowCnt = arr.length;
    let colCnt = arr[0].length;
    
    console.log(`rowCnt: ${rowCnt}`);
    console.log(`colCnt: ${colCnt}`);
    
    let plusCnt = rowCnt - colCnt;
    
    if(rowCnt === colCnt){
        answer = arr;
    } else if(plusCnt > 0){
        // row가 더 많을 때
        for(i=0; i<rowCnt; i++){
            for(j=0; j<plusCnt; j++){
                arr[i].push(0);
            }
        }
        answer = arr
        
    } else {
        // col이 더 많을때
        // sol[plusCnt][colCnt]
        let sol = new Array(Math.abs(plusCnt));
        for(i=0; i<sol.length; i++){
            sol[i] = new Array(colCnt).fill(0);
        }
        arr.push(...sol)
        answer = arr
    }
    return answer;
}
