function solution(k, tangerine) {
    var answer = 0;
    let arr = [];
    
    // 귤의 크기에 따른 갯수 정리
    for(i=0; i<tangerine.length; i++){
        let check_idx = arr.findIndex((v => v.num === tangerine[i]));
        if(check_idx >= 0){
            arr[check_idx].cnt++;
        } else {
            arr.push({
                num: tangerine[i],
                cnt: 1
            })
        }
    }
    // console.log(arr)
    
    // 같은 크기가 많은 순으로 정렬
    arr.sort((a,b) => b.cnt - a.cnt);

    // 귤 k개 고르기
    for(i=0; i<arr.length; i++){
        if(k <= 0){
            break;
        } else {
            k -= arr[i].cnt;
            answer++;
        }
    }

    return answer;
}
