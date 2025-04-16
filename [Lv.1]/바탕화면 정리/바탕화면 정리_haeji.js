function solution(wallpaper) {
    var answer = [];

//     과거의 풀이
//     let lux = 0, luy = 0, rdx = 0, rdy = 0;
//     let x = [], y = [];
    
//     for(i=0; i<wallpaper.length; i++){
//         for(j=0; j<wallpaper[i].length; j++){
//             if(wallpaper[i][j] === '#'){
//                 x.push(i);
//                 y.push(j);
//             }
//         }
//     }
    
//     answer.push(lux = Math.min(...x));
//     answer.push(luy = Math.min(...y));
//     answer.push(rdx = Math.max(...x) + 1);
//     answer.push(rdy = Math.max(...y) + 1);

    let startPoint = [0,0];
    let endPoint = [0,0];
    let row = [];
    let col = [];
    
    wallpaper.forEach((v,i) => {
        if(v.includes('#')){
            row.push(i);
            
            for(k=0; k < v.length; k++){
                if(v[k] === '#'){
                    col.push(k)
                }
            }
        }
    })

    startPoint[0] = Math.min(...row);
    startPoint[1] = Math.min(...col);
    endPoint[0] = Math.max(...row) + 1;
    endPoint[1] = Math.max(...col) + 1;

    return startPoint.concat(endPoint);
}
