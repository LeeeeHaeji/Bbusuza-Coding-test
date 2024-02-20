function solution(nums) {
    const set = new Set(nums);
    const numbers = [...set];
    if(numbers.length < nums.length/2){
        return numbers.length;
    } else {
        return nums.length/2;
    }
}