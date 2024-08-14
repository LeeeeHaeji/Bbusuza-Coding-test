function solution(n, left, right) {
    var answer = [];

    /* 과거의 시도
    let num_list = new Array(n);
    
    let cnt = 0;
    
    for(i=0; i<num_list.length; i++){
        if(cnt > right) {
            break;
        }else{
            num_list[i] = new Array(n).fill(i+1)

            for(j=0; j<num_list[i].length; j++){
            if(i < j){
                    num_list[i][j] = j+1
                }
                cnt++;
            }
        }
    }
    // console.log(num_list)
    // console.log('cnt: ' + cnt)
    return answer = num_list.flat().slice(left, right+1);
    */
    let num_list = new Array(right - left + 1);
    
    let col = left%n + 1,
        row = Math.ceil(left/n);
    
    if(row === 0){
        row = 1;
    }
    
    for(i=0; i<num_list.length; i++){
        // console.log(`i: ${i}, col : ${col}, row: ${row}`)
        
        if(col > n){
            col = 1;
            row++;
        }
        
        num_list[i] = Math.max(row, col);
        col++;
        
        // console.log(num_list)
    }
    // console.log(num_list)

    return answer = num_list
}
