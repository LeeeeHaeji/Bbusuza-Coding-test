function solution(n, w, num) {
    let right = true; // 택배를 놓는 순서
    let box_list = [];
    let row, col = 0
  
    for(i=1; i<=n; i+=w){
        let box = [];
        for(j=i; j<i+w; j++){
            box.push(j);
        }
        
        if(!right){
            box.sort((a,b) => b-a);
        }
        
        box_list.push(box)
        if(right){
            right = false;
        }else{
            right = true;
        }
    }
    // console.log(box_list)

    box_list.forEach((v,i) => {
        for(j=0; j<w; j++){
            if(v[j] === num){
                row = i;
                col = j;
            }
        }
    })
    // console.log(`row: ${row}, col: ${col}`)

    if(box_list[box_list.length-1][col] > n){
        return box_list.length - row - 1;
    }else {
        return box_list.length - row;
    }

}
