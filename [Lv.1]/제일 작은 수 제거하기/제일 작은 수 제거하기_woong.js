function solution(arr) {
    var answer = [];
    // console.log(arr.indexOf(Math.min(...arr))) // 배열에서 가장 작은 수의 index
    const minNumIndex = arr.indexOf(Math.min(...arr))

    if(arr.length == 1){
        return [-1]
    }else {
        arr.splice(minNumIndex,1)
        return arr
    }
}
