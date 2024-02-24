function solution(arr) {
    var answer = 0;
    let divide_nums = [];
    let is_divide = false;
    let cnt = 2;
      
    while(cnt <= Math.max(...arr)){
        for(i=0; i<arr.length; i++){
            for(j=i+1; j<arr.length; j++){
                if((arr[i]%cnt === 0) && (arr[j]%cnt === 0)){
                    // 공통으로 나누어지는 수가 있는지 확인
                    is_divide = true;
                }
            }
        }
        
        if(is_divide){
            // 나눌 수 있는 수가 있다면
            for(i=0; i<arr.length; i++){
                if(arr[i]%cnt === 0){
                    arr[i] = arr[i]/cnt;
                }
            }
            divide_nums.push(cnt);
            is_divide = false;
        } else {
            cnt++;
        }
    }

    if(divide_nums[0] === undefined){
        // 나누어지는 수가 하나도 없다면
        answer = arr.reduce((acc, cur) => {
            return acc * cur
        })
    } else {
        answer = (arr.reduce((acc, cur) => {
            return acc * cur
        })) * (divide_nums.reduce((acc, cur) => {
            return acc * cur}))
    }
    
    return answer;
}
