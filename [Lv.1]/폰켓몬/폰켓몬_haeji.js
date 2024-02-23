function solution(nums) {
    var answer = 0;
    let num = nums.length/2;
    let choose = new Set(nums);
    
    if(num > choose.size){
        // 선택하는 횟수가 종의 수보다 많다면
        answer = choose.size;
    } else{
        // 선택하는 횟수가 종의 수보다 적다면
        answer = num;
    }

    return answer;
}
