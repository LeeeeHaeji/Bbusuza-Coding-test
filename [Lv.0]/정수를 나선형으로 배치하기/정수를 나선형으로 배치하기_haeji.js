function solution(n) {
    var answer = [[]];
    let arr = new Array(n).fill(0);
    let cnt = 1;
    
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(n).fill(0);
    }
    
    if(n === 1){
        answer = [[1]]; 
    } else {
        while(cnt<=n**2){
            for(j=0; j<n-1; j++){
                for(i=0; i<n-1; i++){
                    if(arr[j][i] === 0){
                        arr[j][i] = cnt;
                        cnt++;
                    }
                }

                for(i=0; i<n-1; i++){
                    if(arr[i][n-1-j] === 0){
                        arr[i][n-1-j] = cnt;
                        cnt++
                    }
                }

                for(i=0; i<n-1; i++){
                    if(arr[n-1-j][n-i-1-j] === 0){
                        arr[n-1-j][n-i-1-j] = cnt;
                        cnt++
                    }
                }

                for(i=0; i<n-1; i++){
                    if(arr[n-i-1][j] === 0){
                        arr[n-i-1][j] = cnt;
                        cnt++
                    }
                }

            }
        }
        answer = arr;
    }
    
    return answer;
}
