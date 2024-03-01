function solution(rank, attendance) {
    let arr = [];
    let result = 0;
    for(let i = 0; i <attendance.length; i++){
        if(attendance[i]){
            arr.push(rank[i])
            arr.sort((a,b)=>a-b)
        }
    }
    result = 10000 * rank.indexOf(arr[0]) + 100 * rank.indexOf(arr[1]) + rank.indexOf(arr[2])
    return result;
}
