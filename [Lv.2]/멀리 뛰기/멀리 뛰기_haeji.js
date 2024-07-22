function solution(n) {
    /*
    let cnt = 1;
    let obj = {};
    
    // 2를 하나씩 추가한다
    // 2의 개수에 맞춰서 1의 개수를 구한다
    // 2와 1의 개수에 따라 발생할 수 있는 경우의 수를 구한다 => 그 값이 answer에 추가
    // => 폐기
    for(i=1; i<n; i++){
        let num = n - 2 * i;
        obj[1] = num;
        obj[2] = i;
        console.log(obj)
    }
    */
    
    let list = [0, 1, 2];
    if(n < 3){
        return list[n];
    } else {
        for(i=3; i<=n; i++){
            list.push(list[i-1]%1234567 + list[i-2]%1234567);
        }
        // console.log(list);
        return list[n]%1234567;
    }
}
