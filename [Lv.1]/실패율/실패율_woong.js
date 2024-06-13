function solution(N, stages) {
    var answer = [];
    let arr = new Map();
    let 분모;
    let 분자;
    for(let i = 1; i <= N; i++){
        분모 = stages.filter((stage)=>stage == i).length
        // console.log(분모)
        분자 = stages.filter((stage)=>stage >= i).length
        // console.log(분자)
        arr.set(i,분모/분자*100)
        // console.log(arr)
    }
    let sortArr = [...arr].sort((a, b) => b[1] - a[1]);
    // console.log(sortArr)
    // console.log(sortArr.length)
    for(let i = 0; i < sortArr.length; i++){
        answer.push(sortArr[i][0])
    }
    return answer;
}
