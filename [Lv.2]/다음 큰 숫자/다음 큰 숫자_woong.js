function solution(n) {
    var answer = 0;
    let toStringN = n.toString(2)
    let onlyOne = toStringN.replaceAll(0,"")

    // console.log(toStringN)
    // console.log(toStringN.replaceAll(0,""))
    for(let i = n+1; i < n +10; i++){
        let toStringI = i.toString(2)
        let onlyOneI = toStringI.replaceAll(0,"")
        if(onlyOne.length == onlyOneI.length) {
           answer = i
            break;
           }
    }
    return answer;
}
